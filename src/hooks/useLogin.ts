import { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormikHelpers } from "formik";

import { loginUser } from "../api/authServices";
import { showNotification } from "../helpers/showNotification";
import { AuthData } from "../interfaces/userInterfaces";
import { useAppDispatch } from "../redux/reduxType";
import { signIn } from "../redux/slices/authSlice";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = async (values: AuthData, actions: FormikHelpers<any>) => {
    try {
      setIsLoading(true);
      const loginResponse = await loginUser(values);
      setIsLoading(false);
      const { token } = loginResponse.data;
      await AsyncStorage.setItem("token", JSON.stringify(token));
      dispatch(signIn({ token }));
      actions.resetForm();
    } catch (err: any) {
      setIsLoading(false);
      showNotification(
        `Error ${err?.response?.status}: "${err?.response?.data?.message}"`,
      );
    }
  };
  return { isLoading, handleLogin };
};
