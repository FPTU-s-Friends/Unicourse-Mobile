import React, { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*
Import constant
*/
import { nameSreen } from "../../constants/nameScreen";

/*
Import Screen
*/
import HomePageScreen from "../../screens/HomePageScreen";

/*
Import Icon
*/
import { AntDesign } from "@expo/vector-icons";
import { textColor } from "../../constants";

const BottomTabs = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabLabel,
        headerShown: false,
      }}
      initialRouteName={nameSreen.HOMEPAGE}
    >
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
        name="Trang chủ"
        component={HomePageScreen}
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
