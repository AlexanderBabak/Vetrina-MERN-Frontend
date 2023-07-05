import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import { Center, VStack } from "native-base";

import { AuthHeader } from "../../components/AuthHeader";
import { AuthNavigation } from "../../components/AuthNavigation";
import { ButtonStyled, ButtonSupport, InputStyled } from "../../components/UI";
import { newPasswordSchema } from "../../helpers/yupSchemas";
import { useNewPassword } from "../../hooks/useNewPassword";
import { OnboardingStackParamList } from "../../types/navigationInterfaces";

type Props = NativeStackScreenProps<
  OnboardingStackParamList,
  "NewPasswordScreen"
>;

export const NewPasswordScreen: React.FC<Props> = ({ navigation, route }) => {
  const { email } = route.params;

  const { isLoading, handleNewPassword } = useNewPassword(email);

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

              <ButtonStyled
                onPress={props.handleSubmit}
                fontSize={18}
                isLoading={isLoading}
                isDisabled={isLoading}
              >
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
