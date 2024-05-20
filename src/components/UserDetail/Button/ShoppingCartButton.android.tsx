import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ShoppingCartButton = ({ itemCount }: { itemCount: number }) => {
  return (
    <TouchableOpacity style={[styles.button, { marginRight: 15 }]}>
      <Icon name="shopping-cart" size={27} color={"black"}></Icon>
      <View style={styles.totalNumberOverlay}>
        <Text style={styles.totalNumber}>{itemCount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingCartButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
  totalNumberOverlay: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 0,
    right: -5,
    backgroundColor: "red",
    borderRadius: 50,
  },
  totalNumber: {
    position: "absolute",
    top: -2,
    right: 0,
    color: "white",
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
});
