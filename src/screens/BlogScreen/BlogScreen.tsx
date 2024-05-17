import React from "react";
import {
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    View
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
import { Tags } from "../../types";
import { tagsData } from "../../assets/data";

const BlogScreen = () => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<AuthStackParamList>
        >();

    const title: string = "Bài viết nổi bật"
    const description: string = "Tổng hợp bài viết chia sẻ về kinh nghiệm tự học tập và phương pháp học tập của sinh viên và giảng viên."
    const tags: Tags = tagsData;

    return (
        <>
            <Header />
            <View style={styles.bodyContainer}>
                <Highlight title={title} description={description} />
                <Suggest tags={tags}/>
                <BLogItem />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: "#f7f8fc"
    }
});

export default BlogScreen;
