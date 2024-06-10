import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { backgroundColor, textColor, textFont } from "../../../constants";

const BlogTag = ({ tag, style }: { tag: any; style?: Object }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableHighlight
        activeOpacity={0.6}
        style={[styles.button, { backgroundColor: tag.color }]}
      >
        <Text style={[styles.buttonText]}>
          {tag.name}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
  },
  button: {
    width: "100%",
    height: "auto",
    marginRight: 5,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: textFont.tagSize,
    textAlign: "center",
    color: "white"
  },
});

export default BlogTag;
