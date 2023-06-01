import { createSlice } from "@reduxjs/toolkit";
import { addTransaction } from "./transactions.thunk";

const initialState = {
  isLoading: false,
  balance: 0,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    [addTransaction.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addTransaction.fulfilled](state, action) {
      state.isLoading = false;
      state.transactions.push(action.payload);
      state.balance = action.payload.balance;
    },
    [addTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
