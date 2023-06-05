import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logIn, logOut, refreshUser } from "./operations";
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [registerUser.fulfilled](state, action) {
      // nie logujemy po rejestracji!!
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      // state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logIn.pending](state, action) {
      state.isRefreshing = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logOut.pending](state) {
      state.isRefreshing = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = {
        token: action.payload.token,
        id: action.payload._id,
        email: action.payload.email,
        username: action.payload.username,
      };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
export const authReducer = authSlice.reducer;
