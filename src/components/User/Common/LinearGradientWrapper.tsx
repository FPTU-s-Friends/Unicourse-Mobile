import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

const LinearGradientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <LinearGradient
      style={styles.linearContainer}
      colors={["#5EDFF5", "#9F80F8", "transparent"]}
    >
      {children}
    </LinearGradient>
  );
};

export default LinearGradientWrapper;

const styles = StyleSheet.create({
  linearContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
