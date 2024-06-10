import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ArrowButton = ({
  direction,
  onPress,
}: {
  direction: string;
  onPress?: (event: any) => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
