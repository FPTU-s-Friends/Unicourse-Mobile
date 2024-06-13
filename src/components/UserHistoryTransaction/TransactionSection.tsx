import { ITransactionHistory } from "@/screens/UserTransactionHistoryScreen";
import React from "react";
import { StyleSheet, View } from "react-native";
import ItemCheckoutListContainer from "./Body/ItemCheckoutListContainer";

const TransactionSection = ({ item }: { item: ITransactionHistory }) => {
  console.log("Item checkout", item.item_checkout.slice(0, 1));
  return (
    <View style={styles.transactionBoxWrapper}>
      <ItemCheckoutListContainer item_checkout={item.item_checkout} />
      <View style={{ height: 1, backgroundColor: "#EDEDED" }}></View>
      {/* <View style={styles.row}>
        <View style={styles.summaryContainer}>
          <Text style={styles.datePurchase}>
            {moment(item.transaction_date).format("MMM Do YY")}
          </Text>
          <Text style={styles.purchasePriceTitle}>Tổng giá</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.courseTitle}>{item.total_courses} Khóa học </Text>
          <Text style={styles.totalPricePurchase}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "VND",
            }).format(item.total_purchase)}{" "}
            VND
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#DDE0FF",
          }}
          onPress={() => setChangeExpendStatus(item.id) as any}
        >
          <Text
            style={{
              color: "#4284F4",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            {expanded ? "Thu gọn" : "Xem chi tiết"}
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default TransactionSection;

const styles = StyleSheet.create({
  transactionBoxWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    rowGap: 10,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  purchasePriceTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#8D8A8A",
  },
  courseTitle: {
    fontSize: 15,
    fontVariant: ["tabular-nums"],
    fontWeight: "700",
  },
  totalPricePurchase: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4284F4",
  },

  datePurchase: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#8D8A8A",
  },
});
