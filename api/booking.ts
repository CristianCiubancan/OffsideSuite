import createFetchRequest, { IGetRequestOptions } from ".";

export const getBookings = async (data?: IGetRequestOptions) => {
  return await createFetchRequest({
    method: "GET",
    url: "/bookings",
    bodyOrQuery: data?.bodyOrQuery,
    options: data?.options,
    headers: data?.headers,
  });
};

export const createBooking = async (data?: IGetRequestOptions) => {
  return await createFetchRequest({
    method: "POST",
    url: "/bookings",
    bodyOrQuery: data?.bodyOrQuery,
    options: data?.options,
    headers: data?.headers,
  });
};
