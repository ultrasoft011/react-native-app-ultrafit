import DATA from "../../data/status";
import { createSlice } from "@reduxjs/toolkit";
import nutritionItems from "../../data/nutritionItems";

const initialState = {
  nutritionItems: nutritionItems,
  statusSelection: "",
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      const itemId = action.payload;
      // console.log(state);
      return {
        nutritionItems: [],
        statusSelection: itemId,
        isLoading: true,
      };
    },
    addFood: (state, action) => {
      const food = action.payload;
      console.log(food);
      return {
        ...state,
        nutritionItems: [...state.nutritionItems, food],
      };
      },
  },
});

console.log(cartSlice);
export const { changeStatus, addFood } = cartSlice.actions;
export default cartSlice.reducer;
