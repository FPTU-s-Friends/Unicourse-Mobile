import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

import AuthStack from "./AuthStack/AuthStack";
import MainStack from "./MainStack/MainStack";
import { nameSreen } from "../constants/nameScreen";
import BlogStack from "./MainStack/BlogStack";

const Stack = createStackNavigator();
export default function Router() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    {/* Nếu User chưa đăng nhập thì sẽ điều hướng đến Auth Stack */}
                    {/* <Stack.Screen name={nameSreen.AUTH} component={AuthStack} /> */}

                    {/* Nếu User  đăng nhập thì sẽ điều hướng đến Main Stack */}
                    <Stack.Screen
                        name={nameSreen.MAIN}
                        component={MainStack}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop:
            Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
