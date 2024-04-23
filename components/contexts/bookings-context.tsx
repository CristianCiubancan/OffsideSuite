import React, { createContext, useContext, useState, useEffect } from "react";
import { getBookings } from "@/api/booking";

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

  const rePopulateBookings = async (selectedDate: {
    day: number;
    month: number;
    year: number;
  }) => {
    setLoading(true);
    const formattedDate = new Date(
      `${selectedDate.year}-${selectedDate.month + 1}-${selectedDate.day}`
    );
    formattedDate.setHours(0, 0, 0, 0);
    formattedDate.setMinutes(
      formattedDate.getMinutes() + formattedDate.getTimezoneOffset()
    );
    const bookingsData = await getBookings({
      bodyOrQuery: { date: formattedDate.toISOString() },
    });
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
