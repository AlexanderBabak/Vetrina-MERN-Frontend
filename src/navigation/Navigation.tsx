import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "native-base";
import React, { useEffect } from "react";

import { RootStackParamList } from "../interfaces/navigationInterfaces";
import { useAppDispatch, useAppSelector } from "../redux/reduxType";
import { authSelector, signIn } from "../redux/slices/authSlice";
import { MainScreen } from "../screens/MainScreen";
import { ForgotPasswordScreen } from "../screens/Onboarding/ForgotPasswordScreen";
import { LoginScreen } from "../screens/Onboarding/LoginScreen";
import { RegisterScreen } from "../screens/Onboarding/RegisterScreen";
import { SupportScreen } from "../screens/Onboarding/SupportScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  const { token } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser) {
        dispatch(signIn(JSON.parse(storedUser)));
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
