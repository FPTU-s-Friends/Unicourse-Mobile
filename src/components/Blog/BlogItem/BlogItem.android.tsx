import React, { useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Blogs, Blog } from "../../../types";
import { textColor, textFont } from "../../../constants";

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const BLogItem = ({ blog } : { blog: Blog }) => {
    const [data, setData] = useState(blog);
    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
      });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            "change",
            ({ window, screen }) => {
                setDimensions({ window, screen });
            }
        );
        return () => subscription?.remove();
    });

    useEffect(() => {
        setData(blog);
    }, [blog]);
      
    return (
        <View style={styles.container}>
            <View style={styles.userLayout}>
                <Image
                    style={styles.userImage}
                    resizeMode="cover"
                    source={{ uri: `${data.user.avatar}`}}
                />
                <View style={styles.userTextInfo}>
                    <Text style={styles.title} numberOfLines={1}>
                        {data.user.name}
                    </Text>
                    <Text style={styles.textRole} numberOfLines={1}>
                        {data.user.role}
                    </Text>
                </View>
                <View style={styles.groupIcon}>
                    <View style={styles.bookmark}>
                        <Feather name="bookmark" size={20} color="black" />
                    </View>
                    <View style={styles.ellipsis1}>
                        <AntDesign name="ellipsis1" size={24} color="black" />
                    </View>
                </View>
            </View>

            <View style={styles.groupThumbnail}>
                <Image resizeMode={"cover"} style={styles.thumnail} source={{uri: `${data.thumnail}`}} />
            </View>

            <View style={styles.bodyBlog}>
                <Text style={styles.titleBodyBlog}>{data.title}</Text>
                <Text style={styles.descriptionBodyBlog}>{data.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        height: windowDimensions.height * 0.9,
        width: windowDimensions.width * 0.9,
    },
    userLayout: {
        height: 40,
        width: "100%",
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 20,
        marginTop: 10
    },
    userImage: {
        objectFit: "cover",
        alignSelf: "center",
        width: windowDimensions.height * 0.06,
        height: windowDimensions.height * 0.06,
        borderRadius: Math.round((windowDimensions.height * 0.06 + windowDimensions.width) / 2)
    },
    userTextInfo: {
        display: "flex",
        flexDirection: "column",
        width: "40%",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: "500",
        color: "#111",
    },
    textRole: {
        fontSize: 10,
        color: "#8d8a8a",
    },
    groupIcon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        height: "100%",
        alignItems: "center",
    },
    bookmark: {
        paddingHorizontal: "10%"
    },
    ellipsis1: {
        paddingRight: "10%"
    },
    groupThumbnail: {
        height: "20%",
        width: "70%",
        marginTop: "4%",
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    thumnail: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    bodyBlog: {
        paddingHorizontal: 10,
        marginTop: "4%",
        width: "100%",
    },
    titleBodyBlog: {
        color: textColor.titleTextColorBlack,
        fontSize: 18,
        fontWeight: "700",
    },
    descriptionBodyBlog: {
        color: textColor.titleTextColorBlack,
        fontSize: textFont.descriptionSize,
        textAlign: "justify",
        fontWeight: "300",
        lineHeight: 24,
        marginTop: 5
    }
});

export default BLogItem;
