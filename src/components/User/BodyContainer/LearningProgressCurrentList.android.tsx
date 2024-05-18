import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { ExtraInformation } from "../../../types/userDetail.types";
import LearningProgressStackItem from "../Button/LearningProgressStackItem.android";

const LearningProgressCurrentList = ({
  progressListItem,
}: {
  progressListItem: ExtraInformation[];
}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 10 }}
      horizontal
      data={progressListItem}
      renderItem={({ item }: ListRenderItemInfo<ExtraInformation>) => (
        <LearningProgressStackItem item={item} />
      )}
    />
  );
};

export default LearningProgressCurrentList;

const styles = StyleSheet.create({});
