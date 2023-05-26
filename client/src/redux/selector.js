import { createSelector } from "@reduxjs/toolkit";

export const selectTransaction = (state) => state.wallet.transaction;
