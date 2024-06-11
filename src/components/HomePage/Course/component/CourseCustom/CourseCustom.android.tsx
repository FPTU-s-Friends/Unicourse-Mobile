import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

/*
Import Type
*/
import { CourseType } from "../../../../../types/common.types";
import { backgroundColor, textColor, textFont } from "../../../../../constants";

const CourseCustom: React.FC<CourseType> = ({
  _id,
  title,
  thumbnail,
  price,
  navigate,
}) => {
  const onPress = () => {
    navigate.navigate("CourseDetailStack", {
      screen: "CourseDetailScreen",
      params: { id: _id },
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <TouchableOpacity onPress={onPress}>
            <Image
              style={styles.img}
              resizeMode={"cover"}
              source={{ uri: thumbnail }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.course_info}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
          <Text style={styles.price}>
            <Text style={{ fontWeight: "500" }}>Giá khóa học: </Text>{price}</Text>
          <Text style={styles.price}>
            <Text style={{ fontWeight: "500" }}>Giảng viên: </Text>Thầy Uni Cóc</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: "1%",
    paddingLeft: "1%",
    marginRight: "2%",
    alignSelf: "flex-start",
  },
  cardContainer: {
    backgroundColor: backgroundColor.mainColor_1,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
    padding: 10,
  },
  imgContainer: {
    width: "100%",
    height: 150,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: textFont.title,
    fontWeight: "bold",
    color: textColor.titleTextColorBlack,
  },
  course_info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: 100,
    padding: "5%",
    opacity: 0.7
  },
  price: {
    fontSize: textFont.titleNormal,
    color: textColor.titleTextColorBlack,
  },
});

export default CourseCustom;
