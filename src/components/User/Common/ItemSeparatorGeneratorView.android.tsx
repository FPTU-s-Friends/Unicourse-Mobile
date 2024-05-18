import React from "react";
import { StyleSheet, View } from "react-native";

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
