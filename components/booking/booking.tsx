"use client";
import { useEffect, useState } from "react";
import Button from "@/components/primitives/button";
import RightArrow from "@/assets/icons/RightArrow";
import LeftArrow from "@/assets/icons/LeftArrow";
import { IUser } from "@/components/contexts/auth-context";
import Spinner from "@/components/primitives/spinner";
import { useBookings } from "@/components/contexts/bookings-context";
import DateNavigator from "./date-navigator";
import BookingSlot from "./booking-slot";
export enum BookingIntervals {
  "TWOFOUR" = "14:00 - 16:00",
  "FOURSIX" = "16:00 - 18:00",
  "SIXEIGHT" = "18:00 - 20:00",
}

export interface Spot {
  id: number;
  date: string;
  interval: keyof typeof BookingIntervals;
  projectName?: string;
  projectDescription?: string;
  userId: number;
  user?: IUser;
}

export interface Booking extends Spot {
  id: number;
  date: string;
  interval: keyof typeof BookingIntervals;
  projectName: string;
  projectDescription: string;
  userId: number;
  user: IUser;
}
export interface IDate {
  day: number;
  dayName: string;
  month: number;
  monthName: string;
  year: number;
}
export function getFormattedDate(
  date: Date = new Date(),
  timeZone = "Europe/Bucharest"
): IDate {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: timeZone,
  });

  const [month, day, year] = formatter.format(date).split("/");
  return {
    day: parseInt(day, 10),
    dayName: Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date),
    month: parseInt(month, 10) - 1, // Adjust month index to be zero-based
    monthName: Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    year: parseInt(year, 10),
  };
}

export const isBeforeToday = (date: IDate) => {
  const today = getFormattedDate();
  return (
    date.year < today.year ||
    (date.year === today.year && date.month < today.month) ||
    (date.year === today.year &&
      date.month === today.month &&
      date.day < today.day)
  );
};

export const isMonthBeforeCurrent = (month: number, year: number) => {
  const today = getFormattedDate();
  return year < today.year || (year === today.year && month < today.month);
};

const Booking = () => {
  const { loading, rePopulateBookings } = useBookings();
  const [selectedDate, setSelectedDate] = useState(getFormattedDate());

  useEffect(() => {
    rePopulateBookings(selectedDate);
  }, [selectedDate]);

  return (
    <div className="p-4 border-2 border-black rounded max-w-full">
      <div>
        <h1 className="text-4xl font-bold mb-4">Book a session</h1>
        <p className="text-lg">
          Select a date for your session. Any of the open spots will be
          displayed below, pick one and submit your booking.
        </p>
      </div>
      <div className="border-b-2 border-black my-4"></div>
      <DateNavigator
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div className="border-b-2 border-black my-4"></div>
      <div className="flex flex-col gap-y-4 relative w-full">
        {Object.values(BookingIntervals).map((interval) => {
          return (
            <BookingSlot
              key={interval}
              interval={interval}
              selectedDate={selectedDate}
            />
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
