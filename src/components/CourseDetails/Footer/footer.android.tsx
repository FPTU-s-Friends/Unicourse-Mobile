import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { textColor, textFont } from "../../../constants";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const FooterCard = ({ navigate }: { navigate: any }) => {
  const onPress = () => {
    navigate.navigate("CartScreen", {
      screen: "CartScreen",
    });
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.cartStyle} onPress={onPress}>
        <Feather name="shopping-cart" size={24} color="black" />
      </Pressable>
      <LinearGradient
        colors={["#4294ff", "#8e54e9"]}
        style={styles.buttonStyle}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={{ fontSize: 16, alignSelf: "center", color: "white" }}>
          Học ngay
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    columnGap: 10,
  },
  cartStyle: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
  },
  buttonStyle: {
    justifyContent: "center",
    flex: 9,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});

export default FooterCard;
