import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/*
Import Constants
*/
import { textColor } from "../../../constants";
import { backgroundColor } from "../../../constants";

/*
Import Icon
*/
import { Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const item = [
  {
    _id: 1,
    semmester: 1,
  },
  {
    _id: 2,
    semmester: 2,
  },
  {
    _id: 3,
    semmester: 3,
  },
  {
    _id: 4,
    semmester: 4,
  },
  {
    _id: 5,
    semmester: 5,
  },
  {
    _id: 6,
    semmester: 6,
  },
  {
    _id: 7,
    semmester: 7,
  },
];

const Category = () => {
  return (
    <View style={styles.container}>
      {/* Title & More */}
      <View style={styles.titleAndBtnMore}>
        <Text style={styles.title}>Danh mục</Text>
        <TouchableOpacity style={styles.btnMore}>
          <Text style={styles.textBtnMore}>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      {/* Semester */}
      <ScrollView
        style={styles.list_semmester}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {item &&
          item.map((item: any, index: number) => {
            return (
              <View key={index} style={styles.semmester_container}>
                <View style={styles.semmester_icon}>
                  <Octicons name="number" size={24} color="black" />
                </View>
                <Text style={styles.semmester_text}>Kỳ {item.semmester}</Text>
              </View>
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
  btnMore: {
    backgroundColor: backgroundColor.mainColor_1,
    padding: "2%",
    borderRadius: 10,
  },
  textBtnMore: {
    fontWeight: "500",
  },
  list_semmester: {
    width: "100%",
    marginTop: "3%",
    paddingLeft: "5%",
  },
  semmester_container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    marginRight: "5%",
  },
  semmester_icon: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: backgroundColor.mainColor_3,
    borderRadius: 100,
  },
  semmester_text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Category;
