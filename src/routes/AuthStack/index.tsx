import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../constants/nameScreen";
import OnboardingScreen from "../../screens/OnboardingScreen";
import AuthScreen from "../../screens/AuthScreen";
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={nameScreen.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={nameScreen.LOGINSCREEN} component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
