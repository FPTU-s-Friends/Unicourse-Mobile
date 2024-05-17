import React from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="homeScreen" component={() => <></>} />
    </BottomTabs.Navigator>
  );
};
