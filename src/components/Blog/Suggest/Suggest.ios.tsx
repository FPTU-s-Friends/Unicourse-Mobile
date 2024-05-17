import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import { backgroundColor, textColor, textFont } from "../../../constants";
import { Tags } from "../../../types";

const Suggest = ({ tags } : { tags: Tags}) => {
  return (
      <>
          <View style={styles.container}>
              <Text style={styles.title}>
                  Các chủ đề được đề xuất
              </Text>
              <View style={styles.tags}>
                  {tags.map((tag, index) => (
                    <TouchableHighlight
                        key={`${index}`}
                        activeOpacity={0.6}
                        style={[styles.button, {backgroundColor: tag.backgroundColor}]}>
                        <Text style={[styles.buttonText, {color: tag.textColor}]}>{tag.text}</Text>
                    </TouchableHighlight>
                  ))}
              </View>
          </View>
      </>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
    },
    title: {
        color: textColor.titleTextColorGray,
        fontSize: textFont.descriptionSize,
        textTransform: "uppercase",
        fontWeight: "400",
        marginBottom: 10,
    },
    tags: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        width: "25%",
        marginRight: 5,
        marginBottom: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: textFont.tagSize,
        textAlign: "center",
    },
});

export default Suggest;
