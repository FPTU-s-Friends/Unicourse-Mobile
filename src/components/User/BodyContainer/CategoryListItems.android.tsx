import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { DataNavigation } from "../../../types/userDetail.types";
import ItemSeparatorGeneratorView from "../Common/ItemSeparatorGeneratorView.android";
import CategoryItem from "./CategoryItems.android";

const CategoryListItems = ({
  dataNavigation,
}: {
  dataNavigation: DataNavigation[];
}) => {
  return (
    <View style={{ marginTop: 10, padding: 10 }}>
      <FlatList
        data={dataNavigation}
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
