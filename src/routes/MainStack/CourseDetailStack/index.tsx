import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../../constants/nameScreen";
import BlogScreen from "../../../screens/BlogScreen";
import CourseDetailsScreen from "../../../screens/CourseDetails";
const Stack = createStackNavigator();

const CourseDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={nameScreen.COURSEDETAILS_SCREEN}
        component={CourseDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default CourseDetailStack;
