import { useState } from "react";

import { useNavigation, useNavigationState } from "@react-navigation/native";

import { resendVerifyEmail, verifyEmail } from "../api/authServices";
import { showNotification } from "../helpers/showNotification";
import { useTimer } from "./useTimer";

export const useOTP = (email: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmCode, setConfirmCode] = useState("");
  const { seconds, setSeconds, formatTime } = useTimer();

  const navigation = useNavigation<any>();

  const navigationState = useNavigationState(state => state);
  const prevScreenName =
    navigationState.routes[navigationState.routes.length - 2].name;

  const handleSubmit = async () => {
    if (!confirmCode) {
      return;
    }

    try {
      setIsLoading(true);
      await verifyEmail(confirmCode);
      setIsLoading(false);
      if (prevScreenName === "ForgotPasswordScreen") {
        navigation.replace("NewPasswordScreen", { email });
      } else {
        navigation.replace("LoginScreen");
      }
    } catch (err: any) {
      setIsLoading(false);
      showNotification(
        `Error ${err?.response?.status}: "${err?.response?.data?.message}"`,
      );
    }
  };

  const handleResend = async () => {
    try {
      await resendVerifyEmail(email);
      setSeconds(120);
    } catch (err: any) {
      showNotification(
        `Error ${err?.response?.status}: "${err?.response?.data?.message}"`,
      );
    }
  };

  return {
    isLoading,
    handleResend,
    handleSubmit,
    confirmCode,
    setConfirmCode,
    seconds,
    formatTime,
  };
};
