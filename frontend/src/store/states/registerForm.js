import { createSlice } from "@reduxjs/toolkit";

export const registerForm = createSlice({
  name: "RegisterForm",
  initialState: {
    value: "",
  },
  reducers: {
    addValues: (state, action) => {
      return { ...state, value: action.payload };
    },
    reset: (state) => {
      return { ...state, value: "" };
    },
  },
});

export const { addValues, reset } = registerForm.actions;

export default registerForm.reducer;
