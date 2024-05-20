import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CustomIconButton = ({ buttonName }: { buttonName: string }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name={buttonName} size={27} color={"black"}></Icon>
    </TouchableOpacity>
  );
};

export default CustomIconButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
});
