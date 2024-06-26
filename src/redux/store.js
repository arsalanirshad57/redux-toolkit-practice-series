import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo-slice";

export const store = configureStore({
  reducer: {
    allTodos: todoReducer,
  },
});