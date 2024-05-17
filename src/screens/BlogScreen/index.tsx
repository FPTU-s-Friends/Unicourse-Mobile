import React from "react";
import {
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
    SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { textColor } from "../../constants/appColors";
import { AuthStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../../components/Blog/Header/Header";
import Highlight from "../../components/Blog/Highlight/Highlight";
import Suggest from "../../components/Blog/Suggest/Suggest";
import BLogItem from "../../components/Blog/BlogItem/BlogItem";
import { Tags, Blogs } from "../../types";
import { tagsData, blogsData } from "../../assets/data";

const BlogScreen = () => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<AuthStackParamList>
        >();

    const title: string = "Bài viết nổi bật"
    const description: string = "Tổng hợp bài viết chia sẻ về kinh nghiệm tự học tập và phương pháp học tập của sinh viên và giảng viên."
    const tags: Tags = tagsData;
    const blogs: Blogs = blogsData;

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header />
            <View style={styles.bodyContainer}>
                <Highlight title={title} description={description} />
                <Suggest tags={tags} />
                <FlatList
                    style={styles.listContainer}
                    data={blogs}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <BLogItem blog={item} />
                    )}
                    keyExtractor={(item) => item.title}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
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
