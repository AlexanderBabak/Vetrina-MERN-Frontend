import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FormikHelpers } from "formik";

import { registerUser } from "../api/authServices";
import { showNotification } from "../helpers/showNotification";
import { OnboardingStackParamList } from "../types/navigationInterfaces";
import { AuthData } from "../types/userInterfaces";

type Props = NativeStackNavigationProp<OnboardingStackParamList>;

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<Props>();
  const handleRegister = async (
    values: AuthData,
    actions: FormikHelpers<any>,
  ) => {
    try {
      setIsLoading(true);
      await registerUser(values);
      setIsLoading(false);
      actions.resetForm();
      navigation.navigate("OTPScreen", { email: values.email });
    } catch (err: any) {
      setIsLoading(false);
      showNotification(
        `Error ${err?.response?.status}: "${err?.response?.data?.message}"`,
      );
    }
  };

  return { isLoading, handleRegister };
};
