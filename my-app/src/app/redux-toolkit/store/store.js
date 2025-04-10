import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./brandSlice";
import userReducer from "./userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    brand: brandReducer,
  },
});
