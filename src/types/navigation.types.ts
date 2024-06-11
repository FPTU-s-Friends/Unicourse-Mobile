import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type MainStackParamList = {
  BlogStack: { screen: keyof BlogStackParamList };
  HomePageScreen: undefined;
  CourseDetailsScreen: { screen: keyof CourseDetailStackList };
  UserStack: NavigatorScreenParams<UserStackParamList>;
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
  MainStack: NavigatorScreenParams<MainStackParamList>;
};

export type BlogStackParamList = {
  BlogScreen: undefined;
  BlogDetailScreen: { id: string };
};

export type UserStackParamList = {
  UserDetailScreen: { userId: string; accessToken: string };
  UserFavoriteScreen: { userId: string; accessToken: string };
  UserPromotionScreen: { accessToken: string };
  UserHistoryTransactionScreen: { userId: string; accessToken: string };
};

export type UserStackScreenProps<T extends keyof UserStackParamList> =
  StackScreenProps<UserStackParamList, T>;
