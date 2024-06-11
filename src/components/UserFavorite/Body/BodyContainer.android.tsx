import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopStackContainer from "./TopStackContainer.android";
import BottomStackContainer from "./BottomStackContainer.android";
import { IUserFavoriteList } from "../../../screens/UserFavoriteScreen";

const BodyContainer = ({ data }: { data: IUserFavoriteList[] }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 5,
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }: { item: IUserFavoriteList }) => {
          return (
            <View style={styles.cardContainer}>
              <TopStackContainer item={item} />
              <BottomStackContainer item={item} />
            </View>
          );
        }}
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default BodyContainer;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
  cardContainer: {
    width: 180,
    height: 320,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffffffa8",
  },
});
