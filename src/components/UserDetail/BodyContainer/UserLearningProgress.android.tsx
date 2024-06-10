import React from "react";
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ProgressRenderingProps } from "../../../types";

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
                style={{ width: 25, height: 25 }}
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
    marginTop: 15,
    width: "100%",
    height: "20%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  itemBlockRendered: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  itemTitleRendered: {
    fontSize: 17,
    fontWeight: "400",
    marginVertical: 10,
    color: "#898686",
  },
  itemDescriptionRendered: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
});
