import { createSlice } from "@reduxjs/toolkit";
import { itemList } from "./Data";

const itemSlice = createSlice({
  name: "items",
  initialState: itemList,
  reducers: {},
});
export default itemSlice.reducer;
