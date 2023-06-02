import todoReducer from "./todo/todo.slice";
import searchReducer from "./search/search.slice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    searchField: searchReducer,
  },
});

export default store;
