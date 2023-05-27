import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalAddTransactionOpen: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeIsModalAddTransactionOpen: (state) => {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
  },
});

export const { changeIsModalAddTransactionOpen } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
