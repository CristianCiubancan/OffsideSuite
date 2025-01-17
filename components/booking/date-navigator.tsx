import Button from "@/components/primitives/button";
import {
  IDate,
  getFormattedDate,
  isBeforeToday,
  isMonthBeforeCurrent,
} from "@/components/booking/booking";
import LeftArrow from "@/assets/icons/LeftArrow";
import RightArrow from "@/assets/icons/RightArrow";
import Spinner from "../primitives/spinner";

interface IDateNavigatorProps {
  selectedDate: IDate | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<IDate | null>>;
}

export const getMaxDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const DateNavigator = ({
  selectedDate,
  setSelectedDate,
}: IDateNavigatorProps) => {
  const isPreviousDayDisabled = selectedDate
    ? isBeforeToday(
        getFormattedDate(
          new Date(selectedDate.year, selectedDate.month, selectedDate.day - 1)
        )
      )
    : false;

  const isPreviousMonthDisabled = selectedDate
    ? isMonthBeforeCurrent(selectedDate.month - 1, selectedDate.year)
    : false;

  return (
    <div className="relative">
      {selectedDate ? (
        <>
          <div className="flex justify-between items-center">
            <Button
              key={`${selectedDate.day}${selectedDate.month}${selectedDate.year}`}
              color="yellow"
              theme="light"
              disabled={isPreviousDayDisabled}
              onClick={() => {
                setSelectedDate((prev) => {
                  if (!prev) {
                    return getFormattedDate();
                  }
                  const { day, month, year } = prev;
                  const newDay =
                    day - 1 < 1 ? getMaxDaysInMonth(month - 1, year) : day - 1;
                  const newMonth = day - 1 < 1 ? month - 1 : month;
                  const newYear = day - 1 < 1 ? year : year;
                  return {
                    ...prev,
                    day: newDay,
                    dayName: Intl.DateTimeFormat("en-US", {
                      weekday: "long",
                    }).format(new Date(year, newMonth, newDay)),
                    month: newMonth,
                    monthName: Intl.DateTimeFormat("en-US", {
                      month: "long",
                    }).format(new Date(year, newMonth)),
                    year: newYear,
                  };
                });
              }}
            >
              <LeftArrow
                width={24}
                height={24}
                className={
                  isPreviousDayDisabled ? "text-yellow-300" : "text-black"
                }
              />
            </Button>
            <div className="text-lg font-bold">
              {selectedDate.dayName} {selectedDate.day}
            </div>
            <Button
              color="yellow"
              theme="light"
              onClick={() => {
                setSelectedDate((prev) => {
                  if (!prev) {
                    return getFormattedDate();
                  }
                  const { day, month, year } = prev;
                  const maxDaysInMonth = getMaxDaysInMonth(month, year);
                  const newDay = day + 1 > maxDaysInMonth ? 1 : day + 1;
                  const newMonth = day + 1 > maxDaysInMonth ? month + 1 : month;
                  const newYear = day + 1 > maxDaysInMonth ? year : year;
                  return {
                    ...prev,
                    day: newDay,
                    dayName: Intl.DateTimeFormat("en-US", {
                      weekday: "long",
                    }).format(new Date(year, newMonth, newDay)),
                    month: newMonth,
                    monthName: Intl.DateTimeFormat("en-US", {
                      month: "long",
                    }).format(new Date(year, newMonth)),
                    year: newYear,
                  };
                });
              }}
            >
              <RightArrow width={24} height={24} />
            </Button>
          </div>
          <div className="border-b-2 border-black my-4"></div>
          <div className="flex justify-between items-center">
            <Button
              key={selectedDate.month}
              color="yellow"
              theme="light"
              disabled={isPreviousMonthDisabled}
              onClick={() => {
                setSelectedDate((prev) => {
                  if (!prev) {
                    return prev;
                  }
                  const { month, year } = prev;
                  const newMonth = month - 1 < 0 ? 11 : month - 1;
                  const newYear = month - 1 < 0 ? year - 1 : year;
                  const newDate = {
                    ...prev,
                    month: newMonth,
                    monthName: Intl.DateTimeFormat("en-US", {
                      month: "long",
                    }).format(new Date(year, newMonth)),
                    year: newYear,
                  };

                  return isBeforeToday(newDate) ? getFormattedDate() : newDate;
                });
              }}
            >
              <LeftArrow
                width={24}
                height={24}
                className={
                  isPreviousMonthDisabled ? "text-yellow-300" : "text-black"
                }
              />
            </Button>
            <div className="text-lg font-bold">
              {selectedDate.monthName} {selectedDate.year}
            </div>
            <Button
              color="yellow"
              theme="light"
              onClick={() => {
                setSelectedDate((prev) => {
                  if (!prev) {
                    return prev;
                  }
                  const { month, year } = prev;
                  const newMonth = month + 1 > 11 ? 0 : month + 1;
                  const newYear = month + 1 > 11 ? year + 1 : year;

                  return {
                    ...prev,
                    month: newMonth,
                    monthName: Intl.DateTimeFormat("en-US", {
                      month: "long",
                    }).format(new Date(year, newMonth)),
                    year: newYear,
                  };
                });
              }}
            >
              <RightArrow width={24} height={24} />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <Button key={"waiting"} color="yellow" theme="light">
              <LeftArrow width={24} height={24} />
            </Button>
            <div className="text-lg font-bold">waiting for date</div>
            <Button color="yellow" theme="light">
              <RightArrow width={24} height={24} />
            </Button>
          </div>
          <div className="border-b-2 border-black my-4"></div>
          <div className="flex justify-between items-center">
            <Button key={"month"} color="yellow" theme="light">
              <LeftArrow width={24} height={24} />
            </Button>
            <div className="text-lg font-bold">waiting for date</div>
            <Button color="yellow" theme="light">
              <RightArrow width={24} height={24} />
            </Button>
          </div>
        </>
      )}
      {!selectedDate ? (
        <div className="absolute w-full h-full bg-yellow-300 top-0 left-0 flex justify-center items-center">
          <Spinner />
        </div>
      ) : null}
    </div>
  );
};

export default DateNavigator;
