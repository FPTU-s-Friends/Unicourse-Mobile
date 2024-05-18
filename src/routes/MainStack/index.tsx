import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../constants/nameScreen";
import BlogStack from "./BlogStack";
import UserStack from "./UserStack";
import BottomStack from "../BottomStack";
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={nameScreen.USER_STACK}
    >
      <Stack.Screen name={nameScreen.BLOGSTACK} component={BlogStack} />
      <Stack.Screen name={nameScreen.USER_STACK} component={UserStack} />
      <Stack.Screen name={nameScreen.HOMEPAGE} component={BottomStack} />
    </Stack.Navigator>
  );
}
