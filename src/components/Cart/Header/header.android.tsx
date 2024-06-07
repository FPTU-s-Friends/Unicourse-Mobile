import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native-paper";

const HeaderCart = ({ navigate }: { navigate: any }) => {
  const onPress = () => {
    navigate.navigate("HomePgaeScreen", {
      screen: "HomePgaeScreen",
    });
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <Text style={styles.actionBarText}>
        Giỏ hàng <Text style={{ fontSize: 16, color: "#16aef3" }}>(4)</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 40,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    // flex: 1,
  },
  actionBarText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HeaderCart;
