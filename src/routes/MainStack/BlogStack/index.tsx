import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameSreen } from "../../../constants/nameScreen";
import BlogScreen from "../../../screens/BlogScreen/BlogScreen";
const Stack = createStackNavigator();

const BlogStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={nameSreen.BLOG} component={BlogScreen} />
    </Stack.Navigator>
  );
};

export default BlogStack;
