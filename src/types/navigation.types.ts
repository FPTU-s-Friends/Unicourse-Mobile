export type MainStackParamList = {
  BlogStack: { screen: keyof BlogStackParamList };
  HomePageScreen: undefined;
  CourseDetailsScreen: { screen: keyof CourseDetailStackList };
};

export type CourseDetailStackList = {
  CourseDetailsScreen: { _id: string };
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
