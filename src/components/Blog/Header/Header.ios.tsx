import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { textColor } from "../../../constants/appColors";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <>
      <LinearGradient
          style={[
            styles.container,
            {
              marginTop: "5%",
              backgroundColor:
                "linear-gradient(90deg, #5EDFF5 0%, #9F80F8 100%)",
              borderRadius: 40,
            },
          ]}
          colors={["#5EDFF5", "#9F80F8"]}
        >
          <Text style={[styles.textButton, { color: "white" }]}>ABC</Text>
        </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: "5%",
    width: "90%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEE",
    paddingHorizontal: "15%",
    paddingVertical: "5%",
    justifyContent: "center",
  },
  imgButton: {
    width: 24,
    height: 24,
  },
  textButton: {
    fontSize: 18,
    color: textColor.normalText,
    fontWeight: "bold",
  },
});

export default Header;
