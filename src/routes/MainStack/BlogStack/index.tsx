import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../../constants/nameScreen";
import BlogScreen from "../../../screens/BlogScreen";
const Stack = createStackNavigator();

const BlogStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={nameScreen.BLOG} component={BlogScreen} />
    </Stack.Navigator>
  );
};

export default BlogStack;
