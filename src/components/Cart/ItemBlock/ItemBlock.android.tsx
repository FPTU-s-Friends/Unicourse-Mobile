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

const datas = [
  {
    id: "1",
    name: "Đinh Gia Bảo",
    avatarImage: "../../CourseDetails/img/ganyu.jpg",
    items: [
      {
        image: require("../image/creeper_head.png"),
        title: "Làm chủ JavaScript trong phát triển Website - ReactJS",
        oldprice: "$15.00",
        newprice: "$10.00",
        ischecked: true,
      },
      {
        image: require("../image/spinner.png"),
        title: "Làm chủ JavaScript trong phát triển Website - ReactJS",
        oldprice: "$15.00",
        newprice: "$10.00",
      },
      {
        image: require("../image/book.png"),
        title: "Làm chủ JavaScript trong phát triển Website - ReactJS",
        oldprice: "$17.50",
        newprice: "$10.00",
      },
    ],
  },
  {
    id: "2",
    name: "Nguyễn Thành Đạt OCD",
    avatarImage: "../../CourseDetails/image/ganyu.jpg",
    items: [
      {
        image: require("../image/creeper_head.png"),
        title: "Làm chủ JavaScript trong phát triển Website - ReactJS",
        oldprice: "$15.00",
        newprice: "$10.00",
        ischecked: true,
      },
      {
        image: require("../image/spinner.png"),
        title: "Làm chủ JavaScript trong phát triển Website - ReactJS",
        oldprice: "$15.00",
        newprice: "$10.00",
      },
    ],
  },
];

interface itemInterface {
  title: String;
  image: String;
  oldprice: String;
  newprice: String;
}

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
    marginBottom: 10,
  },
  bottomHalfContainerImg: {
    overflow: "hidden",
    resizeMode: "contain",
    width: 60,
    height: 60,
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
    <SectionHeader name={data.name} />
    <Items items={data.items} />
  </View>
);

const Items = ({ items }: { items: itemInterface[] }) => (
  <View style={{ marginTop: 15 }}>
    {items.map(
      (
        item,
        index // Use map directly on the passed items
      ) => (
        <View style={styles.bottomHalfContainer} key={index}>
          <CheckBox />
          <Image source={item.image} style={styles.bottomHalfContainerImg} />
          <View style={styles.information}>
            <Text style={styles.informationText}>{item.title}</Text>

            <View style={styles.pricePlace}>
              <Text style={styles.realPrice}>{item.newprice}</Text>
            </View>
          </View>
        </View>
      )
    )}
  </View>
);

const renderBlock = ({ item }: any) => <Block data={item} />;

const ItemBlock = () => {
  const [Token, setToken] = useState({});
  console.log("🚀 ~ ItemBlock ~ Token:", Token);

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const userData = await AsyncStorage.getItem("@access_token");
      if (userData !== null) {
        setToken(userData);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const verifyAccount = async () => {
    try {
      const url = `https://unicourse-api-production.up.railway.app/api/cart/retrieve-user-cart`;
      const result = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
      });
      console.log(result);
      return result;
    } catch (err: any) {
      console.log(err);
    }
  };
  verifyAccount();
  return (
    <View style={styles.container}>
      <FlatList
        data={datas}
        renderItem={renderBlock}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ItemBlock;
