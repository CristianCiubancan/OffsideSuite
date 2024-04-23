import React, { createContext, useContext, useState, useEffect } from "react";
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

    const paddedMonth = String(selectedDate.month).padStart(2, "0");
    const paddedDay = String(selectedDate.day).padStart(2, "0");
    const isoDateString = `${selectedDate.year}-${paddedMonth}-${paddedDay}T00:00:00`;
    const formattedDate = new Date(isoDateString);
    formattedDate.setMinutes(
      formattedDate.getMinutes() + formattedDate.getTimezoneOffset()
    );

    let bookingsData = [];
    try {
      bookingsData = await getBookings({
        bodyOrQuery: { date: formattedDate.toISOString() },
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
