import { useEffect, useState } from "react";
import Button from "@/components/primitives/button";
import RightArrow from "@/assets/icons/RightArrow";
import LeftArrow from "@/assets/icons/LeftArrow";
import { ModalNames, useModal } from "../contexts/modal-context";
import { IUser, useAuth } from "../contexts/auth-context";
import Spinner from "../primitives/spinner";
import { useBookings } from "../contexts/bookings-context";
import styles from "./booking.module.css";
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

export const stringsToColors = (strs: string[]) => {
  // Combine strings to get a single string
  const combinedStr = strs.join("");

  // Simple hashing function to get an integer hash from a string
  const hashFn = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  // A function to convert a hash into a hex color
  const intToRGB = (i: number) => {
    const c = (i & 0x00ffffff).toString(16).toUpperCase();
    return "#" + "00000".substring(0, 6 - c.length) + c;
  };

  // Split the string in half to create two "seed" strings
  const halfIndex = Math.ceil(combinedStr.length / 2);
  const str1 = combinedStr.substring(0, halfIndex);
  const str2 = combinedStr.substring(halfIndex);

  // Generate two colors from the halves
  const color1 = intToRGB(hashFn(str1));
  const color2 = intToRGB(hashFn(str2));

  return { color1, color2 };
};

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
    <div className="p-4 border-2 border-black rounded max-w-full">
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
      <div className="flex flex-col gap-y-4 relative w-full">
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
          const { color1, color2 } = stringsToColors([
            bookingOrSpot?.user?.firstName!,
            bookingOrSpot?.user?.lastName!,
          ]);
          return todaysBookingsMap.has(interval) ? (
            <button
              key={`${selectedDate.day}${selectedDate.month}${selectedDate.year}${interval}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="bg-yellow-50 h-24 text-left flex gap-4 border-2 border-black rounded text-black cursor-pointer hover:cursor-not-allowed w-full"
            >
              <span className="flex-shrink-0 h-full flex flex-col items-center justify-center bg-red-800 text-white rounded-l-xs text-center w-20">
                {interval.split(" ").map((word) => {
                  return <div key={word}>{word}</div>;
                })}
              </span>

              <div className="h-full py-2 flex flex-col justify-between text-sm overflow-hidden">
                <div className="truncate">
                  <span className="font-bold">Project: </span>
                  <span>{bookingOrSpot?.projectName}</span>
                </div>
                <div className="truncate">
                  <span className="font-bold">Artist: </span>
                  <span
                    className={`${styles.gradientText}`}
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${color1}, ${color2})`,
                    }}
                  >
                    {bookingOrSpot?.user?.nickname ||
                      bookingOrSpot?.user?.firstName}
                  </span>
                </div>
                <div className="truncate">
                  <span className="font-bold">Description: </span>
                  <span>{bookingOrSpot?.projectDescription}</span>
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
              className="bg-yellow-50 text-left flex items-start gap-4 border-2 border-black rounded text-black cursor-pointer hover:bg-green-700 hover:border-green-950 hover:text-white"
            >
              <span className="p-4 bg-green-700 text-white rounded-l-xs w-20 text-center">
                {interval}
              </span>
              <span className="py-4">It's free! Click to book it now.</span>
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
