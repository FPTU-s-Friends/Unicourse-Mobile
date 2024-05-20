import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DataNavigation,
  ProgressRenderingProps,
  UserInfoTypes,
} from "../../../types/userDetail.types";
import UserLearningProgress from "./UserLearningProgress.android";
import CategoryListItems from "./CategoryListItems.android";

const BodyContainer = ({
  userData,
  dataNavigation,
  progressRenderList,
}: {
  userData: UserInfoTypes;
  progressRenderList: ProgressRenderingProps[];
  dataNavigation: DataNavigation[];
}) => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.authorName}>{userData.name}</Text>
      {/* User progress Info */}
      <UserLearningProgress progressRendered={progressRenderList} />
      {/* Navigation block */}
      <CategoryListItems dataNavigation={dataNavigation} />
    </View>
  );
};

export default BodyContainer;

const styles = StyleSheet.create({
  authorName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },
  bodyContainer: {
    backgroundColor: "#ffffff",
    width: 355,
    height: 650,
    borderRadius: 15,
  },
});
