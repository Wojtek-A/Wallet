import { createSlice } from "@reduxjs/toolkit";

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
};

const walletSlice = createSlice({
  name: "wallet",
  initialState: walletInitialState,
  reducers: {},
});

export const walletReducer = walletSlice.reducer;
