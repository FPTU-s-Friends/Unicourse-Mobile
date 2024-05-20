import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../constants/nameScreen";
import BlogStack from "./BlogStack";
import UserStack from "./UserStack";
import BottomStack from "../BottomStack";
import CourseDetailsScreen from "../../screens/CourseDetails";
import CourseDetailStack from "./CourseDetailStack";
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={nameScreen.HOMEPAGE}
    >
      {/* <Stack.Screen name={nameSreen.HOMEPAGE} component={BottomStack} /> */}
      {/* <Stack.Screen name={nameSreen.BLOGSTACK} component={BlogStack} /> */}
      <Stack.Screen
        name={nameScreen.COURSEDETAILS}
        component={CourseDetailStack}
      />
    </Stack.Navigator>
  );
}
