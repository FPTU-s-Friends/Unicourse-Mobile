import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../../components/Blog/Header/Header";
import Highlight from "../../components/Blog/Highlight/Highlight";
import Suggest from "../../components/Blog/Suggest/Suggest";
import BLogItem from "../../components/Blog/BlogItem/BlogItem";
import { Tags, Blogs } from "../../types";
import { tagsData, blogsData } from "../../assets/data";
import HeaderCard from "../../components/CourseDetails/Header/header.android";
import CourseCard from "../../components/CourseDetails/CourseCard/CourseCard.android";

const CourseDetailsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderCard />
      <CourseCard fixPrice="240" newPrice="130" title="Keyboard" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default CourseDetailsScreen;
