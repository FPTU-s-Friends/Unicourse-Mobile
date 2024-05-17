import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ItemSeparatorGeneratorView = () => {
  return <View style={styles.separatorLine} />;
};

export default ItemSeparatorGeneratorView;

const styles = StyleSheet.create({
  separatorLine: {
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
  },
});
