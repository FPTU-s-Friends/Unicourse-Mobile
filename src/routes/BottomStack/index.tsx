import React, { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*
Import constant
*/
import { nameScreen } from "../../constants/nameScreen";

/*
Import Screen
*/
import HomePageScreen from "../../screens/HomePageScreen";
import BlogScreen from "../../screens/BlogScreen";
import UserDetailScreen from "../../screens/UserScreen";

/*
Import Icon
*/
import { AntDesign } from "@expo/vector-icons";
import { textColor } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabLabel,
        headerShown: false,
      }}
      initialRouteName={nameScreen.HOMEPAGE}
    >
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
        name="Trang chủ"
        component={HomePageScreen}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => <AntDesign name="earth" size={24} color="black" />,
        }}
        name="Bài viết"
        component={BlogScreen}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => (
            <Ionicons name="settings-outline" size={24} color="black" />
          ),
        }}
        name="Cài đặt"
        component={UserDetailScreen}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    color: textColor.titleTextColorBlack,
    fontSize: 12,
  },
});
export default BottomStack;
