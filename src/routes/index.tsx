import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Platform, StatusBar } from "react-native";

import AuthStack from "./AuthStack/AuthStack";
import MainStack from "./MainStack/MainStack";
import { nameSreen } from "../constants/nameScreen";
import UserDetailScreen from "../screens/UserScreen/UserDetailScreen";

const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={nameSreen.USER_DETAIL}
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Nếu User chưa đăng nhập thì sẽ điều hướng đến Auth Stack */}
        <Stack.Screen name={nameSreen.AUTH} component={AuthStack} />

        {/* Nếu User  đăng nhập thì sẽ điều hướng đến Main Stack */}
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name={nameSreen.MAIN}
          component={MainStack}
        />
        <Stack.Screen
          name={nameSreen.USER_DETAIL}
          component={UserDetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
