export type MainStackParamList = {
  BlogStack: { screen: keyof BlogStackParamList };
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

export type BlogStackParamList = {
  BlogScreen: undefined;
  BlogDetailScreen: { id: string };
}
