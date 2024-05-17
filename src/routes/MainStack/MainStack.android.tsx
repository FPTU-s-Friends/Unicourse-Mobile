import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { nameSreen } from "../../constants/nameScreen";
import UserDetailScreen from "../../screens/UserScreen/UserDetailScreen";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <SafeAreaView>
      <Stack.Navigator>
        <Stack.Screen
          name={nameSreen.USER_DETAIL}
          component={UserDetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
