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
      console.log(state);
      return {
        nutritionItems: [],
        statusSelection: itemId,
        isLoading: true,
      };
    },
  },
});

console.log(cartSlice);
export const { changeStatus } = cartSlice.actions;
export default cartSlice.reducer;
