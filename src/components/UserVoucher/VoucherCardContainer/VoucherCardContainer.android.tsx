import { IVoucher } from "@/screens/UserVoucher";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native-elements";

const VoucherCardContainer = ({ item }: { item: IVoucher }) => {
  const imageThumb = require("../../../assets/thumb/bg_promotion.png");
  const imageVoucher = require("../../../assets/thumb/voucher.png");

  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftCardWrapper}>
        <ImageBackground
          source={imageThumb as any}
          style={styles.leftCardImageBackground}
        >
          <Image source={imageVoucher as any} style={styles.voucherThumb} />
          {/* <Text style={styles.discountType}>{item.type}</Text> */}
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Text style={styles.discountCode}>{item.code}</Text>
        <View style={styles.discountTextWrapper}>
          <Text style={styles.discountText}>
            Giảm giá{" "}
            {item.type === "percentage"
              ? item.discount_amount + "%"
              : item.discount_amount}
          </Text>
        </View>
        <Text>Giới hạn: {item.remaining_uses} lần sử dụng</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons name="copy-outline" size={25} color={"#16AEF4"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoucherCardContainer;

const styles = StyleSheet.create({
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
  containerWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#ECECEC ",
  },
  voucherThumb: {
    width: 50,
    height: 50,
    resizeMode: "contain",
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
});
