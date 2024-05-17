import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameSreen } from "../../constants/nameScreen";
import BlogStack from "./BlogStack";
import HomePageScreen from "../../screens/HomePageScreen";
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={nameSreen.HOMEPAGE}
    >
      <Stack.Screen name={nameSreen.HOMEPAGE} component={HomePageScreen} />
      <Stack.Screen name={nameSreen.BLOGSTACK} component={BlogStack} />
    </Stack.Navigator>
  );
}
