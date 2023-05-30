import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrencyThunk = createAsyncThunk(
  "wallet/getCurrency",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://api.nbp.pl/api/exchangerates/tables/c/?format=JSON"
      );

      const filterResponse = response.data[0].rates.filter(
        (element) => element.code === "USD" || element.code === "EUR"
      );

      return filterResponse;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
