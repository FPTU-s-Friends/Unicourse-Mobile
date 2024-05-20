import React from "react";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { textColor, textFont } from "../../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";

const CourseDescription = () => {
  return (
    <View style={styles.container}>
      {/* Mục thông tin khóa học và thành viên */}
      <View style={styles.selectionBar}>
        <Text style={[styles.textStyle, styles.activeTabText]}>Chi tiết</Text>
        <Text style={styles.textStyle}>Lộ trình</Text>
        <Text style={styles.textStyle}>Đánh giá</Text>
      </View>

      <View style={styles.informationCardContainer}>
        {/* Mục thanh thông tin người dùng */}
        <View style={styles.informationBarContainer}>
          <Avatar rounded source={require("../img/ganyu.jpg")} />
          <View style={styles.informationBarSubColumn}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Trung Kien Nguyen
            </Text>
            <View style={styles.stars}>
              <MaterialIcons
                name="star"
                size={16}
                style={styles.starselected}
              />
              <MaterialIcons
                name="star"
                size={16}
                style={styles.starselected}
              />
              <MaterialIcons
                name="star"
                size={16}
                style={styles.starselected}
              />
              <MaterialIcons
                name="star"
                size={16}
                style={styles.starselected}
              />
              <MaterialIcons
                name="star-border"
                size={16}
                style={styles.starselected}
              />
              <Text style={styles.reviewerStatistic}>12 khoá học</Text>
            </View>
          </View>
          <Pressable style={styles.informationBarButton}>
            <Text style={{ color: "white" }}>Xem thông tin</Text>
          </Pressable>
        </View>

        <View style={styles.descriptionBox}>
          <Text style={{ fontSize: 16 }}>
            "Thiết kế không chỉ là trông nó như thế nào và cảm thấy như thế nào.
            Thiết kế là cách nó hoạt động"
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
  container: {
    marginHorizontal: 15,
    // backgroundColor: "red",
  },
  selectionBar: {
    flexDirection: "row",
    // columnGap: 25,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  activeTabText: {
    borderBottomWidth: 5,
    borderBottomColor: "#16aef3",
    borderRadius: 6,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  starselected: {
    color: "#ffb300",
  },
  reviewerStatistic: {
    marginLeft: 10,
    opacity: 0.5,
  },
  informationBarContainer: {
    marginBottom: 15,
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
  },
  informationBarSubColumn: {
    marginRight: 8,
    rowGap: 2,
  },
  informationBarButton: {
    padding: 8,
    // flex: 1,
    // textAlign: "center",
    overflow: "hidden",
    backgroundColor: "#4284f4",
    borderRadius: 10,
    flexShrink: 1,
  },
  descriptionBox: {
    backgroundColor: "#f7f8fc",
    padding: 10,
    borderRadius: 10,
  },
  informationCardContainer: {
    backgroundColor: "white",
    padding: 15,
  },
});

export default CourseDescription;
