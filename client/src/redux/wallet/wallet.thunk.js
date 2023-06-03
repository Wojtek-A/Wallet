import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTransactions = createAsyncThunk(
  "wallet/fetchAllTransactions",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/transactions");
      // setAuthHeader(res.data.token);
      console.log("Response data:", res.data);
      return res.data.data; //TODO poprawić strukturę endpointa
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "wallet/addTransaction",
  async (newTransaction, thunkAPI) => {
    try {
      const res = await axios.post("/transactions", newTransaction);
      // setAuthHeader(res.data.token);
      return res.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "wallet/deleteTransaction",
  async (transactionId, thunkAPI) => {
    try {
      const res = await axios.delete(`/transactions/${transactionId}`);
      // setAuthHeader(res.data.token);
      return res.data;
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
      const res = await axios.patch(`/transactions/${transactionId}`, {
        amount,
        date,
        comment,
        category,
      });
      // setAuthHeader(res.data.token);
      const { transaction } = res.data;
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
      const res = await fetch(
        "http://api.nbp.pl/api/exchangerates/tables/c/?format=JSON"
      );

      const data = await res.json();
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
