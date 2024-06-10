export type MainStackParamList = {
  BlogStack: { screen: keyof BlogStackParamList };
  HomePageScreen: undefined;
  UserStack: { screen: keyof UserStackParamList };
};

export type AuthStackParamList = {
  OnboardingScreen: undefined;
  AuthScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: { screen: keyof MainStackParamList };
};

export type BlogStackParamList = {
  BlogScreen: undefined;
  BlogDetailScreen: { id: string };
};

export type UserStackParamList = {
  UserDetailScreen: undefined;
  UserFavoriteScreen: undefined;
  UserPromotionScreen: undefined;
  UserHistoryTransactionScreen: undefined;
};
