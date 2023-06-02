import Tasks from "../../data/Tasks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = Tasks;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  //   TODO: add reducers here
  reducers: {},
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;
