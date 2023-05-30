import { createSelector } from "@reduxjs/toolkit";

export const selectTransaction = (state) => state.wallet.transaction;
export const selectCurrency = (state) => state.wallet.currency;
export const selectIsLoading = (state) => state.wallet.isLoading;
export const selectStatisticsDate = (state) => state.wallet.statisticsDate;
