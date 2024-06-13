import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { IItemCheckout } from "@/screens/UserTransactionHistoryScreen";
import LectureIHeaderInfo from "../Header/LectureIHeaderInfo";
import { Image } from "react-native-elements";

const ItemCheckoutListContainer = ({
  item_checkout,
}: {
  item_checkout: IItemCheckout[];
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const setChangeExpendStatus = (id: string) => {
    setExpanded(!expanded);
  };
  return (
    <FlatList
      data={expanded ? item_checkout : item_checkout.slice(0, 1)}
      keyExtractor={(item) => item._id}
      renderItem={({ item }: ListRenderItemInfo<IItemCheckout>) => {
        return (
          <View style={styles.row}>
            <LectureIHeaderInfo />
            <View style={styles.courseContainer}>
              <Image
                style={styles.courseThumb}
                source={{
                  uri: item.thumbnail,
                }}
              />
              <View style={styles.courseInfoWrapper}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  {item.title}
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={styles.purchasePrice}>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.amount)}{" "}
                    VND
                  </Text>
                  <Text style={styles.oldPrice}>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      item.amount * Math.floor(Math.random() * 5) + 1
                    )}{" "}
                    VND
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    ></FlatList>
  );
};

export default ItemCheckoutListContainer;

const styles = StyleSheet.create({
  courseContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    flexWrap: "nowrap",
  },
  courseInfoWrapper: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    gap: 10,
  },
  courseThumb: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  oldPrice: {
    fontSize: 15,
    textDecorationLine: "line-through",
    color: "#8D8A8A",
  },
  purchasePrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4284F4",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    rowGap: 10,
  },
});
