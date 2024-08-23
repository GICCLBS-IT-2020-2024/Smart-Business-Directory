import { createSlice } from "@reduxjs/toolkit";

export const categories = createSlice({
  name: "Category",
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      state.map((category) => {
        if (category.value === action.payload.value) {
          category.label = action.payload.category;
        }
      });
    },
  },
});

export const { setCategories, addCategory, editCategory } = categories.actions;

export default categories.reducer;
