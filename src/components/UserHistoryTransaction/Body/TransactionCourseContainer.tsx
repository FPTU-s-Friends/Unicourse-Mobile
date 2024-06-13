import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TransactionCourseContainer = ({ item }: { item: any }) => {
  return (
    <View style={styles.courseInfoWrapper}>
      <Text style={{ fontWeight: "bold", fontSize: 14 }}>
        {item.course_title}
      </Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text style={styles.purchasePrice}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "VND",
          }).format(item.price)}{" "}
          VND
        </Text>
        <Text style={styles.oldPrice}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "VND",
          }).format(item.oldPrice)}{" "}
          VND
        </Text>
      </View>
    </View>
  );
};

export default TransactionCourseContainer;

const styles = StyleSheet.create({
  oldPrice: {
    fontSize: 15,
    textDecorationLine: "line-through",
    color: "#8D8A8A",
  },
  purchasePrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4284F4",
  },

  datePurchase: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#8D8A8A",
  },
  courseInfoWrapper: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    gap: 10,
  },
});
