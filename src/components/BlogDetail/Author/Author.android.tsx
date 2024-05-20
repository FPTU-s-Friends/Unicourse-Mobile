import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";
import { textColor, textFont } from "../../../constants";
import { Blog } from "../../../types";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Author = ({ blog }: { blog: Blog }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blog.title}</Text>

            <View style={styles.userLayout}>
                <View style={styles.userGroupImage}>
                    <Image
                        style={styles.userImage}
                        resizeMode="cover"
                        source={{
                            uri: `${blog?.user?.avatar}`,
                        }}
                    />
                </View>
                <View style={styles.userTextInfo}>
                    <Text style={styles.title} numberOfLines={1}>
                        {blog?.user?.name}
                    </Text>
                    <View style={styles.subTitle}>
                        <Text style={styles.subDescription}>
                            {blog?.createdAt} |{" "}
                        </Text>
                        <Text style={styles.subDescription}>
                            {blog?.minutedRead} phút đọc
                        </Text>
                    </View>
                </View>
                <View style={styles.groupIcon}>
                    <View style={styles.bookmark}>
                        <Feather
                            name="bookmark"
                            size={20}
                            color="black"
                        />
                    </View>
                    <View style={styles.ellipsis1}>
                        <AntDesign
                            name="ellipsis1"
                            size={24}
                            color="black"
                        />
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: textFont.h3,
        fontWeight: "500",
        lineHeight: 30,
    },
    userLayout: {
        height: 50,
        width: 180,
        flexDirection: "row",
        marginTop: 10,
    },
    userGroupImage: {
        height: "auto",
        width: 50,
    },
    userImage: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 50,
        objectFit: "cover",
    },
    userTextInfo: {
        display: "flex",
        flexDirection: "column",
        width: 150,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    subTitle: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
    },
    subDescription: {
        color: textColor.titleTextColorBlack,
        fontSize: textFont.titleNormal,
        fontWeight: "400",
        lineHeight: 24,
    },
    groupIcon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        height: "100%",
        width: "75%",
        alignItems: "center",
    },
    bookmark: {
        paddingHorizontal: "10%"
    },
    ellipsis1: {
        paddingRight: "10%"
    },
});

export default Author;
