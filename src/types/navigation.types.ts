export type MainStackParamList = {
  BlogStack: { screen: keyof BlogStackParamList };
  HomePageScreen: undefined;
  CourseDetailsScreen: { screen: keyof CourseDetailStackList };
};

export type CourseDetailStackList = {
  CourseDetailsScreen: { _id: string };
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
