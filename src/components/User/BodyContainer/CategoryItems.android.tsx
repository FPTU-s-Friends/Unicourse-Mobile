import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DataNavigation } from "../../../types/userDetail.types";
import CustomIconButton from "../Button/CustomIconButton.android";
import LearningProgressCurrentList from "./LearningProgressCurrentList.android";

const CategoryItem = ({ item }: { item: DataNavigation }) => {
  return (
    <>
      <View style={styles.categoryItemContainer}>
        <View style={styles.categoryItemWrapper}>
          <Image
            source={item.icon as any}
            resizeMode="center"
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.categoryTitle}>{item.title}</Text>
        </View>
        <CustomIconButton buttonName="chevron-right" />
      </View>
      {item.object && (
        <LearningProgressCurrentList progressListItem={item.object} />
      )}
    </>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  categoryItemWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 17,
    fontWeight: "400",
    marginHorizontal: 10,
  },
});
