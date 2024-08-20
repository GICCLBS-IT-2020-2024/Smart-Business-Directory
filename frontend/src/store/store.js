import { configureStore } from "@reduxjs/toolkit";
import authStatusReducer from "./states/authStatus";
import registerFormReducer from "./states/registerForm";
import userDataReducer from "./states/userData";
import categoriesReducer from "./states/categories";

export default configureStore({
  reducer: {
    authStatus: authStatusReducer,
    registerForm: registerFormReducer,
    userData: userDataReducer,
    categories: categoriesReducer,
  },
});
