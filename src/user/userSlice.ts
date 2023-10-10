import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    email: "",
  },
  reducers: {
    userLogIn: (state) => {
      state.isLogged = true;
    },
    userLogOut: (state) => {
      state.isLogged = false;
    },
    userLogInWithPayload: (state, action: PayloadAction<{ email: string }>) => {
      state.isLogged = true;
      state.email = action.payload.email;
    },
  },
});

export const { userLogIn, userLogOut, userLogInWithPayload } =
  userSlice.actions;
// dispatch(logIn())

export default userSlice.reducer;
