export type MainStackParamList = {
  BlogStack: undefined;
  HomePageScreen: undefined;
};

export type AuthStackParamList = {
  OnboardingScreen: undefined;
  AuthScreen: undefined;
  LoginScreen: undefined;
};

export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: { screen: keyof MainStackParamList };
};
