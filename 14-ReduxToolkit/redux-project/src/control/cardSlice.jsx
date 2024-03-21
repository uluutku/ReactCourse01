import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 5,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItem: (state, action) => {
      const cardItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity = cardItem.quantity + 1;
    },
    decreaseItem: (state, action) => {
      const cardItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity = cardItem.quantity - 1;
    },
    calculateTotal: (state) => {
      console.log("calculate total calıstı");
      let total = 0;
      let quantityCount = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
        quantityCount += item.quantity;
      });
      state.quantity = quantityCount;
      state.total = total;
      console.log("yeni quantity:", quantityCount);
      console.log("yeni total:", total);
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
