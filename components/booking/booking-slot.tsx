import { useAuth } from "../contexts/auth-context";
import { useBookings } from "../contexts/bookings-context";
import { ModalNames, useModal } from "../contexts/modal-context";
import { turnNameToHexColor } from "../user-button";
import { Booking, BookingIntervals, IDate } from "./booking";
import styles from "@/components/booking/booking-slot.module.css";

const BookingSlot = ({
  interval,
  selectedDate,
}: {
  interval: BookingIntervals;
  selectedDate: IDate;
}) => {
  const { openModal } = useModal();
  const { user } = useAuth();
  const { bookings, loading, rePopulateBookings } = useBookings();

  const todaysBookingsMap = new Map<string, Booking>();
  bookings.forEach((booking) => {
    todaysBookingsMap.set(
      BookingIntervals[booking.interval as keyof typeof BookingIntervals],
      booking
    );
  });
  const bookingOrSpot = todaysBookingsMap.get(interval);
  const color1 = turnNameToHexColor(
    (bookingOrSpot?.user?.firstName || "asdasd") +
      (bookingOrSpot?.user?.lastName || "123123"),
    true
  );
  const color2 = turnNameToHexColor(
    (bookingOrSpot?.user?.firstName || "asdasd") +
      (bookingOrSpot?.user?.lastName || "123123"),
    false
  );

  return todaysBookingsMap.has(interval) ? (
    <button
      key={`${selectedDate.day}${selectedDate.month}${selectedDate.year}${interval}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="bg-stone-200 h-24 text-left flex gap-4 border-2 border-black rounded text-black cursor-pointer hover:cursor-not-allowed w-full"
    >
      <span className="flex-shrink-0 h-full flex flex-col items-center justify-center bg-stone-400 text-white rounded-l-xs text-center w-20 border-r-2 border-r-black">
        {interval.split(" ").map((word) => {
          return <div key={word}>{word}</div>;
        })}
      </span>

      <div className="h-full py-2 flex flex-col justify-between text-sm overflow-hidden pr-4">
        <div className="truncate">
          <span className="font-bold">Project: </span>
          <span className="ml-1">{bookingOrSpot?.projectName}</span>
        </div>
        <div className="truncate">
          <span className="font-bold">Artist: </span>
          <span
            className={`${styles.gradientText} ml-1`}
            style={{
              backgroundImage: `linear-gradient(90deg, ${color1}, ${color2})`,
            }}
          >
            {bookingOrSpot?.user?.nickname || bookingOrSpot?.user?.firstName}
          </span>
        </div>
        <div className="truncate">
          <span className="font-bold">Description: </span>
          <span className="ml-1" style={{ maxWidth: "calc(100% - 4rem)" }}>
            {bookingOrSpot?.projectDescription}
          </span>
        </div>
      </div>
    </button>
  ) : (
    <button
      key={`${selectedDate.day}${selectedDate.month}${selectedDate.year}${interval}`}
      onClick={() => {
        if (!user) {
          openModal(ModalNames.NOTLOGGEDIN);
        } else {
          openModal(ModalNames.BOOKING, {
            date: `${selectedDate.year}-${selectedDate.month + 1}-${
              selectedDate.day
            }`,
            interval,
          });
        }
      }}
      className="bg-yellow-400 h-24 text-left flex items-start gap-4 border-2 border-black rounded text-black cursor-pointer hover:bg-yellow-500"
    >
      <span className="flex-shrink-0 h-full flex flex-col items-center justify-center rounded-l-xs text-center w-20 border-black border-r-2">
        {interval.split(" ").map((word) => {
          return <div key={word}>{word}</div>;
        })}
      </span>
      {/* <span className="p-4 bg-green-700 text-white rounded-l-xs w-20 text-center">
          {interval}
        </span> */}
      <div className="h-full py-2 flex flex-col justify-between text-sm overflow-hidden pr-2">
        <div className="flex items-center gap-2">
          <span className="leading-4 text-lg">
            It's available! Click to book it now.
          </span>
        </div>
      </div>
    </button>
  );
};
export default BookingSlot;
