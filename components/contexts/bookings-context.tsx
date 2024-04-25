"use client";
import React, { createContext, useContext, useState } from "react";
import { getBookings } from "@/api/booking";
import { toast } from "react-toastify";

const BookingsContext = createContext<{
  bookings: any[];
  loading: boolean;
  rePopulateBookings: (selectedDate: {
    day: number;
    month: number;
    year: number;
  }) => Promise<void>;
}>({
  bookings: [],
  loading: false,
  rePopulateBookings: async () => {},
});

export const BookingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const notifyError = (err: any) => {
    const message = err.message || "Unknown error";
    toast(
      `Failed to fetch bookings. Please try again later. Error: ${message}`,
      {
        type: "error",
      }
    );
  };
  const rePopulateBookings = async (selectedDate: {
    day: number;
    month: number;
    year: number;
  }) => {
    setLoading(true);

    const timeZone = "Europe/Bucharest";
    const date = new Date(
      Date.UTC(selectedDate.year, selectedDate.month, selectedDate.day)
    );

    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: timeZone,
      hour12: false,
    });

    const formattedDate = formatter.format(date);
    let bookingsData = [];
    try {
      bookingsData = await getBookings({
        bodyOrQuery: { date: encodeURIComponent(formattedDate) },
      });
    } catch (err) {
      notifyError(err);
      setBookings([]);
      setLoading(false);
      return;
    }

    setBookings(bookingsData);
    setLoading(false);
  };

  return (
    <BookingsContext.Provider value={{ bookings, loading, rePopulateBookings }}>
      {children}
    </BookingsContext.Provider>
  );
};

export const useBookings = () => useContext(BookingsContext);
