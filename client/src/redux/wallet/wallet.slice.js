import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrencyThunk,
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from "./wallet.thunk.js";
// import { tempTransactionDB } from '../../tempDB/tempDB.js';

const walletInitialState = {
  transactions: [],
  currency: [],
  isLoading: false,
  error: false,
  statisticsDate: new Date().toISOString(),
};

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingWalletAction = (action) =>
  action.type.endsWith("pending") && action.type.startsWith("wallet");
const isRejectedWalletAction = (action) =>
  action.type.endsWith("rejected") && action.type.startsWith("wallet");

const walletSlice = createSlice({
  name: "wallet",
  initialState: walletInitialState,
  reducers: {
    setMonth: (state, action) => {
      const date = new Date(state.statisticsDate);
      date.setMonth(action.payload);
      state.statisticsDate = date.toISOString();
    },

    setYear: (state, action) => {
      const date = new Date(state.statisticsDate);
      date.setFullYear(action.payload);
      state.statisticsDate = date.toISOString();
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCurrencyThunk.fulfilled, (state, action) => {
        state.currency = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTransactions.pending, (state, action) => {
        state.transactions = [];
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.isLoading = false;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addMatcher(isPendingWalletAction, handlePending)
      .addMatcher(isRejectedWalletAction, handleError);
  },
});

export const { setMonth, setYear } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
