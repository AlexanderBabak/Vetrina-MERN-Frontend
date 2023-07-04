import React from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Formik } from "formik";
import { Center, VStack } from "native-base";

import { AuthHeader } from "../../components/AuthHeader";
import { AuthNavigation } from "../../components/AuthNavigation";
import { ButtonStyled, ButtonSupport, InputStyled } from "../../components/UI";
import { forgotPasswordSchema } from "../../helpers/yupSchemas";
import { useForgotPassword } from "../../hooks/useFogotPassword";
import { OnboardingStackParamList } from "../../interfaces/navigationInterfaces";

type Props = {
  navigation: NativeStackNavigationProp<OnboardingStackParamList>;
};

export const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const { isLoading, handleForgotPassword } = useForgotPassword();
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
              <ButtonStyled
                onPress={props.handleSubmit}
                fontSize={18}
                isLoading={isLoading}
                isDisabled={isLoading}
              >
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
