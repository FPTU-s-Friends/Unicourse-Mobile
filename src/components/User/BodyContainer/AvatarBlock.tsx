import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { UserInfoTypes } from "../../../types/UserDetail.types";

const AvatarBlock = ({ userData }: { userData: UserInfoTypes }) => {
  return (
    <View style={styles.bodyAvatarBlock}>
      <ImageBackground
        resizeMode="cover"
        source={userData.avatar as any}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.avatarOverlayParentWrapper}>
        <View style={styles.avatarOverLayChildWrapper}></View>
      </View>
    </View>
  );
};

export default AvatarBlock;

const styles = StyleSheet.create({
  bodyAvatarBlock: { position: "relative", top: 22, zIndex: 1 },
  authorName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },
  avatarOverlayParentWrapper: {
    position: "absolute",
    bottom: 0,
    right: "0%",
    left: "16%",
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#ffffff",
  },
  avatarOverLayChildWrapper: {
    position: "absolute",
    bottom: 0,
    top: "15%",
    right: "auto",
    left: "16%",
    width: 21,
    height: 21,
    borderRadius: 50,
    backgroundColor: "#4284F4",
  },
});
