import todoReducer from "./todo/todo.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
