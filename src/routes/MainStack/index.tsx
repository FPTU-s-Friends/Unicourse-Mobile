import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../constants/nameScreen";
import BlogStack from "./BlogStack";
import UserStack from "./UserStack";
import BottomStack from "../BottomStack";
import CourseDetailsScreen from "../../screens/CourseDetails";
import CourseDetailStack from "./CourseDetailStack";
import CartStack from "./CartStack";
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
        name={nameScreen.COURSEDETAILS}
        component={CourseDetailStack}
      />
      <Stack.Screen name={nameScreen.CART} component={CartStack} />
    </Stack.Navigator>
  );
}
