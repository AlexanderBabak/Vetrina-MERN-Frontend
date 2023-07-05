import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FormikHelpers } from "formik";

import { setNewPassword } from "../api/authServices";
import { showNotification } from "../helpers/showNotification";
import { OnboardingStackParamList } from "../types/navigationInterfaces";

type Props = NativeStackNavigationProp<OnboardingStackParamList>;

export const useNewPassword = (email: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<Props>();

  const handleNewPassword = async (
    values: { newPassword: string },
    actions: FormikHelpers<any>,
  ) => {
    try {
      setIsLoading(true);
      await setNewPassword({ email, newPassword: values.newPassword });
      setIsLoading(false);
      actions.resetForm();
      navigation.replace("LoginScreen");
    } catch (err: any) {
      setIsLoading(false);
      showNotification(
        `Error ${err?.response?.status}: "${err?.response?.data?.message}"`,
      );
    }
  };
  return { handleNewPassword, isLoading };
};
