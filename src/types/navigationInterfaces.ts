export type OnboardingStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  NewPasswordScreen: { email: string };
  OTPScreen: { email: string };
  SupportScreen: undefined;
};

export type MainStackParamList = {
  MainScreen: undefined;
  DashboardScreen: undefined;
  PaymentScreen: undefined;
  OrdersScreen: undefined;
  SubscribtionScreen: undefined;
  LogoutScreen: undefined;
};

export type RootParamList = OnboardingStackParamList | MainStackParamList;
