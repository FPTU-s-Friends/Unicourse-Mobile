import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Platform, SafeAreaView, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

import { nameScreen } from "../constants/nameScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootContext } from "../context/providers/AppProvider";

const Stack = createStackNavigator();
export default function Router() {
  const { state, dispatch } = useContext(RootContext);

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          // initialRouteName={
          //   state.auth.isAuth ? nameScreen.MAIN : nameScreen.AUTH
          // }
          initialRouteName={nameScreen.MAIN}
        >
          {/* Nếu User chưa đăng nhập thì sẽ điều hướng đến Auth Stack */}
          <Stack.Screen name={nameScreen.AUTH} component={AuthStack} />

          {/* Nếu User  đăng nhập thì sẽ điều hướng đến Main Stack */}
          <Stack.Screen name={nameScreen.MAIN} component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
