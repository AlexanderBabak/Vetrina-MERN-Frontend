import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import axios from "axios";
import { Formik } from "formik";
import { Center, VStack } from "native-base";
import React from "react";
import * as yup from "yup";

import { AuthHeader } from "../../components/AuthHeader";
import { AuthNavigation } from "../../components/AuthNavigation";
import { ButtonStyled, ButtonSupport, InputStyled } from "../../components/UI";
import { OnboardingStackParamList } from "../../interfaces/navigationInterfaces";

const newPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: yup
    .string()
    .when("newPassword", (newPassword, field) =>
      newPassword
        ? field
            .required("No password provided")
            .oneOf([yup.ref("newPassword")], "Password does not match")
        : field,
    ),
});

type Props = NativeStackScreenProps<
  OnboardingStackParamList,
  "NewPasswordScreen"
>;

export const NewPasswordScreen: React.FC<Props> = ({ navigation, route }) => {
  const { email } = route.params;

  console.log(email, "email");
  const handleNewPassword = async (values: any, actions: any) => {
    try {
      await axios.patch("http://localhost:3000/api/users/change-password", {
        email,
        newPassword: values.newPassword,
      });
      actions.resetForm();
      navigation.replace("LoginScreen");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <VStack flex={1} backgroundColor="#fff">
      <AuthHeader
        title="New Password"
        subtitle="Please create a new password and enter it twice"
      />
      <VStack paddingX="15px" paddingY="24px" space={6}>
        <Formik
          initialValues={{ newPassword: "", confirmPassword: "" }}
          validationSchema={newPasswordSchema}
          onSubmit={handleNewPassword}
          validateOnBlur={false}
        >
          {props => (
            <VStack space={4}>
              <InputStyled
                value={props.values.newPassword}
                onChangeText={props.handleChange("newPassword")}
                onBlur={props.handleBlur("newPassword")}
                isInvalid={
                  !!props.errors.newPassword && !!props.touched.newPassword
                }
                errorMessage={props.errors.newPassword}
                placeholder="Enter new password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
              <InputStyled
                value={props.values.confirmPassword}
                onChangeText={props.handleChange("confirmPassword")}
                onBlur={props.handleBlur("confirmPassword")}
                isInvalid={
                  !!props.errors.confirmPassword &&
                  !!props.touched.confirmPassword
                }
                errorMessage={props.errors.confirmPassword}
                placeholder="Confirm new password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />

              <ButtonStyled onPress={props.handleSubmit} fontSize={18}>
                Create new password
              </ButtonStyled>
            </VStack>
          )}
        </Formik>

        <AuthNavigation
          text="Do you remember old password?"
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
