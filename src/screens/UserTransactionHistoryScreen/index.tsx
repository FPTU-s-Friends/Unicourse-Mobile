import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import AppBarHeader from "../../components/UserFavorite/AppBar/AppBarHeader.android";
import TransactionSection from "../../components/UserHistoryTransaction/TransactionSection";
import { UserStackScreenProps } from "../../types";
import { useGetTransactionsQuery } from "@/stores/slices/transactionSlice";

export interface IUserTransaction {
  _id: string;
  email: string;
  fullName: string;
  profileName: string;
  profile_image: string;
}

export interface IItemCheckout {
  _id: string;
  title: string;
  titleDescription: string;
  subTitle: string;
  subTitleDescription: string;
  amount: number;
  thumbnail: string;
}

export interface ITransactionHistory {
  _id: string;
  userId: IUserTransaction;
  process_date: Date;
  item_checkout: IItemCheckout[];
  payment_method: string;
  total_old_amount: number;
  total_new_amount: number;
  status: string;
  transaction_code: string;
}

export interface TransactionDataDetails {
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

const UserTransactionHistory = () => {
  const route =
    useRoute<UserStackScreenProps<"UserHistoryTransactionScreen">["route"]>();
  const navigation =
    useNavigation<
      UserStackScreenProps<"UserHistoryTransactionScreen">["navigation"]
    >();

  const { accessToken } = route.params;
  const {
    data: transactionRes = [] as ITransactionHistory[],
    isError,
    isFetching,
    isSuccess,
    error,
  } = useGetTransactionsQuery({
    accessToken,
  });

  const onBackPress = () => {
    navigation.dispatch(CommonActions.goBack());
  };
  const onMagnifyPress = () => {
    console.log("Magnify");
  };

  console.log("TransactionRes===", transactionRes);

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
          data={transactionRes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }: ListRenderItemInfo<ITransactionHistory>) => {
            console.log("Item====", item);
            return <TransactionSection item={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default UserTransactionHistory;

const styles = StyleSheet.create({
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
});
