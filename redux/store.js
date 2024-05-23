import { configureStore } from "@reduxjs/toolkit";
import { drinksApi, mealApi, sweetsApi } from "../redux/servises";
import { favoritesReducer } from "./Slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesConfig, favoritesReducer),
    [mealApi.reducerPath]: mealApi.reducer,
    [drinksApi.reducerPath]: drinksApi.reducer,
    [sweetsApi.reducerPath]: sweetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mealApi.middleware, drinksApi.middleware, sweetsApi.middleware),
});
export const persistor = persistStore(store);
