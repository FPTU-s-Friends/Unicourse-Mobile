import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ProgressRenderingProps } from "../../../types/userDetail.types";

const UserLearningProgress = ({
  progressRendered,
}: {
  progressRendered: Array<ProgressRenderingProps>;
}) => {
  return (
    <View style={styles.userProgressInfo}>
      <FlatList
        horizontal
        scrollEnabled={false}
        data={progressRendered}
        renderItem={({ item }: ListRenderItemInfo<ProgressRenderingProps>) => {
          return (
            <View style={styles.itemBlockRendered}>
              <Image
                source={item.icon as any}
                resizeMode="center"
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.itemTitleRendered}>{item.title}</Text>
              <Text style={styles.itemDescriptionRendered}>
                {item.description}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default UserLearningProgress;

const styles = StyleSheet.create({
  userProgressInfo: {
    backgroundColor: "#ebecf0",
    marginTop: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  itemBlockRendered: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 14,
  },
  itemTitleRendered: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 10,
    color: "#898686",
  },
  itemDescriptionRendered: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
  },
});
