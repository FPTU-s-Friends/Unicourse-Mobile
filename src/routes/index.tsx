import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

import { nameScreen } from "../constants/nameScreen";
import UserDetailScreen from "../screens/UserScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={nameScreen.AUTH}
      >
        {/* Nếu User chưa đăng nhập thì sẽ điều hướng đến Auth Stack */}
        {/* <Stack.Screen
                    name={nameSreen.AUTH}
                    component={AuthStack}
                /> */}

        {/* Nếu User  đăng nhập thì sẽ điều hướng đến Main Stack */}
        <Stack.Screen name={nameScreen.MAIN} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
