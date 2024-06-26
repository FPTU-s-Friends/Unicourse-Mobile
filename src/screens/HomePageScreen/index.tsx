import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/HomePage/Header/Header";
import MyCarousel from "../../components/HomePage/Carousel/Carousel";
import Category from "../../components/HomePage/Category/Category";
import Course from "../../components/HomePage/Course/Course";
import Lecture from "../../components/HomePage/Lecture/Lecture.ios";
import { useContext } from "react";
import { RootContext } from "../../context/providers/AppProvider";
import { useNavigation } from "@react-navigation/native";

const HomePageScreen = () => {
  const { state, dispatch } = useContext(RootContext);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />
      <ScrollView>
        {/* Carousel */}
        <MyCarousel />

        {/*  Category*/}
        <Category />

        {/* Course */}
        <Course />

        {/* Lecture */}
        <Lecture />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomePageScreen;
