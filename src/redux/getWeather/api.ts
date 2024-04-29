import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "fcfb05b6356149e1be0200807231809";

export const weatherApi = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`,
  }),
  endpoints: (builder) => ({
    getWeather: builder.mutation({
      query: (value) => ({
        url: value,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWeatherMutation } = weatherApi;
