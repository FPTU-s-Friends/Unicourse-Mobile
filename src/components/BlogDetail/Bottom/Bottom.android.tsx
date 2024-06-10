import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    FlatList
} from "react-native";
import { backgroundColor, textColor, textFont } from "../../../constants";
import { Blog } from "../../../models";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import BlogTag from "../../Blog/BlogTag/BlogTag";

const Bottom = ({ blog }: { blog: Blog }) => {
    return (
        <View style={styles.container}>
            <View style={styles.reactContainer}>
                <View style={styles.groupHearto}>
                    <AntDesign
                        style={styles.hearto}
                        name="hearto"
                        size={24}
                        color="#757575"
                    />
                    <Text style={styles.textHearto}>
                        {blog.like.length}
                    </Text>
                </View>
                <View style={styles.groupComment}>
                    <Fontisto
                        style={styles.comment}
                        name="comment"
                        size={22}
                        color="#757575"
                    />
                    <Text style={styles.textComment}>
                        {blog.comment_obj.length}
                    </Text>
                </View>
            </View>

            <FlatList
                style={styles.tags}
                data={blog.tags}
                scrollEnabled={false}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <BlogTag tag={item} />}
                keyExtractor={(item) => item.code.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    reactContainer: {
        alignItems: "center",
        flexDirection: "row",
    },
    groupHearto: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20
    },
    hearto: {
        marginRight: 5,
        paddingVertical: 10,
    },
    textHearto: {
        fontSize: textFont.titleNormal,
        color: textColor.reactText,
    },
    groupComment: {
        flexDirection: "row",
        alignItems: "center"
    },
    comment: {
        marginRight: 5,
        paddingVertical: 10,
    },
    textComment: {
        fontSize: textFont.titleNormal,
        color: textColor.reactText,
    },
    tags: {
        flexDirection: "column",
        width: "100%",
    }
});

export default Bottom;
