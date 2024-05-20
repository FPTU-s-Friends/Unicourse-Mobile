import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ArrowButton = ({ direction }: { direction: string }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name={`arrow-${direction}`} size={27} color={"black"}></Icon>
    </TouchableOpacity>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
});
