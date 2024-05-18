import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { textColor } from "../../../constants";
import { backgroundColor } from "../../../constants";

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
      <View></View>
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
});
export default Category;
