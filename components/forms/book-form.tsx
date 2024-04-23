import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/forms/input-field";
import Button from "@/components/primitives/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "../contexts/modal-context";
import lodash from "lodash";
import { useAuth } from "../contexts/auth-context";
import { createBooking } from "@/api/booking";
import { BookingIntervals } from "../booking";
import { useBookings } from "../contexts/bookings-context";
export interface IBookForm {
  projectName: string;
  projectDescription: string;
}
function getKeyByValue(value: string) {
  return Object.keys(BookingIntervals).find(
    (key: string) =>
      BookingIntervals[key as keyof typeof BookingIntervals] === value
  );
}
const BookForm = ({ notify }: { notify: () => void }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { rePopulateBookings } = useBookings();

  const { closeModal, additionalData } = useModal();
  const { refreshUser } = useAuth();
  const methods = useForm<IBookForm>({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      projectName: "",
      projectDescription: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
  } = methods;
  const router = useRouter();

  const onSubmit = async (data: IBookForm) => {
    setLoading(true);
    const formattedDate = new Date(additionalData?.date);
    // set everything to 0 except the date
    formattedDate.setHours(0, 0, 0, 0);
    // also set the timezone to UTC
    formattedDate.setMinutes(
      formattedDate.getMinutes() + formattedDate.getTimezoneOffset()
    );
    const res = await createBooking({
      bodyOrQuery: {
        ...data,
        date: formattedDate.toISOString(),
        interval: getKeyByValue(additionalData?.interval),
      },
    });
    if (!res?.error) {
      console.log("additionalData?.", additionalData);
      // set token as a cookie
      // document.cookie = `${config.cookie_name}=${res.token}; path=/;`;
      notify();
      router.refresh();
      // sleep for 200ms
      await new Promise((resolve) => setTimeout(resolve, 200));
      await refreshUser();
      setLoading(false);
      closeModal();
      const datePieces = additionalData?.date.split("-");
      const selectedDate = {
        year: parseInt(datePieces[0]),
        month: parseInt(datePieces[1]) - 1,
        day: parseInt(datePieces[2]),
      };
      rePopulateBookings(selectedDate);
    } else {
      if (res?.error) {
        setError(res?.field, {
          type: "manual",
          message: res.error,
        });
        if (res?.field !== "root") {
          setError("root", {
            type: "manual",
            message:
              "Please check the form for errors. If the problem persists, please contact support.",
          });
        }
      }
      setLoading(false);
    }
  };
  const rootError = lodash.get(errors, "root");
  return (
    <FormProvider {...methods} key={"book-form"}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Project Name"
          name="projectName"
          validation={{
            required: "Project name is required",
            minLength: {
              value: 4,
              message: "Project name must be at least 4 characters",
            },
          }}
        />
        <InputField
          label="Project Description"
          autoComplete="organization"
          name="projectDescription"
          validation={{
            required: "Project description is required",
            minLength: {
              value: 2,
              message: "Project description must be at least 2 characters",
            },
          }}
        />

        <Button
          fullWidth
          color="red"
          type="submit"
          loading={loading}
          disabled={loading}
        >
          Book now!
        </Button>
        {rootError ? (
          <div className="text-red-300 text-base italic mt-2">
            {rootError.message as string}
          </div>
        ) : (
          <div className="text-red-300 text-base italic mt-2 min-h-6"> </div>
        )}
      </form>
    </FormProvider>
  );
};

export default BookForm;
