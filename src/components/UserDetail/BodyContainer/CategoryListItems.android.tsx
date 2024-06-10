import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import ItemSeparatorGeneratorView from "../Common/ItemSeparatorGeneratorView.android";
import CategoryItem from "./CategoryItems.android";
import { DataNavigation } from "../../../types";

const CategoryListItems = ({
  dataNavigation,
}: {
  dataNavigation: DataNavigation[];
}) => {
  return (
    <View style={{ padding: 7 }}>
      <FlatList
        data={dataNavigation}
        scrollEnabled={true}
        ItemSeparatorComponent={() => <ItemSeparatorGeneratorView />}
        renderItem={({ item }: ListRenderItemInfo<DataNavigation>) => {
          return <CategoryItem item={item} />;
        }}
      />
    </View>
  );
};

export default CategoryListItems;

const styles = StyleSheet.create({
  categoryItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
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
