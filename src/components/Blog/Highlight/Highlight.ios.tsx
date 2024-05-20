import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { textColor, textFont } from "../../../constants";

const Highlight = ({ title, description } : { title: string, description: string}) => {
  return (
    <>
        <View style={ styles.container }>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{description}</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 10
    },
    title: {
        width: "100%",
        color: textColor.titleTextColorBlack,
        fontSize: textFont.title,
        fontWeight: "700",
    },
    subTitle: {
        width: "95%",
        color: textColor.titleTextColorBlack,
        fontSize: textFont.titleNormal,
        textAlign: "justify",
        fontWeight: "300",
        lineHeight: 24,
        marginTop: 5
    }
});

export default Highlight;
