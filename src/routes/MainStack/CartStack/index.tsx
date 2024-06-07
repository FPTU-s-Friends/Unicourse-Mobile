import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { nameScreen } from "../../../constants/nameScreen";

import CartScreen from "../../../screens/CartScreen";
const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={nameScreen.CART} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
