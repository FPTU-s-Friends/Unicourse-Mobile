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

const BlogScreen = () => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<AuthStackParamList>
        >();

    return (
        <View>
            <Header />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        position: "absolute",
        top: "70%",
        color: textColor.titleTextColorBlack,
        fontSize: 28,
        fontWeight: "700",
    },
    subTitle: {
        color: textColor.subTitleColor,
        fontWeight: "300",
        fontSize: 16,
        paddingHorizontal: 35,
        textAlign: "center",
    },
    subTitle2: {
        color: textColor.subTitleColor,
        fontWeight: "300",
        fontSize: 16,
        paddingHorizontal: 35,
        textAlign: "center",
        position: "absolute",
        top: "75.5%",
    },
    img: {
        width: "100%",
        height: 450,
    },
    img2: {
        width: "100%",
        height: "100%",
        position: "relative",
        top: "-20%",
    },
    button: {
        flexDirection: "column",
        position: "absolute",
        borderTopLeftRadius: 10,
        backgroundColor: "#fff",
        width: 350,
        height: 50,
        top: "-150%",
        right: "22%",
    },
    buttonText: {
        textAlign: "center",
        marginTop: 15,
        color: textColor.titleTextColorWhite,
        fontSize: 18,
    },
});

export default BlogScreen;
