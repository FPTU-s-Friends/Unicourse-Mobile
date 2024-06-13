import { useRoute } from "@react-navigation/native";
import { skipToken } from "@reduxjs/toolkit/query";
import React from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import { SafeAreaView } from "react-native-safe-area-context";
import BodyContainer from "../../components/UserDetail/BodyContainer/BodyBlock.android";
import LinearGradientWrapper from "../../components/UserDetail/Common/LinearGradientWrapper.android";
import HeaderInfo from "../../components/UserDetail/HeaderContainer/HeaderInfo.android";
import { useGetUserByIdQuery } from "../../stores/slices/apiSlice";
import {
  DataNavigation,
  IUserDetailProps,
  ProgressRenderingProps,
  UserStackScreenProps,
} from "../../types";

const data = [
  {
    icon: require("../../assets/thumb/Time.png"),
    title: "Tiến trình",
    description: "68 giờ",
  },
  {
    icon: require("../../assets/thumb/Trophy.png"),
    title: "Hoàn thành",
    description: "84%",
  },
  {
    icon: require("../../assets/thumb/Note.png"),
    title: "Khoá học",
    description: "5 courses",
  },
] as Array<ProgressRenderingProps>;

const dataNavigation = [
  {
    icon: require("../../assets/thumb/love.png"),
    title: "Yêu thích",
  },
  {
    icon: require("../../assets/thumb/recently.png"),
    title: "Xem gần nhất",
    object: [
      {
        title: "MAD201 - Toán rời rạc",
        thumb: require("../../assets/thumb/3dicons.png"),
        backgroundColor: "#F1DAC6",
      },
      {
        title: "UI-UX Cơ bản",
        thumb: require("../../assets/thumb/3dicons.png"),
        backgroundColor: "#D9F0FA",
      },
    ],
  },
  {
    icon: require("../../assets/thumb/voucher.png"),
    title: "Mã giảm giá",
  },
  {
    icon: require("../../assets/thumb/cart.png"),
    title: "Lịch sử giao dịch",
  },
] as Array<DataNavigation>;

const UserDetailScreen = () => {
  const route = useRoute<UserStackScreenProps<"UserDetailScreen">["route"]>();
  const [refreshing, setRefreshing] = React.useState(false);
  const { userId, accessToken } = route.params;
  const {
    data: userRes = {} as IUserDetailProps,
    isError,
    isFetching,
    isSuccess,
    error,
    refetch,
  } = useGetUserByIdQuery({ id: userId || "", accessToken } || skipToken);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  let content = null;

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
      <LinearGradientWrapper>
        <SafeAreaView style={styles.fullScreenView}>
          <ScrollView
            contentContainerStyle={styles.fullScreenView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {/* Header body content view */}
            <HeaderInfo />
            {/* Body content view */}
            <View style={styles.bodyWrapper}>
              {/* Body container */}
              <BodyContainer
                dataNavigation={dataNavigation}
                progressRenderList={data}
                userData={userRes}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradientWrapper>
    );
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
  fullScreenView: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  bodyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    margin: "auto",
  },
});

export default UserDetailScreen;
