import React from "react";
import { StyleSheet, View } from "react-native";
import ArrowButton from "../Button/ArrowButton.android";
import CustomIconButton from "../Button/CustomIconButton.android";
import ShoppingCartButton from "../Button/ShoppingCartButton.android";

const HeaderInfo = () => {
  return (
    <View style={styles.wrapperHeaderButtonGroup}>
      <ArrowButton direction="left" />
      <View style={{ flexDirection: "row" }}>
        <ShoppingCartButton itemCount={12} />
        <CustomIconButton buttonName="edit-3" />
      </View>
    </View>
  );
};

export default HeaderInfo;

const styles = StyleSheet.create({
  wrapperHeaderButtonGroup: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
