import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import LearningProgressStackItem from "../Button/LearningProgressStackItem.android";
import { ExtraInformation } from "../../../types";

const LearningProgressCurrentList = ({
  progressListItem,
}: {
  progressListItem: ExtraInformation[];
}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 5 }}
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
