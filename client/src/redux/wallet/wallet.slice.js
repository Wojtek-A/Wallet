import { createSlice } from "@reduxjs/toolkit";
import { getCurrencyThunk } from "./wallet.thunk";

const walletInitialState = {
  transaction: [
    {
      Date: new Date().toLocaleDateString(),
      Type: "-",
      Category: "Other",
      Comment: "test",
      Sum: 500,
    },
    {
      Date: new Date().toLocaleDateString(),
      Type: "+",
      Category: "Other",
      Comment: "test",
      Sum: 500,
    },
    {
      Date: new Date().toLocaleDateString(),
      Type: "-",
      Category: "Other",
      Comment: "test",
      Sum: 500,
    },
  ],

  currency: [],
  isLoading: false,
  error: false,
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencyThunk.fulfilled, (state, action) => {
        state.currency = action.payload;
        state.isLoading = false;
      })

      .addMatcher(isPendingWalletAction, handlePending)
      .addMatcher(isRejectedWalletAction, handleError);
  },
});

export const walletReducer = walletSlice.reducer;
