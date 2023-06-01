import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiURL = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const getCurrencyThunk = createAsyncThunk(
  "wallet/getCurrency",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "http://api.nbp.pl/api/exchangerates/tables/c/?format=JSON"
      );

      const data = await response.json();
      const filterResponse = data[0].rates.filter(
        (element) =>
          element.code === "USD" ||
          element.code === "EUR" ||
          element.code === "GBP" ||
          element.code === "CHF" ||
          element.code === "AUD"
      );

      return filterResponse;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transaction, thunkAPI) => {
    try {
      const { data } = await apiURL.post("/transactions", transaction);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions​/updateTransaction",
  async (transaction, thunkAPI) => {
    const { transactionDate, type, category, comment, amount, transactionId } =
      transaction;
    try {
      const state = thunkAPI.getState();
      const response = await apiURL.patch(`/transactions/${transactionId}`, {
        transactionDate,
        type,
        category,
        comment,
        amount,
      });
      const { transaction } = response.data;
      return { transaction, state };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
