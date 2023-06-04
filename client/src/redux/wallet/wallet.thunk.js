import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTransactions = createAsyncThunk(
  "wallet/fetchAllTransactions",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/transactions");
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
      console.log("delete res: ", res);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "wallet/updateTransaction",
  async (transaction, thunkAPI) => {
    const { transactionId, ...payload } = transaction;
    try {
      const state = thunkAPI.getState();
      const res = await axios.put(`/transactions/${transactionId}`, {
        ...payload,
      });
      const { transaction: tempTrans } = res.data.data;
      console.log("res:", res);
      return { transaction: tempTrans, state };
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
        "https://api.nbp.pl/api/exchangerates/tables/c/?format=JSON"
      );

      const data = await res.json();
      const filterResponse = data[0].rates.filter(
        (element) =>
          element.code === "USD" ||
          element.code === "EUR" ||
          element.code === "GBP"
      );

      return filterResponse;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
