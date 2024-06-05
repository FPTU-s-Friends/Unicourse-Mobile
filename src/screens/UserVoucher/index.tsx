import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native-elements";
import { Text } from "react-native-paper";
import AppBarHeader from "../../components/UserFavorite/AppBar/AppBarHeader";

interface PromotionsData {
  id: string;
  coupon_code: string;
  discount: string;
  type: string;
  limit: number;
}

const data = [
  {
    id: "1",
    coupon_code: "BAEKBLAHLG",
    discount: "50%",
    type: "Thành viên mới",
    limit: 1,
  },
  {
    id: "2",
    coupon_code: "EITVHQEIHCW",
    discount: "50%",
    type: "Thành viên mới",
    limit: 1,
  },
  {
    id: "3",
    coupon_code: "BLFNLFBNALK",
    discount: "30%",
    type: "Mùa tựu trường",
    limit: 1,
  },
  {
    id: "4",
    coupon_code: "OJLKAAGKFH",
    discount: "30%",
    type: "Hoàn thành sớm",
    limit: 1,
  },
  {
    id: "5",
    coupon_code: "EQRKJBALCKK",
    discount: "10%",
    type: "Mùa tựu trường",
    limit: 1,
  },
] as PromotionsData[];

const section_obj = [
  {
    title: "Phiếu đặc biệt",
    data: data.slice(0, 3),
  },
  { title: "Phiếu của bạn", data: data.slice(3, 5) },
];

const UserPromotions = () => {
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
        title="Phiếu giảm giá"
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: "#ECECEC ",
        }}
      >
        <SectionList
          sections={section_obj}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }: { item: PromotionsData }) => {
            return (
              <View style={styles.cardContainer}>
                <View style={styles.leftCardWrapper}>
                  <ImageBackground
                    source={require("../../assets/thumb/bg_promotion.png")}
                    style={styles.leftCardImageBackground}
                  >
                    <Image
                      source={require("../../assets/thumb/voucher.png")}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: "contain",
                      }}
                    />
                    <Text style={styles.discountType}>{item.type}</Text>
                  </ImageBackground>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <Text style={styles.discountCode}>{item.coupon_code}</Text>
                  <View style={styles.discountTextWrapper}>
                    <Text style={styles.discountText}>
                      Giảm giá {item.discount}
                    </Text>
                  </View>
                  <Text>Giới hạn: {item.limit} lần sử dụng</Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Ionicons name="copy-outline" size={25} color={"#16AEF4"} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontSize: 17, color: "#242222", fontWeight: "700" }}>
              {title}
            </Text>
          )}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </View>
  );
};

export default UserPromotions;

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
  },
  cardContainer: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffffa8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountText: {
    fontSize: 15,
    color: "#ffffff",
    borderRadius: 10,
    fontWeight: "500",
  },
  discountTextWrapper: {
    backgroundColor: "#FF6A2B",
    width: "80%",
    padding: 7,
    borderRadius: 10,
  },
  discountCode: { fontSize: 17, color: "#242222", fontWeight: "700" },
  leftCardWrapper: {
    width: "35%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  leftCardImageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    gap: 10,
  },
  discountType: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 13,
  },
});
