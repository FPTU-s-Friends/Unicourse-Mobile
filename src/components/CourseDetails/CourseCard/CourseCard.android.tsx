import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { fontSize, textColor, textFont } from "../../../constants";
import { MaterialIcons } from "@expo/vector-icons";

const CourseCard = ({
  title,
  fixPrice,
  enrollmentCount
}: {
  title: string;
  fixPrice: number;
  enrollmentCount: number
}) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle]}>{title}</Text>
      <View style={styles.stars}>
        {Array.from({ length: 4 }).map((_, index) => (
          <MaterialIcons
            key={index}
            name="star"
            size={18}
            style={styles.starselected}
          />
        ))}
        <MaterialIcons
          name="star-border"
          size={18}
          style={styles.starselected}
        />
        <Text style={styles.reviewerStatistic}>
          10 Đánh giá | {enrollmentCount} Học viên
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
    fontSize: textFont.h1,
    fontWeight: "500",
  },
  container: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
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
  },
  discountPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: textColor.titleTextColorGray500,
  },
});

export default CourseCard;
