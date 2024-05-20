import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarBlock from "../../components/User/BodyContainer/AvatarBlock.android";
import BodyContainer from "../../components/User/BodyContainer/BodyBlock.andoird";
import LogoutButton from "../../components/User/Button/LogoutButton.android";
import LinearGradientWrapper from "../../components/User/Common/LinearGradientWrapper.android";
import HeaderInfo from "../../components/User/HeaderContainer/HeaderInfo.android";
import {
  DataNavigation,
  ProgressRenderingProps,
  UserInfoTypes,
} from "../../types/userDetail.types";

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
    title: "Yêu thích (12)",
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

const userData = {
  name: "Trần Quang Minh",
  avatar: require("../../assets/thumb/avatar.png"),
} as UserInfoTypes;

const UserDetailScreen = () => {
  return (
    <LinearGradientWrapper>
      <SafeAreaView
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
        }}
      >
        {/* Header body content view */}
        <HeaderInfo />

        {/* Body content view */}
        <View style={styles.bodyWrapper}>
          {/* Avatar block */}

          {/* Body container */}
          <BodyContainer
            dataNavigation={dataNavigation}
            progressRenderList={data}
            userData={userData}
          />

          {/* Logout button */}
        </View>
      </SafeAreaView>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({
  bodyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    margin: "auto",
  },
});

export default UserDetailScreen;
