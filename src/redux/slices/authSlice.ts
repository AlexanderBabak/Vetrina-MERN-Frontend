import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthUser } from "../../interfaces/userInterfaces";
import { RootState } from "../store";

interface IAuth {
  token: string | null;
}

const initialState: IAuth = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<IAuthUser>) {
      state.token = action.payload.token;
    },
    signOut(state) {
      state.token = null;
      AsyncStorage.removeItem("token");
    },
  },
});

export const { signOut, signIn } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
