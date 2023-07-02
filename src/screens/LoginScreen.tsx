import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Formik } from "formik";
import { Center, Divider, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import * as yup from "yup";

import { AuthHeader } from "../components/AuthHeader";
import { AuthNavigation } from "../components/AuthNavigation";
import { ButtonStyled } from "../components/UI/ButtonStyled";
import { ButtonStyledOutlined } from "../components/UI/ButtonStyledOutlined";
import { ButtonSupport } from "../components/UI/ButtonSupport";
import { InputStyled } from "../components/UI/InputStyled";
import { RootParamList } from "../interfaces/navigationInterfaces";
import { useAppDispatch, useAppSelector } from "../redux/reduxType";
import { authSelector } from "../redux/slices/authSlice";
import { loginThunk } from "../redux/slices/authThunk";

const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

type Props = {
  navigation: NativeStackNavigationProp<RootParamList>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { loadingAuth } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  if (loadingAuth) {
    return (
      <Center flex={1}>
        <Text>Login user...</Text>
      </Center>
    );
  }

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
            onSubmit={(values, actions) => {
              dispatch(loginThunk(values));
              actions.resetForm();
            }}
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
                <ButtonStyled onPress={props.handleSubmit} fontSize={14}>
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
