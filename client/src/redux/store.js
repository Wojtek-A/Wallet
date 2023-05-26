import { configureStore } from "@reduxjs/toolkit";
import { walletReducer } from "./wallet/wallet.slice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});
