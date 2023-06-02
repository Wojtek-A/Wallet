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
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.isLoading = false;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.transactions.findIndex(
          (transaction) => transaction.id === action.payload.id
        );
        state.transactions.splice(index, 1);
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.transactions.findIndex(
          (transaction) => transaction.id === action.payload.id
        );
        state.transactions[index] = action.payload;
      })

      .addMatcher(isPendingWalletAction, handlePending)
      .addMatcher(isRejectedWalletAction, handleError);
  },
});

export const { setMonth, setYear } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
