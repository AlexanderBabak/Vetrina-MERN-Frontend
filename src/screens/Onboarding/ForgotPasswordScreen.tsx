import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import { Formik } from "formik";
import { Center, Text, VStack } from "native-base";
import React from "react";
import * as yup from "yup";

import { AuthHeader } from "../../components/AuthHeader";
import { AuthNavigation } from "../../components/AuthNavigation";
import { ButtonStyled, ButtonSupport, InputStyled } from "../../components/UI";
import { OnboardingStackParamList } from "../../interfaces/navigationInterfaces";

const forgotPasswordSchema = yup.object({
  email: yup.string().required().email(),
});

type Props = {
  navigation: NativeStackNavigationProp<OnboardingStackParamList>;
};

export const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const handleForgotPassword = async (values: any, actions: any) => {
    try {
      await axios.post("http://localhost:3000/api/users/forgot-password", {
        email: values.email,
      });
      actions.resetForm();
      navigation.navigate("OTPScreen", { email: values.email });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VStack flex={1} backgroundColor="#fff">
      <AuthHeader
        title="Forgot Password"
        subtitle="Enter your email and you will receive an email to recover your password"
      />
      <VStack paddingX="15px" paddingY="24px" space={6}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotPasswordSchema}
          onSubmit={handleForgotPassword}
          validateOnBlur={false}
        >
          {props => (
            <VStack space={4}>
              <InputStyled
                value={props.values.email}
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
                isInvalid={!!props.errors.email && !!props.touched.email}
                errorMessage={props.errors.email}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <ButtonStyled onPress={props.handleSubmit} fontSize={14}>
                Reset password
              </ButtonStyled>
            </VStack>
          )}
        </Formik>

        <AuthNavigation
          text="Do you have an account?"
          linkText="Sign in now"
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        />

        <Center>
          <ButtonSupport />
        </Center>
      </VStack>
    </VStack>
  );
};
