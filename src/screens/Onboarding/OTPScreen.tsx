import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OTPInputView from "@twotalltotems/react-native-otp-input/dist";
import { HStack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import { AuthHeader } from "../../components/AuthHeader";
import { AuthNavigation } from "../../components/AuthNavigation";
import { ButtonStyled } from "../../components/UI";
import { useOTP } from "../../hooks/useOTP";
import { OnboardingStackParamList } from "../../interfaces/navigationInterfaces";

type Props = NativeStackScreenProps<OnboardingStackParamList, "OTPScreen">;

export const OTPScreen: React.FC<Props> = ({ navigation, route }) => {
  const { email } = route.params;
  const subtitle = `Enter it below to verify ${email}`;

  const {
    isLoading,
    handleSubmit,
    handleResend,
    confirmCode,
    setConfirmCode,
    seconds,
    formatTime,
  } = useOTP(email);

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
          isDisabled={!confirmCode || seconds === 0 || isLoading}
          isLoading={isLoading}
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
