import { createSelector } from '@reduxjs/toolkit';

export const selectTransactions = (state) => state.wallet.transactions;
export const selectCurrency = (state) => state.wallet.currency;
export const selectIsLoading = (state) => state.wallet.isLoading;
export const selectErrorStatus = (state) => state.wallet.error;
export const selectStatisticsDate = (state) => state.wallet.statisticsDate;
