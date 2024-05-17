import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const CustomButton = ({ buttonName }: { buttonName: string }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name={buttonName} size={27} color={"black"}></Icon>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
});
