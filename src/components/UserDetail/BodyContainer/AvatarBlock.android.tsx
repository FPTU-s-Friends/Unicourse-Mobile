import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IUserDetailProps } from "../../../types";

const AvatarBlock = ({ userData }: { userData: IUserDetailProps }) => {
  return (
    <View style={styles.bodyAvatarBlock}>
      <ImageBackground
        resizeMode="contain"
        borderRadius={50}
        source={{
          uri: userData.profile_image,
        }}
        style={{ width: 90, height: 90 }}
      />
      <View style={styles.avatarOverlayParentWrapper}>
        <View style={styles.avatarOverLayChildWrapper}></View>
      </View>
    </View>
  );
};

export default AvatarBlock;

const styles = StyleSheet.create({
  bodyAvatarBlock: { zIndex: 1, top: "-8%", position: "absolute" },
  authorName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  avatarOverlayParentWrapper: {
    position: "absolute",
    bottom: 0,
    right: "0%",
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#ffffff",
  },
  avatarOverLayChildWrapper: {
    position: "absolute",
    bottom: 0,
    top: "15%",
    left: "16%",
    width: 21,
    height: 21,
    borderRadius: 50,
    backgroundColor: "#4284F4",
  },
});
