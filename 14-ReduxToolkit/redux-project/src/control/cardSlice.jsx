import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: [courseItems],
  quantity: 5,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
