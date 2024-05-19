import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameSreen } from "../../../constants/nameScreen";
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
        name={nameSreen.COURSEDETAILS}
        component={CourseDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default CourseDetailStack;
