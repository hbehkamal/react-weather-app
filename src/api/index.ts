import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getWather = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}`,
  }),
  endpoints: (builder) => ({
    getWeatherByName: builder.query({
      query: (name) => `${name}/?key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetWeatherByNameQuery } = getWather;
