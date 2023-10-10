import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    email: "",
  },
  reducers: {
    logIn: (state) => {
      state.isLogged = true;
    },
    logOut: (state) => {
      state.isLogged = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
// dispatch(logIn())

export default userSlice.reducer;
