import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { textColor } from "../../../constants/appColors";

const AuthButton = ({
  icon,
  text,
}: {
  icon?: ImageSourcePropType;
  text: string;
}) => {
  return (
    <>
      {icon ? (
        <View style={styles.container}>
          <Image
            resizeMode={"contain"}
            source={icon}
            style={styles.imgButton}
          />
          <Text style={styles.textButton}>{text}</Text>
        </View>
      ) : (
        <View style={[styles.container, { marginTop: "5%" }]}>
          <Text style={styles.textButton}>{text}</Text>
        </View>
      )}
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

export default AuthButton;
