import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import StartRating from "../Icon/RatingIcon.android";
import { ListRenderFavoriteProps } from "../../../types";
import { IUserFavoriteList } from "../../../screens/UserFavoriteScreen";

const TopStackContainer = ({ item }: { item: IUserFavoriteList }) => {
  return (
    <View
      style={{
        height: "60%",
        marginBottom: 10,
      }}
    >
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.thumbnail as string,
        }}
        resizeMode="cover"
      />
      <StartRating style={styles.ratingIconStyle} rating={5} />
    </View>
  );
};

export default TopStackContainer;

const styles = StyleSheet.create({
  imageStyle: {
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ratingIconStyle: {
    position: "absolute",
    bottom: -15,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#ffffff",
    aspectRatio: 1.5,
    borderRadius: 7,
    padding: 3,
  },
});
