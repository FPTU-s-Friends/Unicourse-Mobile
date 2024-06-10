import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";
import { textColor, textFont } from "../../../constants";
import { Blog } from "../../../models";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { format, parseISO } from 'date-fns';

const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

const Author = ({ blog }: { blog: Blog }) => {

    const [data, setData] = useState(blog as any);

    useEffect(() => {
        // const date = parseISO(blog.created_at);
        const formattedDate = format(blog.created_at, 'MM/dd/yyyy');
        setData({ ...blog, created_at: formattedDate });
    }, [blog]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>

            <View style={styles.userLayout}>
                <View style={styles.userGroupImage}>
                    <Image
                        style={styles.userImage}
                        resizeMode="cover"
                        source={{
                            uri: `${data?.userId?.profile_image}`,
                        }}
                    />
                </View>
                <View style={styles.userTextInfo}>
                    <Text style={styles.title} numberOfLines={1}>
                        {data?.userId?.fullName}
                    </Text>
                    <View style={styles.subTitle}>
                        <Text style={styles.subDescription}>
                            {data?.created_at} |{" "}
                        </Text>
                        <Text style={styles.subDescription}>
                            {String(data?.min_read)} phút đọc
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
        marginBottom: 10
    },
    title: {
        fontSize: textFont.h3,
        fontWeight: "500",
        lineHeight: 30,
    },
    userLayout: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between"
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
        alignItems: "center",
    },
    bookmark: {
        paddingHorizontal: "10%"
    },
    ellipsis1: {
    },
});

export default Author;
