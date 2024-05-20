import React, { useEffect, useLayoutEffect, useState } from "react";
import HTMLView from 'react-native-htmlview';
import { textColor, textFont } from "../../constants";

// Import component
import {
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    View
} from "react-native";
import Header from "../../components/Blog/Header/Header";
import Author from "../../components/BlogDetail/Author/Author";
import Bottom from "../../components/BlogDetail/Bottom/Bottom";
import { blogsData } from "../../assets/data/blogData";
import { Tags, Blogs, Blog } from "../../types";

const BlogDetailScreen = ({ route, navigation }: any) => {
    const { id }= route.params;
    const blogs = blogsData;
    const [blog, setBlog] = useState({} as Blog);
    const [loading, setLoading] = useState(true);
    const [renderHtml, setRenderHtml] = useState("");

    useLayoutEffect(() => {
        const foundBlog: Blog | undefined = blogs.find(blog => blog._id === id);
        if (foundBlog) {
            setBlog(foundBlog);
            const renderHtml = `
            ${foundBlog.blogDetail}
            `;
            setRenderHtml(foundBlog.blogDetail);
            setLoading(false);
        }
    }, [id]);

    // Function xử lý vấn đề quá nhiều space khi render HTML
    function trimNewLines(text: any) {
        if (!text) return;
        return text.replace(/(\r\n|\n|\r)/gm, '');
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header />
            <ScrollView style={styles.bodyContainer}>
                <Author blog={blog} />
                {renderHtml ? (
                    <View style={styles.container}>
                        <HTMLView
                            stylesheet={stylesheet}
                            addLineBreaks={false}
                            value={`${trimNewLines(renderHtml)}`}
                        />
                    </View>
                ) : (
                    <Text>Loading...</Text>
                )}
                <Bottom blog={blog} />
            </ScrollView>
        </SafeAreaView>
    );
};

// Style cho BlogDetailScreen
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: Dimensions.get("window").height * 0.05,
        backgroundColor: "#f7f8fc"
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        margin: "auto"
    },
    bodyContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        width: "100%"
    },
});

// Style cho HTMLView
const stylesheet = StyleSheet.create({
    p: {
        textAlign: "justify",
        lineHeight: 30,
        fontSize: textFont.titleNormal,
    },
    h1: {
        fontSize: textFont.h1,
        lineHeight: 30,
        paddingBottom: 10,
    },
    h2: {
        fontSize: textFont.h2,
        lineHeight: 30,
        paddingBottom: 10,
    },
    h3: {
        fontSize: textFont.h3,
        lineHeight: 30,
        paddingBottom: 10,
    },
    h4: {
        fontSize: textFont.h4,
        lineHeight: 30,
    },
    h5: {
        fontSize: textFont.h5,
        lineHeight: 30,
    },
    pre: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        fontSize: textFont.titleNormal
    },
    code: {
        color: "#333", // Text color
        fontFamily: "monospace",
        fontSize: textFont.titleNormal
    },
    img: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    }
});

export default BlogDetailScreen;
