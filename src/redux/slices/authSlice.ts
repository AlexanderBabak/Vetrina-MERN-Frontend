import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { forgotPasswordThunk, loginThunk, registerThunk } from './authThunk';
import { IAuthUser } from '../../interfaces/userInterfaces';
import { RootState } from '../store';

interface IAuth {
  userName: string | null;
  token: string | null;
  loadingAuth: boolean;
  errorAuth: string | undefined;
}

const initialState: IAuth = {
  userName: null,
  token: null,
  loadingAuth: false,
  errorAuth: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<IAuthUser>) {
      state.token = action.payload.idToken;
      state.userName = action.payload.displayName;
    },
    signOut(state) {
      state.userName = null;
      state.token = null;
      AsyncStorage.removeItem('user');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loadingAuth = false;
        state.userName = action.payload.displayName;
        state.token = action.payload.idToken;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loadingAuth = false;
        state.userName = action.payload.displayName;
        state.token = action.payload.idToken;
      })
      .addCase(forgotPasswordThunk.fulfilled, state => {
        state.loadingAuth = false;
      })
      .addMatcher(isLoading, state => {
        state.loadingAuth = true;
        state.errorAuth = '';
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loadingAuth = false;
        state.errorAuth = action.payload;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

function isLoading(action: AnyAction) {
  return action.type.endsWith('pending');
}

export const { signOut, signIn } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
