import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { textColor, textFont } from "../../../constants";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const FooterCart = () => {
  return (
    <View style={{ padding: 15, backgroundColor: "white" }}>
      <View style={styles.ticketArea}>
        <View style={{ flexDirection: "row", columnGap: 10 }}>
          <FontAwesome name="ticket" size={24} color="orange" />
          <Text style={styles.ticketAreaText}>Chọn mã giảm giá</Text>
        </View>

        <AntDesign name="arrowright" size={24} color="black" style={{}} />
      </View>
      <View style={{ position: "relative", top: 10 }}>
        <Text style={{ opacity: 0.5, fontSize: 16 }}>Tổng giá</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.realPrice}>$92.00</Text>
        <Text style={styles.discountPrice}>$159.00</Text>
        <LinearGradient
          colors={["#4294ff", "#8e54e9"]}
          style={styles.buttonStyle}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={{ fontSize: 16, alignSelf: "center", color: "white" }}>
            Mua ngay
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 10,
  },
  buttonStyle: {
    justifyContent: "center",
    flex: 9,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  discountPrice: {
    fontSize: 16,
    opacity: 0.5,
    textDecorationLine: "line-through",
    // verticalAlign: "bottom",
    alignSelf: "flex-end",
  },
  realPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#16aef3",
    alignSelf: "flex-end",
  },
  ticketArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f7f8fc",
    padding: 12,
    borderRadius: 10,
  },
  ticketAreaText: {
    fontSize: 16,
    opacity: 0.5,
  },
});

export default FooterCart;
