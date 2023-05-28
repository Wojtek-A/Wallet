import { configureStore } from "@reduxjs/toolkit";
import { walletReducer } from "./wallet/wallet.slice";
import { globalReducer } from "./global/slice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    global: globalReducer,
  },
});
