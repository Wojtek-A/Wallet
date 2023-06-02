import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "http://localhost:3001/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/sign-up", credentials);
      setAuthHeader(res.data.token);
      Notify.success(`Welcome to Wallet app!`);
      return res.data;
    } catch (error) {
      Notify.failure(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/sign-in", credentials);
      Notify.success(`Hello, ${res.data.login}`);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      Notify.failure(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/sign-out", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/sign-out");
    clearAuthHeader();
  } catch (error) {
    Notify.failure(`${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state?.auth?.token || {};

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/auth/current");
      console.log(res.data);
      return res.data;
    } catch (error) {
      Notify.failure(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
