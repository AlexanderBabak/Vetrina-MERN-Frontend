import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, forgotPassword, loginUser } from '../../util/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { IAuthUser } from '../../interfaces/userInterfaces';

export const loginThunk = createAsyncThunk<
  IAuthUser,
  { email: string; password: string },
  { rejectValue: string }
>('auth/loginThunk', async (values, { rejectWithValue }) => {
  const { email, password } = values;
  try {
    const response = await loginUser(email, password);

    if (!response) {
      throw new Error('Ошибка авторизации!');
    }

    AsyncStorage.setItem('user', JSON.stringify(response));
    return response;
  } catch (error: any) {
    Alert.alert('Authentication error!', error.message);
    return rejectWithValue(error.message);
  }
});

export const registerThunk = createAsyncThunk<
  IAuthUser,
  { email: string; password: string; name: string },
  { rejectValue: string }
>('auth/registerThunk', async (values, { rejectWithValue }) => {
  const { email, password, name } = values;

  try {
    const response = await createUser(email, password, name);
    if (!response) {
      throw new Error();
    }
    return response;
  } catch (error: any) {
    Alert.alert('Authentication failed!', error.message);
    return rejectWithValue(error.message);
  }
});

export const forgotPasswordThunk = createAsyncThunk<
  undefined,
  { email: string },
  { rejectValue: string }
>('auth/forgotPasswordThunk', async (values, { rejectWithValue }) => {
  const { email } = values;

  try {
    const response = await forgotPassword(email);

    if (!response) {
      throw new Error();
    }

    Alert.alert('Success', 'Check your email to reset password');
  } catch (error: any) {
    Alert.alert('Reset password failed!', 'This user does not exist');
    return rejectWithValue(error.message);
  }
});
