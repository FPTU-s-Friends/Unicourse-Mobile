import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../constants/nameScreen";
import BlogStack from "./BlogStack";
import UserStack from "./UserStack";
import BottomStack from "../BottomStack";
import CourseDetailStack from "./CourseDetailStack";
import CartStack from "./CartStack";
import LearningScreen from "../../screens/LearningScreen";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={nameScreen.HOMEPAGE}
    >
      <Stack.Screen name={nameScreen.HOMEPAGE} component={BottomStack} />
      <Stack.Screen name={nameScreen.BLOGSTACK} component={BlogStack} />
      <Stack.Screen name={nameScreen.USER_STACK} component={UserStack} />
      <Stack.Screen
        name={nameScreen.COURSEDETAILS_STACK}
        component={CourseDetailStack}
      />
      <Stack.Screen name={nameScreen.CART_STACK} component={CartStack} />
    </Stack.Navigator>
  );
}
