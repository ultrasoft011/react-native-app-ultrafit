import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nutritionItems: [],
  statusSelection: "",
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      const itemId = action.payload;
      console.log(itemId);
    },
  },
});

console.log(cartSlice);
export const {changeStatus} = cartSlice.actions;
export default cartSlice.reducer;
