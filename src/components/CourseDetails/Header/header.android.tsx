import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { textColor, textFont } from "../../../constants";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import globalStyle from "../../../styles/globalStyle";

const HeaderCard = ({
  navigate,
  logoImage,
}: {
  navigate: any;
  logoImage: string;
}) => {
  const [button1Pressed, setButton1Pressed] = useState(false);
  const [button2Pressed, setButton2Pressed] = useState(false);
  const [button3Pressed, setButton3Pressed] = useState(false);
  const [button4Pressed, setButton4Pressed] = useState(false);

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

  const buttonStyle = globalStyle;

  return (
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <TouchableOpacity
          onPressIn={() => setButton1Pressed(true)}
          onPressOut={() => setButton1Pressed(false)}
          style={button1Pressed && buttonStyle.pressed}
          onPress={onPressHomePage}
        >
          <Ionicons
            name="arrow-back"
            size={21}
            color="black"
            style={[styles.ItemStyle]}
          />
        </TouchableOpacity>

        <View style={styles.actionBarRight}>
          <TouchableOpacity
            onPressIn={() => setButton2Pressed(true)}
            onPressOut={() => setButton2Pressed(false)}
            style={button2Pressed && buttonStyle.pressed}
          >
            <AntDesign
              name="heart"
              size={21}
              color="red"
              style={[{ marginRight: 10 }, styles.ItemStyle]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => setButton3Pressed(true)}
            onPressOut={() => setButton3Pressed(false)}
            style={button3Pressed && buttonStyle.pressed}
            onPress={onPressCart}
          >
            <Feather
              name="shopping-cart"
              size={21}
              color="black"
              style={[{ marginRight: 10 }, styles.ItemStyle]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => setButton4Pressed(true)}
            onPressOut={() => setButton4Pressed(false)}
            style={button4Pressed && buttonStyle.pressed}
          >
            <SimpleLineIcons
              name="share"
              size={21}
              color="black"
              style={styles.ItemStyle}
            />
          </TouchableOpacity>
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
    overflow: "hidden",
  },
  ItemStyle: {
    backgroundColor: textColor.titleTextColorGray,
    borderRadius: 50,
    padding: 6,
  },
});

export default HeaderCard;
