import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getCity = createApi({
  reducerPath: "city",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_CITY_API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "authorization",
        `Bearer ${process.env.REACT_APP_CITY_API_TOKEN}`
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCityByName: builder.query({
      query: (name) => `reference-data/locations/cities?keyword=${name}`,
    }),
  }),
});

export const getWather = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}`,
  }),
  endpoints: (builder) => ({
    getWeatherByName: builder.query({
      query: (name) =>
        `${name}/?unitGroup=metric&key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetWeatherByNameQuery } = getWather;
export const { useGetCityByNameQuery } = getCity;
