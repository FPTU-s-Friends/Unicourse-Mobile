import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { nameScreen } from "../../../constants/nameScreen";
import UserFavoriteScreen from "../../../screens/UserFavoriteScreen";
import UserDetailScreen from "../../../screens/UserScreen";
import UserPromotions from "../../../screens/UserVoucher";
import UserTransactionHistory from "../../../screens/UserTransactionHistoryScreen";

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <PaperProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={nameScreen.USER_HISTORY_TRANSACTION_SCREEN}
      >
        <Stack.Screen
          name={nameScreen.USER_DETAIL_SCREEN}
          component={UserDetailScreen}
        />
        <Stack.Screen
          name={nameScreen.USER_FAVORITE_SCREEN}
          component={UserFavoriteScreen}
        />
        <Stack.Screen
          name={nameScreen.USER_PROMOTION_SCREEN}
          component={UserPromotions}
        />
        <Stack.Screen
          name={nameScreen.USER_HISTORY_TRANSACTION_SCREEN}
          component={UserTransactionHistory}
        />
      </Stack.Navigator>
    </PaperProvider>
  );
};

export default UserStack;
