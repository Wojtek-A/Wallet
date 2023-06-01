import { createAsyncThunk } from "@reduxjs/toolkit";

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
