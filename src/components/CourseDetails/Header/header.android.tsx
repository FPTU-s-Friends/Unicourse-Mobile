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

const HeaderCard = ({ navigate }: { navigate: any }) => {
  const onPress = () => {
    navigate.navigate("HomePgaeScreen", {
      screen: "HomePgaeScreen",
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/course_logo.png")}
        style={styles.logoImage}
      >
        <View style={styles.actionBar}>
          <Pressable onPress={onPress}>
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
            <Pressable>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 40,
    marginBottom: 30,
    overflow: "hidden", // Clip logo image
    position: "relative", // For positioning actionBar
    // backgroundColor: "red",
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // position: "absolute",
    // top: 20, // Adjust top positioning
    // left: 45,
    // right: 45,
    marginTop: 15,
    marginHorizontal: 15,
    opacity: 0.8,
    zIndex: 1,
    // alignSelf: "center",
  },
  actionBarRight: {
    flexDirection: "row",
  },
  logoImage: {
    width: "100%",
    alignSelf: "center",

    // padding: 1,
    // borderRadius: 10,
    height: 200, // Set a fixed height
    resizeMode: "contain", // Maintain aspect ratio but fit within height
  },
  ItemStyle: {
    backgroundColor: "#9fb2c7",
    borderRadius: 20,
    padding: 5,
  },
});

// const styles = StyleSheet.create({
//   logoImage: {
//     width: "100%",
//     height: "60%",
//     alignSelf: "flex-start",
//   },
//   actionBar: {
//     position: "absolute",
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     // marginBottom: 20, // Add spacing
//   },
//   container: {
//     position: "relative",
//     width: "100%",
//     marginTop: 30,
//     borderRadius: 10,
//     padding: 20,
//   },
// });

export default HeaderCard;
