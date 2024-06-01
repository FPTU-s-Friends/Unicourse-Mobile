import React, { useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    FlatList,
    Touchable,
    TouchableOpacity
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Blogs, Blog, Tag, RootStackParamList, MainStackParamList } from "../../../types";
import { textColor, textFont } from "../../../constants";
import BlogTag from "../BlogTag/BlogTag";

import { format, parseISO } from 'date-fns';


const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const BLogItem = ({ blog, navigation } : { blog: Blog, navigation: any }) => {
    // Biến data
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
        const date = parseISO(blog.created_at);
        const formattedDate = format(date, 'MM/dd/yyyy');
        setData({ ...blog, created_at: formattedDate });
    }, [blog]);

    const onPress = () => {
        const blogPostId = blog._id; // Extract ID from blog data
        navigation.navigate("BlogStack", { screen: "BlogDetailScreen", params: { id: blogPostId } });
      };
      
    return (
        <View style={styles.container}>
            <View style={styles.userLayout}>
                    <Image
                        style={styles.userImage}
                        resizeMode="cover"
                        source={{ uri: `${data.userId.profile_image}` }}
                    />
                <View style={styles.userTextInfo}>
                    <Text style={styles.title} numberOfLines={1}>
                        {data.userId.fullName}
                    </Text>
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

            <TouchableOpacity onPress={onPress}>
                <View style={styles.groupThumbnail}>
                    <Image
                        resizeMode={"cover"}
                        style={styles.thumnail}
                        source={{ uri: `${data.thumbnail_url}` }}
                    />
                </View>
            </TouchableOpacity>

            <View style={styles.bodyBlog}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.titleBodyBlog}>{data.title}</Text>
                </TouchableOpacity>
                <Text style={styles.descriptionBodyBlog} numberOfLines={3} ellipsizeMode="tail">
                    {data.description}
                </Text>
            </View>

            <View style={styles.bodyBlog2}>
                <Text style={styles.descriptionBodyBlog2}>
                    {data.created_at} |{" "}
                </Text>
                <Text style={styles.descriptionBodyBlog2}>
                    {data.min_read} phút đọc
                </Text>
            </View>

            <FlatList
                style={styles.tags}
                data={data.tags}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <BlogTag tag={item} />}
                keyExtractor={(item) => item.code}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        height: windowDimensions.height * 0.53,
        width: windowDimensions.width * 0.9,
        marginBottom: 30
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
        height: 130,
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
        marginTop: 10,
        width: "100%",
    },
    titleBodyBlog: {
        color: textColor.titleTextColorBlack,
        fontSize: textFont.title,
        fontWeight: "700",
    },
    descriptionBodyBlog: {
        color: textColor.titleTextColorBlack,
        fontSize: textFont.titleNormal,
        textAlign: "justify",
        fontWeight: "300",
        lineHeight: 24,
        marginTop: 5,
    },
    bodyBlog2: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        width: "100%",
        alignContent: "center",
        alignItems: "center",
    },
    dot: {
        alignSelf: "center",
        marginHorizontal: 5,
        padding: 2,
        borderRadius: 50,
        backgroundColor: textColor.titleTextColorBlack,
    },
    descriptionBodyBlog2: {
        color: textColor.titleTextColorBlack,
        fontSize: textFont.titleNormal,
        fontWeight: "400",
        lineHeight: 24,
        marginTop: 5
    },
    tags: {
        display: "flex",
        flexDirection: "row",
        padding: 10
    }
});

export default BLogItem;
