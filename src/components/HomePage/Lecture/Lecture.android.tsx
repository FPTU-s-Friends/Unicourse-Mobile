import { ScrollView, StyleSheet, Text, View } from "react-native";
import LectureCard from "./component/LectureCard/LectureCard.ios";
import { textColor } from "../../../constants";

const data = [
  {
    _id: 1,
    name: "Giáo làng",
    avatar:
      "https://banner2.cleanpng.com/20180424/jtw/kisspng-teacher-student-college-school-education-avatars-5adfcd4daf5304.1073562215246165257181.jpg",
  },
  {
    _id: 2,
    name: "Thầy Trí",
    avatar:
      "https://banner2.cleanpng.com/20180424/jtw/kisspng-teacher-student-college-school-education-avatars-5adfcd4daf5304.1073562215246165257181.jpg",
  },
  {
    _id: 3,
    name: "Thầy Sang",
    avatar:
      "https://banner2.cleanpng.com/20180424/jtw/kisspng-teacher-student-college-school-education-avatars-5adfcd4daf5304.1073562215246165257181.jpg",
  },
  {
    _id: 4,
    name: "Thầy Phương",
    avatar:
      "https://banner2.cleanpng.com/20180424/jtw/kisspng-teacher-student-college-school-education-avatars-5adfcd4daf5304.1073562215246165257181.jpg",
  },
];
const Lecture = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndBtnMore}>
        <Text style={styles.title}>Giáo viên nổi bật</Text>
      </View>
      <ScrollView
        style={styles.lecture}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data &&
          data.map((item: any, index: number) => {
            return (
              <LectureCard
                key={index}
                _id={item._id}
                name={item.name}
                avatar={item.avatar}
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
    width: "100%",
    marginTop: "5%",
    marginBottom: "5%",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  lecture: {
    marginTop: "3%",
  },
});
export default Lecture;
