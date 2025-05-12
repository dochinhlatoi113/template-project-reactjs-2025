import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIndex: null,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { setSelectedIndex } = brandSlice.actions;
export default brandSlice.reducer;
