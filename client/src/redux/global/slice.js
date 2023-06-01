import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
  isModalLogoutOpen: false,
  transactionToEdit: [],
};

export const resetState = createAction("global/resetState");

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeIsModalAddTransactionOpen: (state) => {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
    changeIsModalEditTrasactionOpen: (state) => {
      state.isModalEditTransactionOpen = !state.isModalEditTransactionOpen;
    },
    setTransactionToEdit: (state, action) => {
      state.transactionToEdit = action.payload;
    },
    changeIsModalLogoutOpen: (state) => {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
  },
});

export const {
  changeIsModalAddTransactionOpen,
  changeIsModalEditTrasactionOpen,
  setTransactionToEdit,
  changeIsModalLogoutOpen,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
