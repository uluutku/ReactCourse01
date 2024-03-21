import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/cardSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
