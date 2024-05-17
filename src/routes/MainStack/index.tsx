import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameSreen } from "../../constants/nameScreen";
import BlogStack from "./BlogStack";
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={nameSreen.BLOGSTACK} component={BlogStack} />
    </Stack.Navigator>
  );
}
