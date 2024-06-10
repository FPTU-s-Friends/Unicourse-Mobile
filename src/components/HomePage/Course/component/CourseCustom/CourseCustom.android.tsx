import { Image, Pressable, StyleSheet, Text, View } from "react-native";

/*
Import Type
*/
import { CourseType } from "../../../../../types/common.types";
import { backgroundColor, textColor } from "../../../../../constants";

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
      <Image
        style={styles.img}
        resizeMode={"cover"}
        source={{ uri: thumbnail }}
      />

      <View style={styles.course_info}>
        <Pressable onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
        </Pressable>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "3%",
    paddingLeft: "5%",
    marginRight: "5%",
    alignSelf: "flex-start",
  },
  img: {
    position: "relative",
    width: 260,
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: textColor.titleTextColorBlack,
  },
  course_info: {
    position: "absolute",
    bottom: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "17%",
    width: "100%",
    gap: 2,
    padding: "5%",
    backgroundColor: backgroundColor.mainColor_3,
    opacity: 0.7,
    borderRadius: 5,
  },

  price: {
    fontSize: 14,
    color: textColor.titleTextColorBlack,
  },
});

export default CourseCustom;
