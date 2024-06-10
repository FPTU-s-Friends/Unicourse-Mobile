import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";
import { ListRenderFavoriteProps } from "../../../types/userDetail.types";

const BottomStackContainer = ({ item }: { item: ListRenderFavoriteProps }) => {
  return (
    <View
      style={{
        height: "40%",
      }}
    >
      <View style={styles.headerContainer}>
        <Image source={item.user_url} style={styles.avatar} />
        <Text>{item.user}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.oldPrice}>{item.oldPrice}</Text>
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
