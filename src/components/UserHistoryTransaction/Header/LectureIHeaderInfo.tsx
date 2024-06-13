import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";

const LectureIHeaderInfo = () => {
  return (
    <View style={styles.lectureContainer}>
      <Image
        style={styles.avatar}
        source={require("@assets/thumb/avatar.png")}
      />
      <Text style={styles.lectureTitle}>{"Giảng viên Unicourse"} </Text>
    </View>
  );
};

export default LectureIHeaderInfo;

const styles = StyleSheet.create({
  lectureContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  avatar: {
    width: 35,
    height: 40,
    resizeMode: "contain",
  },
  lectureTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#8D8A8A",
  },
});
