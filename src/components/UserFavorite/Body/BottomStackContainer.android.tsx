import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";
import { IUserFavoriteList } from "../../../screens/UserFavoriteScreen";

const BottomStackContainer = ({ item }: { item: IUserFavoriteList }) => {
  const price = item.amount;
  return (
    <View
      style={{
        height: "40%",
      }}
    >
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: item.lectureImage as string,
          }}
          style={styles.avatar}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: "#000000",
          }}
        >
          {item.lectureName}
        </Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.price}>{item.amount === 0 && "Free"}</Text>
      </View>
    </View>
  );
};

export default BottomStackContainer;

const styles = StyleSheet.create({
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 5,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#15ADF3",
  },
  oldPrice: {
    fontSize: 12,
    marginLeft: 5,
    color: "#FF0000",
    textDecorationLine: "line-through",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
