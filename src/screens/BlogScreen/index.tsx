import React, { useEffect, useState } from "react";
import {
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
    SafeAreaView,
    ScrollView,
    Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../../components/Blog/Header/Header";
import Highlight from "../../components/Blog/Highlight/Highlight";
import Suggest from "../../components/Blog/Suggest/Suggest";
import BLogItem from "../../components/Blog/BlogItem/BlogItem";
import { Tags, Blogs, Blog } from "../../types";
import { tagsData, blogsData } from "../../assets/data/blogData";

// IMPORT API SERVICES
import { useBlogService } from "../../core/services";


const BlogScreen = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const title: string = "Bài viết nổi bật"
    const description: string = "Tổng hợp bài viết chia sẻ về kinh nghiệm tự học tập và phương pháp học tập của sinh viên và giảng viên."
    const [blogs, setBlogs] = useState(blogsData);
    const [tags, setTags] = useState(tagsData);

    // Behavior variables
    const [loading, setLoading] = useState(true);

    // API variables
    const { fetchAllBlog } = useBlogService();

    useEffect(() => {
        const initBlogData = async () => {
            const initBlog = await fetchAllBlog();
            if (initBlog.status === 200) {
                setBlogs(initBlog.data);
                setLoading(false);
            }
        };
        initBlogData();
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header />
            {loading ? <Text>Loading...</Text> : (
                <ScrollView style={styles.bodyContainer}>
                    <Highlight title={title} description={description} />
                    <Suggest tags={tags} />
                    <FlatList
                        style={styles.listContainer}
                        data={blogs}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <BLogItem navigation={navigation} blog={item} />
                        )}
                        keyExtractor={(item) => item.title}
                    />
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: Dimensions.get("window").height * 0.05,
        backgroundColor: "#fff"
    },
    bodyContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: "#f7f8fc"
    },
    listContainer: {

    }
});

export default BlogScreen;
