import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HeaderCard from "../../components/CourseDetails/Header/header.android";
import CourseCard from "../../components/CourseDetails/CourseCard/CourseCard.android";
import CourseDescription from "../../components/CourseDetails/CourseDescriptions/CourseDescriptions.android";
import FooterCard from "../../components/CourseDetails/Footer/footer.android";

const CourseDetailsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <HeaderCard navigate={navigation} />
        <CourseCard fixPrice="240" newPrice="130" title="Keyboard" />
        <CourseDescription />
        <FooterCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "f7f8fc",
  },
});

export default CourseDetailsScreen;
