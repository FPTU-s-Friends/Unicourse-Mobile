import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DataNavigation,
  ProgressRenderingProps,
  UserInfoTypes,
} from "../../../types/userDetail.types";
import UserLearningProgress from "./UserLearningProgress.android";
import CategoryListItems from "./CategoryListItems.android";
import AvatarBlock from "./AvatarBlock.android";
import LogoutButton from "../Button/LogoutButton.android";

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
      <AvatarBlock userData={userData} />
      <Text style={styles.authorName}>{userData.name}</Text>
      {/* User progress Info */}
      <UserLearningProgress progressRendered={progressRenderList} />
      <CategoryListItems dataNavigation={dataNavigation} />
      <LogoutButton />
    </View>
  );
};

export default BodyContainer;

const styles = StyleSheet.create({
  authorName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },
  bodyContainer: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    width: "80%",
    height: "90%",
    borderRadius: 15,
  },
});
