import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  // Ім'я слайсу
  name: "favorites",
  // Початковий стан редюсера слайсу
  initialState: {
    favorites: [],
    status: "idle",
    isLoading: false,
    error: null,
  },
  // Об'єкт редюсерів
  reducers: {
    addFavorite(state, action) {
      //state.favorites = [...state.favorites, action.payload];
      state.favorites = [
        ...state.favorites,
        { ...action.payload, quantity: 1 },
      ];
    },
    deleteFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (data) => data._id !== action.payload
      );
      console.log(action.payload);
    },
    updateFavoriteQuantity(state, action) {
      const { id, quantity } = action.payload;
      const favorite = state.favorites.find((data) => data._id === id);
      if (favorite) {
        favorite.quantity = quantity;
      }
    },
  },
});

// Генератори екшенів
export const { addFavorite, deleteFavorite, updateFavoriteQuantity } =
  favoritesSlice.actions;
// Редюсер слайсу
export const favoritesReducer = favoritesSlice.reducer;
