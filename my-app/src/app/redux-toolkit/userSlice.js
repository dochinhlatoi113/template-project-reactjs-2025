import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setUserInfo, addToCart, clearCart } = userSlice.actions;
export default userSlice.reducer;
