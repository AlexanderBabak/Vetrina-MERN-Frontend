import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "native-base";

import { useAppDispatch, useAppSelector } from "../redux/reduxType";
import { authSelector, signIn } from "../redux/slices/authSlice";
import { MainScreen } from "../screens/MainScreen";
import { ForgotPasswordScreen } from "../screens/Onboarding/ForgotPasswordScreen";
import { LoginScreen } from "../screens/Onboarding/LoginScreen";
import { NewPasswordScreen } from "../screens/Onboarding/NewPasswordScreen";
import { OTPScreen } from "../screens/Onboarding/OTPScreen";
import { RegisterScreen } from "../screens/Onboarding/RegisterScreen";
import { SupportScreen } from "../screens/Onboarding/SupportScreen";
import {
  MainStackParamList,
  OnboardingStackParamList,
} from "../types/navigationInterfaces";

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const MainStack = createNativeStackNavigator<MainStackParamList>();

const AuthStack = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <OnboardingStack.Screen name="LoginScreen" component={LoginScreen} />
      <OnboardingStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <OnboardingStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <OnboardingStack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
      />

      <OnboardingStack.Screen name="OTPScreen" component={OTPScreen} />
      <OnboardingStack.Screen name="SupportScreen" component={SupportScreen} />
    </OnboardingStack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export const Navigation = () => {
  const { token } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        dispatch(signIn({ token: storedToken }));
      }
    };

    fetchToken();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        showHideTransition="fade"
      />
      {token ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
