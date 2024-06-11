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
            <Text style={styles.infoText}>Xem thông tin</Text>
          </Pressable>
        </View>

        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
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
    fontSize: textFont.h3,
    fontWeight: "500",
    paddingBottom: 5,
  },
  container: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  selectionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  activeTabText: {
    borderBottomWidth: 2,
    borderBottomColor: "#16aef3",
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
    overflow: "hidden",
    backgroundColor: "#4284f4",
    borderRadius: 10,
    flexShrink: 1,
  },
  infoText: {
    color: "white",
    textAlign: "center",
    fontSize: textFont.titleNormal
  },
  descriptionBox: {
    backgroundColor: "#F7F8FC",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: textFont.h4,
    textAlign: "justify"
  },
  informationCardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
});

export default CourseDescription;
