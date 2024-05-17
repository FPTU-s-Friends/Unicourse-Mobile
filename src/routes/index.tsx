import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    StyleSheet,
    Platform,
    StatusBar,
    SafeAreaView,
} from "react-native";

import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

import { nameSreen } from "../constants/nameScreen";

const Stack = createStackNavigator();
export default function Router() {
    return (
        <NavigationContainer>
            <StatusBar />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={nameSreen.AUTH}
            >
                {/* Nếu User chưa đăng nhập thì sẽ điều hướng đến Auth Stack */}
                {/* <Stack.Screen
                    name={nameSreen.AUTH}
                    component={AuthStack}
                /> */}

                {/* Nếu User  đăng nhập thì sẽ điều hướng đến Main Stack */}
                <Stack.Screen
                    name={nameSreen.MAIN}
                    component={MainStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
