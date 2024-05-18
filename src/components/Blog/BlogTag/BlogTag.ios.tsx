import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from "react-native";
import {
    backgroundColor,
    textColor,
    textFont,
} from "../../../constants";
import { Tag } from "../../../types";

const BlogTag = ({ tag }: { tag: Tag }) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                activeOpacity={0.6}
                style={[
                    styles.button,
                    { backgroundColor: tag.backgroundColor },
                ]}
            >
                <Text
                    style={[
                        styles.buttonText,
                        { color: tag.textColor },
                    ]}
                >
                    {tag.text}
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
    },
});

export default BlogTag;
