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
import { registerSchema } from "../../helpers/yupSchemas";
import { useRegister } from "../../hooks/useRegister";
import { OnboardingStackParamList } from "../../types/navigationInterfaces";

type Props = {
  navigation: NativeStackNavigationProp<OnboardingStackParamList>;
};

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const { isLoading, handleRegister } = useRegister();

  return (
    <VStack flex={1} backgroundColor="#fff">
      <ScrollView showsVerticalScrollIndicator={false}>
        <AuthHeader
          title="Create your e-commerce"
          subtitle="Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio online in pochi minuti."
        />
        <VStack paddingX="15px" paddingY="24px" space={6}>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={registerSchema}
            onSubmit={handleRegister}
            validateOnBlur={false}
          >
            {props => (
              <VStack space={4}>
                <InputStyled
                  value={props.values.name}
                  onChangeText={props.handleChange("name")}
                  onBlur={props.handleBlur("name")}
                  isInvalid={!!props.errors.name && !!props.touched.name}
                  errorMessage={props.errors.name}
                  placeholder="Name and Surname"
                  autoCapitalize="words"
                />

                <InputStyled
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  isInvalid={!!props.errors.email && !!props.touched.email}
                  errorMessage={props.errors.email}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <InputStyled
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  isInvalid={
                    !!props.errors.password && !!props.touched.password
                  }
                  errorMessage={props.errors.password}
                  placeholder="Password"
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
                  Create your shop
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
              Sign up with Facebook
            </ButtonStyledOutlined>
            <ButtonStyledOutlined
              onPress={() => console.log("Google")}
              icon="google"
            >
              Sign up with Google
            </ButtonStyledOutlined>
          </VStack>

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
      </ScrollView>
    </VStack>
  );
};
