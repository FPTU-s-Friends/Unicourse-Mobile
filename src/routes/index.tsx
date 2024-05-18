import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";

import MainStack from "./MainStack";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { nameScreen } from "../constants/nameScreen";

const Stack = createStackNavigator();
export default function Router() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={nameScreen.AUTH}
        >
          {/* Nếu User chưa đăng nhập thì sẽ điều hướng đến Auth Stack */}
          {/* <Stack.Screen
                    name={nameScreen.AUTH}
                    component={AuthStack}
                /> */}

          {/* Nếu User  đăng nhập thì sẽ điều hướng đến Main Stack */}
          <Stack.Screen name={nameScreen.MAIN} component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
