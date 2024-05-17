import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../constants/nameScreen";
import BlogStack from "./BlogStack";
import UserStack from "./UserStack";
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={nameScreen.BLOGSTACK} component={BlogStack} />
      <Stack.Screen
        name={nameScreen.USER_DETAIL_SCREEN}
        component={UserStack}
      />
    </Stack.Navigator>
  );
}
