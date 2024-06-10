import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { textColor, textFont } from "../../../constants";
import { MaterialIcons } from "@expo/vector-icons";

const CourseCard = ({
  title,
  fixPrice,
  enrollmentCount,
  feedback,
}: {
  title: string;
  fixPrice: number;
  enrollmentCount: number;
  feedback: any[];
}) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  if (feedback === undefined) {
    feedback = [];
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle]}>{title}</Text>
      <View style={styles.stars}>
        <MaterialIcons name="star" size={18} style={styles.starselected} />
        <MaterialIcons name="star" size={18} style={styles.starselected} />
        <MaterialIcons name="star" size={18} style={styles.starselected} />
        <MaterialIcons name="star" size={18} style={styles.starselected} />
        <MaterialIcons
          name="star-border"
          size={18}
          style={styles.starselected}
        />
        <Text style={styles.reviewerStatistic}>
          {feedback.length} Đánh giá | {enrollmentCount} Học viên
        </Text>
      </View>
      <View style={styles.pricePlace}>
        <Text style={styles.discountPrice}>{formatter.format(fixPrice)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    // fontWeight: "bold",
    // marginBottom: 20,
  },
  container: {
    // padding: 5,
    marginHorizontal: 15,
    marginBottom: 40,
    // backgroundColor: "red",
    // alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
  },
  starselected: {
    color: "#ffb300",
  },
  reviewerStatistic: {
    marginLeft: 10,
    opacity: 0.5,
  },
  pricePlace: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "baseline",
  },
  oldPrice: {
    fontSize: 14,
    opacity: 0.5,
    textDecorationLine: "line-through",
    // verticalAlign: "bottom",
  },
  discountPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#16aef3",
  },
});

export default CourseCard;
