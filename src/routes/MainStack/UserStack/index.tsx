import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserDetailScreen from "../../../screens/UserScreen";
import { nameScreen } from "../../../constants/nameScreen";
const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={nameScreen.USER_DETAIL_SCREEN}
        component={UserDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
