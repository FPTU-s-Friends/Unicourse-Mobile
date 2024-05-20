import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const LogoutButton = () => {
  return (
    <TouchableOpacity style={{ position: "absolute", bottom: -20 }}>
      <LinearGradient
        style={styles.logoutButtonGradient}
        colors={["#5EDFF5", "#9F80F8"]}
      >
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  logoutButtonGradient: {
    height: 45,
    padding: 10,
    borderRadius: 15,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  logoutText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});
