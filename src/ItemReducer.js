import { createSlice } from "@reduxjs/toolkit";
import { itemList } from "./Data";

const itemSlice = createSlice({
  name: "items",
  initialState: itemList,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
