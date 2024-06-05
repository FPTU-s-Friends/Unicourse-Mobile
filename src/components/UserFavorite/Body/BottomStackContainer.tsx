import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListRenderFavoriteProps } from "../../../types/userDetail.types";
import { Image } from "react-native-elements";

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
      <Text
        style={{
          fontSize: 17,
          fontWeight: "bold",
          marginVertical: 5,
        }}
      >
        {item.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#15ADF3",
          }}
        >
          {item.price}
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginLeft: 5,
            color: "#FF0000",
            textDecorationLine: "line-through",
          }}
        >
          {item.oldPrice}
        </Text>
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
});
