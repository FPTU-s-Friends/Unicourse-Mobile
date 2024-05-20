import { StyleSheet, Text, View } from "react-native";
import CourseCustom from "./component/CourseCustom/CourseCustom";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { backgroundColor, textColor } from "../../../constants";

const data = [
  {
    _id: 1,
    thumbnail: "https://img-c.udemycdn.com/course/750x422/5363556_222c.jpg",
    title: "Khoá học PRF192",
    price: "199.000đ",
  },
  {
    _id: 2,
    thumbnail: "https://img-c.udemycdn.com/course/750x422/5363556_222c.jpg",
    title: "Khoá học PRF192",
    price: "199.000đ",
  },
];
const Course = () => {
  return (
    <View style={styles.container}>
      {/* Title & More */}
      <View style={styles.titleAndBtnMore}>
        <Text style={styles.title}>Khoá học nổi bật</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data &&
          data.map((item: any, index: number) => {
            return (
              <CourseCustom
                key={item._id}
                _id={item._id}
                title={item.title}
                thumbnail={item.thumbnail}
                price={item.price}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    marginTop: "5%",
  },
  titleAndBtnMore: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5%",
  },
  title: {
    color: textColor.titleTextColorBlack,
    fontSize: 14,
    fontWeight: "bold",
  },
  btnMore: {
    backgroundColor: backgroundColor.mainColor_1,
    padding: "2%",
    borderRadius: 10,
  },
  textBtnMore: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Course;
