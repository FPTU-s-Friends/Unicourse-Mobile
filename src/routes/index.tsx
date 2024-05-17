import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

import { nameScreen } from "../constants/nameScreen";
import UserDetailScreen from "../screens/UserScreen";

const Stack = createStackNavigator();
export default function Router() {
  const body = (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
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
  );

  return Platform.OS === "android" ? (
    <SafeAreaView style={styles.safeAreaView}>{body}</SafeAreaView>
  ) : (
    body
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
