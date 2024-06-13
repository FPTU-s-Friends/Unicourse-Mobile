import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  CourseDetailStackList,
  MainStackParamList,
} from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HeaderCard from "../../components/CourseDetails/Header/header.android";
import CourseCard from "../../components/CourseDetails/CourseCard/CourseCard.android";
import CourseDescription from "../../components/CourseDetails/CourseDescriptions/CourseDescriptions.android";
import FooterCard from "../../components/CourseDetails/Footer/footer.android";
import axios, { AxiosResponse } from "axios";
import { Course } from "../../models";
import { environment } from "../../../environments/environment.development";
import { useCourseDetailService } from "../../core/services/courseDetail.service";

const CourseDetailsScreen = ({ route }: any) => {
  const [course, setCourse] = useState({} as Course);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  // Course id from path paramater
  const { id } = route.params;

  // API variables
  const { getCourseById } = useCourseDetailService();

  const getCourse = async () => {
    try {
      const testData = await getCourseById(id);
      setCourse(testData.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <HeaderCard navigate={navigation} logoImage={course.thumbnail} />
        <CourseCard
          fixPrice={course?.amount}
          title={course?.title}
          enrollmentCount={course?.enrollmentCount}
        />
        <CourseDescription />
        <FooterCard navigate={navigation} courseId={id} />
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
