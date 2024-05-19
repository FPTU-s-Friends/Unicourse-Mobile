import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { textColor, textFont } from "../../../constants";

const CourseCard = ({
  title,
  fixPrice,
  newPrice,
}: {
  title: string;
  fixPrice: string;
  newPrice: string;
}) => {
  return (
    <View>
      <Text>Làm chủ Javascript trong phát triển Website - ReactJS</Text>
    </View>
  );
};

export default CourseCard;
