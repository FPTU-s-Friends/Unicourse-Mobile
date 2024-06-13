import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { Text } from "react-native-paper";
import AppBarHeader from "@components/UserFavorite/AppBar/AppBarHeader.android";
import { useGetVouchersQuery } from "@stores/slices/voucherSlice";
import { UserStackScreenProps } from "@/types";
import VoucherContainer from "@/components/UserVoucher/BodyContainer/VoucherContainer.android";

export interface IVoucher {
  _id: string;
  code: string;
  discount_amount: number;
  type: string;
  remaining_uses: number;
}

const UserPromotions = () => {
  const navigation =
    useNavigation<UserStackScreenProps<"UserPromotionScreen">["navigation"]>();
  const route =
    useRoute<UserStackScreenProps<"UserPromotionScreen">["route"]>();
  const { accessToken } = route.params;
  const {
    data: promotionList = [] as IVoucher[],
    isError,
    isFetching,
    isSuccess,
    error,
  } = useGetVouchersQuery({
    accessToken,
  });

  const section_obj = React.useMemo(
    () =>
      promotionList
        ? [
            {
              title: "Phiếu đặc biệt",
              data: promotionList.slice(0, 3),
            },
            { title: "Phiếu của bạn", data: promotionList.slice(0, 3) },
          ]
        : [],
    [promotionList]
  );

  const onBackPress = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  const onMagnifyPress = () => {
    console.log("Magnify");
  };

  let content;

  if (isFetching) {
    content = (
      <Spinner
        visible={isFetching}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
    );
  } else if (isError) {
    content = <Text>{error.toString()}</Text>;
  } else if (isSuccess) {
    content = (
      <>
        <AppBarHeader
          onBackPress={onBackPress}
          onMagnifyPress={onMagnifyPress}
          title="Phiếu giảm giá"
        />
        <VoucherContainer section_obj={section_obj} />
      </>
    );
  }

  return <View style={styles.container}>{content}</View>;
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

  container: {
    flex: 1,
    height: "100%",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
