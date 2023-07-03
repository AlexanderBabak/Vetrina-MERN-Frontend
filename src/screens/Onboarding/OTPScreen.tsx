import { useNavigationState } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OTPInputView from "@twotalltotems/react-native-otp-input/dist";
import axios from "axios";
import { HStack, Text, VStack } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { AuthHeader } from "../../components/AuthHeader";
import { AuthNavigation } from "../../components/AuthNavigation";
import { ButtonStyled } from "../../components/UI";
import { useTimer } from "../../hooks/useTimer";
import { OnboardingStackParamList } from "../../interfaces/navigationInterfaces";

type Props = NativeStackScreenProps<OnboardingStackParamList, "OTPScreen">;

export const OTPScreen: React.FC<Props> = ({ navigation, route }) => {
  const [confirmCode, setConfirmCode] = useState("");
  const { seconds, setSeconds, formatTime } = useTimer();

  const { email } = route.params;
  const subtitle = `Enter it below to verify ${email}`;

  const navigationState = useNavigationState(state => state);
  const prevScreenName =
    navigationState.routes[navigationState.routes.length - 2].name;

  const handleSubmit = async () => {
    if (!confirmCode) {
      return;
    }

    try {
      await axios.get(`http://localhost:3000/api/users/verify/${confirmCode}`);
      if (prevScreenName === "ForgotPasswordScreen") {
        navigation.replace("NewPasswordScreen", { email });
      } else {
        navigation.replace("LoginScreen");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleResend = async () => {
    try {
      await axios.post("http://localhost:3000/api/users/verify", { email });
      setSeconds(120);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VStack flex={1} backgroundColor="#fff">
      <AuthHeader title="We sent you a code" subtitle={subtitle} />
      <VStack paddingX="15px" paddingY="24px" space={6}>
        <OTPInputView
          pinCount={6}
          style={{ width: "100%", height: 50, marginTop: 20 }}
          codeInputFieldStyle={{
            width: 50,
            height: 60,
            borderRadius: 10,
            borderColor: "gray",
            color: "black",
            fontSize: 22,
          }}
          onCodeFilled={code => setConfirmCode(code)}
        />

        <ButtonStyled
          onPress={handleSubmit}
          fontSize={18}
          isDisabled={!confirmCode || seconds === 0}
        >
          Verify
        </ButtonStyled>

        <Text
          textAlign="center"
          fontSize={18}
          fontWeight={500}
          fontFamily="heading"
          color="neutral.black.700"
        >
          Didn`t get the code?
        </Text>

        {seconds > 0 ? (
          <HStack alignItems="center" justifyContent="center">
            <Text
              textAlign="center"
              fontSize={18}
              fontWeight={400}
              fontFamily="heading"
              color="neutral.black.700"
            >
              Request for new code in:{"  "}
            </Text>
            <Text
              textAlign="center"
              fontSize={18}
              fontWeight={500}
              fontFamily="heading"
              color="orange.600"
            >
              {formatTime()}
            </Text>
          </HStack>
        ) : (
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={handleResend}
          >
            <Text
              textAlign="center"
              fontSize={18}
              fontWeight={500}
              fontFamily="heading"
              color="orange.600"
            >
              Tap to resend
            </Text>
          </TouchableOpacity>
        )}

        <AuthNavigation
          text=""
          linkText="Go back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </VStack>
    </VStack>
  );
};
