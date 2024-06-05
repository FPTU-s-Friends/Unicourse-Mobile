import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppBarHeader from "../../components/UserFavorite/AppBar/AppBarHeader";
import BottomStackContainer from "../../components/UserFavorite/Body/BottomStackContainer";
import TopStackContainer from "../../components/UserFavorite/Body/TopStackContainer";
import { ListRenderFavoriteProps } from "../../types/userDetail.types";

const data = [
  {
    id: "1",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4.5,
    user: "Ronald Richards",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/txtcraft.png"),
  },
  {
    id: "2",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 5,
    user: "Darrell Steward",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/remark.png"),
  },
  {
    id: "3",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4,
    user: "Jane Cooper",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/pill.png"),
  },
  {
    id: "4",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4.5,
    user: "Leslie Alexander",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/remark.png"),
  },
  {
    id: "5",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4,
    user: "Jane Cooper",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/txtcraft.png"),
  },
  {
    id: "6",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4.5,
    user_url: require("../../assets/thumb/avatar.png"),
    user: "Leslie Alexander",
    favorite_url: require("../../assets/thumb/conis.png"),
  },
  // Add more items here
];

const UserFavoriteScreen = () => {
  const onBackPress = () => {
    console.log("Back");
  };

  const onMagnifyPress = () => {
    console.log("Magnify");
  };
  return (
    <View style={styles.container}>
      <AppBarHeader
        onBackPress={onBackPress}
        onMagnifyPress={onMagnifyPress}
        title="Yêu thích"
      />
      <View
        style={{
          flex: 1,
          padding: 5,
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }: { item: ListRenderFavoriteProps }) => {
            return (
              <View style={styles.cardContainer}>
                <TopStackContainer item={item} />
                <BottomStackContainer item={item} />
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

export default UserFavoriteScreen;

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "aquamarine",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: "absolute",
    right: 16,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#E0E7FF",
  },
  cardContainer: {
    width: 180,
    height: 290,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffffffa8",
  },
});
