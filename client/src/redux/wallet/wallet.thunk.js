import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTransactions = createAsyncThunk(
  "wallet/fetchAllTransactions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/transactions");
      console.log("Response data:", response.data);
      return response.data.data; //TODO poprawić strukturę endpointa
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "wallet/addTransaction",
  async (newTransaction, thunkAPI) => {
    try {
      const response = await axios.post("/transactions", newTransaction);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "wallet/deleteTransaction",
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/transactions/${transactionId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "wallet/updateTransaction",
  async (transaction, thunkAPI) => {
    const { amount, date, comment, category, transactionId } = transaction;
    try {
      const state = thunkAPI.getState();
      const response = await axios.patch(`/transactions/${transactionId}`, {
        amount,
        date,
        comment,
        category,
      });
      const { transaction } = response.data;
      return { transaction, state };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
