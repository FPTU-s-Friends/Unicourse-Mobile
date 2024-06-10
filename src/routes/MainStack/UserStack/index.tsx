import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { nameScreen } from "../../../constants/nameScreen";
import UserFavoriteScreen from "../../../screens/UserFavoriteScreen";
import UserDetailScreen from "../../../screens/UserScreen";
import UserTransactionHistory from "../../../screens/UserTransactionHistoryScreen";
import UserPromotions from "../../../screens/UserVoucher";
import { Provider } from "react-redux";
import store from "../../../stores";
import { UserStackParamList } from "../../../types";

const Stack = createStackNavigator<UserStackParamList>();

const UserStack = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={
            nameScreen.USER_DETAIL_SCREEN as keyof UserStackParamList
          }
        >
          <Stack.Screen
            name={nameScreen.USER_DETAIL_SCREEN as keyof UserStackParamList}
            component={UserDetailScreen}
          />
          <Stack.Screen
            name={nameScreen.USER_FAVORITE_SCREEN as keyof UserStackParamList}
            component={UserFavoriteScreen}
          />
          <Stack.Screen
            name={nameScreen.USER_PROMOTION_SCREEN as keyof UserStackParamList}
            component={UserPromotions}
          />
          <Stack.Screen
            name={
              nameScreen.USER_HISTORY_TRANSACTION_SCREEN as keyof UserStackParamList
            }
            component={UserTransactionHistory}
          />
        </Stack.Navigator>
      </Provider>
    </PaperProvider>
  );
};

export default UserStack;
