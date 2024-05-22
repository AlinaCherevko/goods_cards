import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://goods-server.onrender.com";
const API_MEALS_ENDPOINT = "/meal";
const API_DRINKS_ENDPOINT = "/drinks";
const API_SWEETS_ENDPOINT = "/sweets";

export const mealApi = createApi({
  reducerPath: "meal",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Meal"],
  endpoints: (builder) => ({
    getAllMeal: builder.query({
      query: () => API_MEALS_ENDPOINT,
      providesTags: ["Meal"],
    }),
  }),
});
export const { useGetAllMealQuery } = mealApi;

export const drinksApi = createApi({
  reducerPath: "drinks",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Drinks"],
  endpoints: (builder) => ({
    getAllDrinks: builder.query({
      query: () => API_DRINKS_ENDPOINT,
      providesTags: ["Drinks"],
    }),
  }),
});
export const { useGetAllDrinksQuery } = drinksApi;

export const sweetsApi = createApi({
  reducerPath: "sweets",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Sweets"],
  endpoints: (builder) => ({
    getAllSweets: builder.query({
      query: () => API_SWEETS_ENDPOINT,
      providesTags: ["Sweets"],
    }),
  }),
});
export const { useGetAllSweetsQuery } = sweetsApi;
