import { useEffect, useState } from "react";
import Button from "@/components/primitives/button";
import RightArrow from "@/assets/icons/RightArrow";
import LeftArrow from "@/assets/icons/LeftArrow";
import { ModalNames, useModal } from "../contexts/modal-context";
import { IUser, useAuth } from "../contexts/auth-context";
import Spinner from "../primitives/spinner";
import { useBookings } from "../contexts/bookings-context";

export enum BookingIntervals {
  "TWOTHREE" = "14:00 - 15:00",
  "THREEFOUR" = "15:00 - 16:00",
  "FOURFIVE" = "16:00 - 17:00",
  "FIVESIX" = "17:00 - 18:00",
  "SIXSEVEN" = "18:00 - 19:00",
  "SEVENEIGHT" = "19:00 - 20:00",
}

interface Spot {
  id: number;
  date: string;
  interval: keyof typeof BookingIntervals;
  projectName?: string;
  projectDescription?: string;
  userId: number;
  user?: IUser;
}

interface Booking extends Spot {
  id: number;
  date: string;
  interval: keyof typeof BookingIntervals;
  projectName: string;
  projectDescription: string;
  userId: number;
  user: IUser;
}

const Booking = () => {
  const { openModal } = useModal();
  const { user } = useAuth();
  const { bookings, loading, rePopulateBookings } = useBookings();
  const [selectedDate, setSelectedDate] = useState({
    day: new Date().getDate(),
    dayName: new Date().toLocaleString("en-us", { weekday: "long" }),
    month: new Date().getMonth(),
    monthName: new Date().toLocaleString("en-us", { month: "long" }),
    year: new Date().getFullYear(),
  });

  const isBeforeToday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight
    return date < today;
  };

  const isMonthBeforeCurrent = (month: number, year: number) => {
    const today = new Date();
    return (
      year < today.getFullYear() ||
      (year === today.getFullYear() && month < today.getMonth())
    );
  };

  useEffect(() => {
    rePopulateBookings(selectedDate);
  }, [selectedDate]);

  return (
    <div className="p-4 border-2 border-black rounded max-w-screen-md">
      <div>
        <h1 className="text-4xl font-bold mb-4">Book a session</h1>
        <p className="text-lg">
          Select a date for your session. Any of the open spots will be
          displayed below, pick one and sublit your booking.
        </p>
      </div>
      <div className="border-b-2 border-black my-4"></div>
      <div className="flex justify-between items-center">
        <Button
          key={`${selectedDate.day}${selectedDate.month}${selectedDate.year}`}
          color="yellow"
          theme="light"
          disabled={isBeforeToday(
            new Date(
              selectedDate.year,
              selectedDate.month,
              selectedDate.day - 1
            )
          )}
          onClick={() => {
            setSelectedDate((prev) => {
              const newDate = new Date(prev.year, prev.month, prev.day - 1);
              return isBeforeToday(newDate)
                ? prev
                : {
                    day: newDate.getDate(),
                    dayName: newDate.toLocaleString("en-us", {
                      weekday: "long",
                    }),
                    month: newDate.getMonth(),
                    monthName: newDate.toLocaleString("en-us", {
                      month: "long",
                    }),
                    year: newDate.getFullYear(),
                  };
            });
          }}
        >
          <LeftArrow width={24} height={24} />
        </Button>
        <div className="text-lg font-bold">
          {selectedDate.dayName} {selectedDate.day}
        </div>
        <Button
          color="yellow"
          theme="light"
          onClick={() => {
            setSelectedDate((prev) => {
              const newDate = new Date(prev.year, prev.month, prev.day + 1);
              return {
                day: newDate.getDate(),
                dayName: newDate.toLocaleString("en-us", { weekday: "long" }),
                month: newDate.getMonth(),
                monthName: newDate.toLocaleString("en-us", { month: "long" }),
                year: newDate.getFullYear(),
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
          disabled={isMonthBeforeCurrent(
            selectedDate.month - 1,
            selectedDate.year
          )}
          onClick={() => {
            setSelectedDate((prev) => {
              const newMonth = prev.month - 1 < 0 ? 11 : prev.month - 1;
              const newYear = prev.month - 1 < 0 ? prev.year - 1 : prev.year;
              const newDate = new Date(newYear, newMonth, prev.day);
              const newDateObj = {
                day: newDate.getDate(),
                dayName: newDate.toLocaleString("en-us", { weekday: "long" }),
                month: newDate.getMonth(),
                monthName: newDate.toLocaleString("en-us", { month: "long" }),
                year: newYear,
              };
              if (isBeforeToday(newDate)) {
                newDateObj.day = new Date().getDate();
                newDateObj.dayName = new Date().toLocaleString("en-us", {
                  weekday: "long",
                });
              }
              return newDateObj;
            });
          }}
        >
          <LeftArrow width={24} height={24} />
        </Button>
        <div className="text-lg font-bold">
          {selectedDate.monthName} {selectedDate.year}
        </div>
        <Button
          color="yellow"
          theme="light"
          onClick={() => {
            setSelectedDate((prev) => {
              const newMonth = prev.month + 1 > 11 ? 0 : prev.month + 1;
              const newYear = prev.month + 1 > 11 ? prev.year + 1 : prev.year;
              const newDate = new Date(newYear, newMonth, prev.day);
              return {
                day: newDate.getDate(),
                dayName: newDate.toLocaleString("en-us", { weekday: "long" }),
                month: newDate.getMonth(),
                monthName: newDate.toLocaleString("en-us", { month: "long" }),
                year: newYear,
              };
            });
          }}
        >
          <RightArrow width={24} height={24} />
        </Button>
      </div>
      <div className="border-b-2 border-black my-4"></div>
      <div className="flex flex-col gap-y-4 relative">
        {Object.values(BookingIntervals).map((interval) => {
          const todaysBookingsMap = new Map<string, Booking>();
          bookings.forEach((booking) => {
            todaysBookingsMap.set(
              BookingIntervals[
                booking.interval as keyof typeof BookingIntervals
              ],
              booking
            );
          });
          const bookingOrSpot = todaysBookingsMap.get(interval);
          return todaysBookingsMap.has(interval) ? (
            <button
              key={`${selectedDate.day}${selectedDate.month}${selectedDate.year}${interval}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="bg-gray-300 text-left flex items-center gap-4 border-2 border-gray-400 rounded text-gray-400 cursor-pointer hover:bg-red-200 hover:border-red-800 hover:text-black hover:cursor-not-allowed"
            >
              <span className="p-4 bg-red-800 text-white rounded-sm">
                {interval}
              </span>
              <span>
                {`${
                  bookingOrSpot?.user?.nickname
                    ? bookingOrSpot?.user?.nickname
                    : bookingOrSpot?.user?.firstName
                } - ${bookingOrSpot?.projectName}`}
              </span>
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
              className="bg-green-50 text-left flex items-center gap-4 border-2 border-green-800 rounded text-black cursor-pointer hover:bg-green-800 hover:border-green-950 hover:text-white"
            >
              <span className="p-4 bg-green-800 text-white rounded-sm">
                {interval}
              </span>
              <span>It's free! Click to book it now.</span>
            </button>
          );
        })}
        {loading ? (
          <div className="absolute w-full h-full bg-yellow-500 top-0 left-0 flex justify-center items-center">
            <Spinner />
          </div>
        ) : null}
      </div>
      <div className=""></div>
    </div>
  );
};

export default Booking;
