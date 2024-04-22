import createFetchRequest, { IGetRequestOptions } from ".";

export const getMe = async (data?: IGetRequestOptions) => {
  return await createFetchRequest({
    method: "GET",
    url: "/users/me",
    bodyOrQuery: data?.bodyOrQuery,
    options: data?.options,
    headers: data?.headers,
  });
};

export const registerUser = async (data?: IGetRequestOptions) => {
  return await createFetchRequest({
    method: "POST",
    url: "/users/register",
    bodyOrQuery: data?.bodyOrQuery,
    options: data?.options,
    headers: data?.headers,
  });
};
