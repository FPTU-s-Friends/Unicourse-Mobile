import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  FlatList,
  Pressable,
} from "react-native";
import { textColor, textFont } from "../../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, CheckBox } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { RootContext } from "../../../context/providers/AppProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderCart from "../Header/header.android";
import { useCartService } from "../../../core/services/cart.service";

const datas = [
  {
    id: "1",
    name: "Đinh Gia Bảo",
    avatarImage: "../../CourseDetails/img/ganyu.jpg",
    items: [
      {
        thumbnail: require("../image/creeper_head.png"),
        title: "Làm chủ JavaScript trong phát triển Website - ReactJS",
        amount: "$15.00",
        newprice: "$10.00",
        ischecked: true,
      },
      {
        thumbnail: require("../image/spinner.png"),
        title: "Làm chủ JavaScript trong phát triển Website - ReactJS",
        amount: "$15.00",
        newprice: "$10.00",
      },
      {
        thumbnail: require("../image/book.png"),
        title: "Làm chủ JavaScript trong phát triển Website - ReactJS",
        amount: "$17.50",
        newprice: "$10.00",
      },
    ],
  },
];

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 1,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 10,
  },
  headerText: {
    marginLeft: 10,
    opacity: 0.5,
    fontSize: 16,
    flexShrink: 1,
    width: 120,
  },
  headerButton: {
    padding: 8,
    overflow: "hidden",
    borderRadius: 10,
    flexShrink: 1,
    backgroundColor: "#dae9da",
  },
  headerIcon: {
    marginRight: 5,
    padding: 8,
    overflow: "hidden",
    borderRadius: 10,
    flexShrink: 1,
    backgroundColor: "#dde0ff",
  },
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  bottomHalfContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  bottomHalfContainerImg: {
    overflow: "hidden",
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
  information: {
    marginLeft: 15,
  },
  informationText: {
    width: 200,
    fontSize: 16,
  },
  pricePlace: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "baseline",
  },
  discountPrice: {
    fontSize: 13,
    opacity: 0.5,
    textDecorationLine: "line-through",
    // verticalAlign: "bottom",
  },
  realPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#16aef3",
  },
});

const SectionHeader = ({ name }: any) => (
  <View style={styles.headerContainer}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Avatar rounded source={require("../../CourseDetails/img/ganyu.jpg")} />
      <Text style={styles.headerText}>{name}</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Pressable style={styles.headerIcon}>
        <AntDesign name="edit" size={18} color="#16aef3" />
      </Pressable>

      <Pressable style={styles.headerButton}>
        <Text style={{ color: "#16aef3" }}>Chọn tất cả</Text>
      </Pressable>
    </View>
  </View>
);

const Block = ({ data }: any) => (
  <View style={styles.itemContainer}>
    <SectionHeader name={data.user_id.email} />
    <Items items={data.items} />
  </View>
);

const Items = ({ items }: { items: any }) => (
  <View style={{ marginTop: 15 }}>
    {items.map(
      (
        item,
        index // Use map directly on the passed items
      ) => (
        <View style={styles.bottomHalfContainer} key={index}>
          <CheckBox />
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.bottomHalfContainerImg}
          />
          <View style={styles.information}>
            <Text style={styles.informationText}>{item.title}</Text>

            <View style={styles.pricePlace}>
              <Text style={styles.realPrice}>
                {formatter.format(item.amount)}
              </Text>
            </View>
          </View>
        </View>
      )
    )}
  </View>
);

const renderBlock = ({ item }: any) => <Block data={item} />;

const ItemBlock = () => {
  const [cart, setCart] = useState(null);

  // API variables
  const { getCart } = useCartService();

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    try {
      const userData = await AsyncStorage.getItem("@access_token");
      if (userData) {
        const result = await getCart(userData);
        setCart(result.data);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar
              rounded
              source={require("../../CourseDetails/img/ganyu.jpg")}
            />
            <Text style={styles.headerText}>{cart?.user_id.email}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable style={styles.headerIcon}>
              <AntDesign name="edit" size={18} color="#16aef3" />
            </Pressable>

            <Pressable style={styles.headerButton}>
              <Text style={{ color: "#16aef3" }}>Chọn tất cả</Text>
            </Pressable>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          {cart?.items.map((item, key) => (
            <View style={styles.bottomHalfContainer} key={key}>
              <CheckBox />
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.bottomHalfContainerImg}
              />
              <View style={styles.information}>
                <Text style={styles.informationText}>{item.title}</Text>

                <View style={styles.pricePlace}>
                  <Text style={styles.realPrice}>
                    {formatter.format(item.amount)}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ItemBlock;
