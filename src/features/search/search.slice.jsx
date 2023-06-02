import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFieldVisible: true,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearchField: (state) => {
      state.isFieldVisible = !state.isFieldVisible;
      console.log(state.isFieldVisible);
    },
  },
});

export const { toggleSearchField } = searchSlice.actions;
export default searchSlice.reducer;
