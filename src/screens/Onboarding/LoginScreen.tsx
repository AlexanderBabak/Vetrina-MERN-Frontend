import React from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Formik } from "formik";
import { Center, Divider, HStack, ScrollView, Text, VStack } from "native-base";

import { AuthHeader } from "../../components/AuthHeader";
import { AuthNavigation } from "../../components/AuthNavigation";
import {
  ButtonStyled,
  ButtonStyledOutlined,
  ButtonSupport,
  InputStyled,
} from "../../components/UI";
import { loginSchema } from "../../helpers/yupSchemas";
import { useLogin } from "../../hooks/useLogin";
import { OnboardingStackParamList } from "../../interfaces/navigationInterfaces";

type Props = {
  navigation: NativeStackNavigationProp<OnboardingStackParamList>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { isLoading, handleLogin } = useLogin();

  return (
    <VStack flex={1} backgroundColor="#fff">
      <ScrollView showsVerticalScrollIndicator={false}>
        <AuthHeader
          title="Welcome"
          subtitle="Enter your email and password to access your account"
        />
        <VStack paddingX="15px" paddingY="24px" space={6}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
            validateOnBlur={false}
          >
            {props => (
              <VStack space={4}>
                <InputStyled
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  placeholder="Enter your email"
                  isInvalid={!!props.errors.email && !!props.touched.email}
                  errorMessage={props.errors.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <InputStyled
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  placeholder="Enter your password"
                  isInvalid={
                    !!props.errors.password && !!props.touched.password
                  }
                  errorMessage={props.errors.password}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                />
                <ButtonStyled
                  onPress={props.handleSubmit}
                  fontSize={18}
                  isLoading={isLoading}
                  isDisabled={isLoading}
                >
                  Login
                </ButtonStyled>
              </VStack>
            )}
          </Formik>

          <HStack alignItems={"center"}>
            <Divider flex={5} bg="neutral.black.500" />
            <Text
              flex={1}
              textTransform={"uppercase"}
              textAlign="center"
              marginX={"24px"}
              fontFamily="body"
              fontSize={14}
              fontWeight={600}
              color="neutral.black.500"
            >
              or
            </Text>
            <Divider flex={5} bg="neutral.black.500" />
          </HStack>

          <VStack space={3}>
            <ButtonStyledOutlined
              onPress={() => console.log("Facebook")}
              icon="facebook"
            >
              Sign in with Facebook
            </ButtonStyledOutlined>
            <ButtonStyledOutlined
              onPress={() => console.log("Google")}
              icon="google"
            >
              Sign in with Google
            </ButtonStyledOutlined>
          </VStack>

          <VStack space={3}>
            <AuthNavigation
              text=" Did you forget your password?"
              onPress={() => {
                navigation.navigate("ForgotPasswordScreen");
              }}
            />

            <AuthNavigation
              text="Do not have an account?"
              linkText="Register now"
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            />
          </VStack>

          <Center>
            <ButtonSupport />
          </Center>
        </VStack>
      </ScrollView>
    </VStack>
  );
};
