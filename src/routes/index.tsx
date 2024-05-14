import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import AuthStack from "./AuthStack/AuthStack";
import MainStack from "./MainStack/MainStack";

const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaView}>
        <Stack.Navigator>
          {/* Nếu User chưa đăng nhập thì sẽ điều hướng đến Auth Stack */}
          <Stack.Screen name="Auth" component={AuthStack} />

          {/* Nếu User  đăng nhập thì sẽ điều hướng đến Auth Stack */}
          <Stack.Screen name="Main" component={MainStack} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
