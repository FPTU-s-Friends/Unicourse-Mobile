import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameSreen } from "../../constants/nameScreen";
import OnboardingScreen from "../../screens/OnboardingScreen/OnboardingScreen";
import AuthScreen from "../../screens/AuthScreen/AuthScreen.ios";
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={nameSreen.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={nameSreen.LOGINSCREEN} component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
