import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transaction, thunkAPI) => {
    try {
      console.log();
      const res = await axios.post("/transactions", transaction);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const updateTransaction = createAsyncThunk(
//   "transactions​/updateTransaction",
//   async (transaction, thunkAPI) => {
//     const { type, amount, date, comment, category, transactionID } = transaction;
//     try {
//       const state = thunkAPI.getState();
//       const response = await apiURL.patch(`/transactions/${transactionId}`, {
//         type,
//         amount,
//         date,
//         comment,
//         category,
//       });
//       const { transaction } = response.data;
//       return { transaction, state };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
