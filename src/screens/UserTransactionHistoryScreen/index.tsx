import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import AppBarHeader from "../../components/UserFavorite/AppBar/AppBarHeader";
import { Image, Text } from "react-native-elements";
import moment from "moment";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { nameScreen } from "../../constants/nameScreen";

interface TransactionDataDetails {
  id: string;
  thumb: any;
  course_title: string;
  price: number;
  oldPrice: number;
  lecture: {
    name: string;
    avatar: any;
  };
}

interface TransactionData {
  id: string;
  transaction_date: Date;
  total_courses: number;
  total_purchase: number;
  items: TransactionDataDetails[];
}

const data = [
  {
    id: "1",
    transaction_date: new Date("2024-12-03"),
    total_courses: 2,
    total_purchase: 99000,
    items: [
      {
        thumb: require("../../assets/thumb/remark.png"),
        id: "1",
        course_title:
          "Thiết kế và tạo mẫu với Figma: Từ người mới bắt đầu đến chuyên nghiệp",
        price: 99000,
        oldPrice: 119000,
        lecture: {
          name: "Trung Kiên Nguyễn",
          avatar: require("../../assets/thumb/avatar.png"),
        },
      },
      {
        thumb: require("../../assets/thumb/remark.png"),
        id: "2",
        course_title:
          "Thiết kế và tạo mẫu với Figma: Từ người mới bắt đầu đến chuyên nghiệp",
        price: 99000,
        oldPrice: 119000,
        lecture: {
          name: "Trần Quang Minh",
          avatar: require("../../assets/thumb/avatar.png"),
        },
      },
    ],
  },
  {
    id: "2",
    transaction_date: new Date("2024-12-04"),
    total_courses: 3,
    total_purchase: 99000,
    items: [
      {
        thumb: require("../../assets/thumb/remark.png"),
        id: "1",
        course_title:
          "Thiết kế và tạo mẫu với Figma: Từ người mới bắt đầu đến chuyên nghiệp",
        price: 99000,
        oldPrice: 119000,
        lecture: {
          name: "Trung Kiên Nguyễn",
          avatar: require("../../assets/thumb/avatar.png"),
        },
      },
      {
        thumb: require("../../assets/thumb/remark.png"),
        id: "2",
        course_title:
          "Thiết kế và tạo mẫu với Figma: Từ người mới bắt đầu đến chuyên nghiệp",
        price: 99000,
        oldPrice: 119000,
        lecture: {
          name: "Trần Quang Minh",
          avatar: require("../../assets/thumb/avatar.png"),
        },
      },
      {
        thumb: require("../../assets/thumb/remark.png"),
        id: "3",
        course_title:
          "Thiết kế và tạo mẫu với Figma: Từ người mới bắt đầu đến chuyên nghiệp",
        price: 99000,
        oldPrice: 119000,
        lecture: {
          name: "Nguyễn Thành Đạt",
          avatar: require("../../assets/thumb/avatar.png"),
        },
      },
    ],
  },
] as TransactionData[];

const UserTransactionHistory = () => {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const setChangeExpendStatus = (id: string) => {
    console.warn("ID", id);
    setExpanded(!expanded);
  };
  const onBackPress = () => {
    navigation.navigate(nameScreen.USER_DETAIL_SCREEN);
  };
  const onMagnifyPress = () => {
    console.log("Magnify");
  };
  return (
    <View style={styles.container}>
      <AppBarHeader
        onBackPress={onBackPress}
        onMagnifyPress={onMagnifyPress}
        title="Lịch sử giao dịch"
      />
      <View style={styles.bodyContainer}>
        <FlatList
          contentContainerStyle={{
            gap: 25,
          }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: ListRenderItemInfo<TransactionData>) => {
            return (
              <View style={styles.transactionBoxWrapper}>
                <FlatList
                  data={expanded ? item.items : item.items.slice(0, 1)}
                  keyExtractor={(item) => item.id}
                  renderItem={({
                    item,
                  }: ListRenderItemInfo<TransactionDataDetails>) => {
                    return (
                      <View style={styles.row}>
                        <View style={styles.lectureContainer}>
                          <Image
                            style={styles.avatar}
                            source={require("../../assets/thumb/avatar.png")}
                          />
                          <Text style={styles.lectureTitle}>
                            {item.lecture.name}{" "}
                          </Text>
                        </View>
                        <View style={styles.courseContainer}>
                          <Image
                            style={styles.courseThumb}
                            source={item.thumb}
                          />
                          <View style={styles.courseInfoWrapper}>
                            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                              {item.course_title}
                            </Text>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                              <Text style={styles.purchasePrice}>
                                {new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.price)}{" "}
                                VND
                              </Text>
                              <Text style={styles.oldPrice}>
                                {new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.oldPrice)}{" "}
                                VND
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View></View>
                      </View>
                    );
                  }}
                ></FlatList>
                <View style={{ height: 1, backgroundColor: "#EDEDED" }}></View>
                <View style={styles.row}>
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
                    <Text style={styles.courseTitle}>
                      {item.total_courses} Khóa học{" "}
                    </Text>
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
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default UserTransactionHistory;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    rowGap: 10,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#ece7e7",
  },
  datePurchase: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#8D8A8A",
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
  transactionBoxWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 10,
  },
  avatar: {
    width: 35,
    height: 40,
    resizeMode: "contain",
  },
  lectureTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#8D8A8A",
  },
  lectureContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  courseThumb: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
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
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
