import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { textColor, textFont } from "../../../constants";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HeaderCard = ({
  navigate,
  logoImage,
}: {
  navigate: any;
  logoImage: string;
}) => {
  const onPressHomePage = () => {
    navigate.navigate("HomePgaeScreen", {
      screen: "HomePgaeScreen",
    });
  };

  const onPressCart = async () => {
    navigate.navigate("CartStack", {
      screen: "CartScreen",
    });
  };

  return (
    <View style={styles.container}>
        <View style={styles.actionBar}>
          <Pressable onPress={onPressHomePage}>
            <Ionicons
              name="arrow-back"
              size={21}
              color="black"
              style={[styles.ItemStyle]}
            />
          </Pressable>

          <View style={styles.actionBarRight}>
            <Pressable>
              <AntDesign
                name="heart"
                size={21}
                color="red"
                style={[{ marginRight: 10 }, styles.ItemStyle]}
              />
            </Pressable>
            <Pressable onPress={onPressCart}>
              <Feather
                name="shopping-cart"
                size={21}
                color="black"
                style={[{ marginRight: 10 }, styles.ItemStyle]}
              />
            </Pressable>
            <Pressable>
              <SimpleLineIcons
                name="share"
                size={21}
                color="black"
                style={styles.ItemStyle}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <ImageBackground source={{ uri: logoImage }} style={styles.logoImage} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 40,
    marginBottom: 15,
    overflow: "hidden", // Clip logo image
    position: "relative", // For positioning actionBar
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    opacity: 0.8,
    zIndex: 1,
    marginVertical: 10,
  },
  actionBarRight: {
    flexDirection: "row",
  },
  imgContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  logoImage: {
    width: "100%",
    alignSelf: "center",
    height: 200,
    resizeMode: "contain",
    overflow: 'hidden'
  },
  ItemStyle: {
    backgroundColor: textColor.titleTextColorGray,
    borderRadius: 50,
    padding: 6
  },
});

export default HeaderCard;
