import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const logInOrRegisterFulfilled = (state, action) => {
  state.user =action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshPending = state => {
  state.isRefreshing = true;
};
const refreshRejected = state => {
 state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, logInOrRegisterFulfilled)
      .addCase(logIn.fulfilled, logInOrRegisterFulfilled)
      .addCase(logOut.fulfilled, logOutFulfilled)
      .addCase(refreshUser.pending, refreshPending)
      .addCase(refreshUser.fulfilled, refreshUserFulfilled)
      .addCase(refreshUser.rejected, refreshRejected);
  },
});

export const authReducer = authSlice.reducer;