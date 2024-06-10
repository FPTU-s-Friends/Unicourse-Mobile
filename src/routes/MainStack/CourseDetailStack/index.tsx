import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../../constants/nameScreen";
import BlogScreen from "../../../screens/BlogScreen";
import CourseDetailsScreen from "../../../screens/CourseDetails";
import LearningScreen from "../../../screens/LearningScreen";
const Stack = createStackNavigator();

const CourseDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={nameScreen.LEARNING}
    >
      <Stack.Screen
        name={nameScreen.COURSEDETAILS_SCREEN}
        component={CourseDetailsScreen}
      />

      <Stack.Screen name={nameScreen.LEARNING} component={LearningScreen} />
    </Stack.Navigator>
  );
};

export default CourseDetailStack;
