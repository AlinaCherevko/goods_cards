import { configureStore } from "@reduxjs/toolkit";
import { drinksApi, mealApi, sweetsApi } from "../redux/servises";

export const store = configureStore({
  reducer: {
    // filter: filterSlice,
    [mealApi.reducerPath]: mealApi.reducer,
    [drinksApi.reducerPath]: drinksApi.reducer,
    [sweetsApi.reducerPath]: sweetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    mealApi.middleware,
    drinksApi.middleware,
    sweetsApi.middleware,
  ],
});
