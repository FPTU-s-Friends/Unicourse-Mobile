import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BodyContainer from "../../components/UserDetail/BodyContainer/BodyBlock.andoird";
import LinearGradientWrapper from "../../components/UserDetail/Common/LinearGradientWrapper.android";
import HeaderInfo from "../../components/UserDetail/HeaderContainer/HeaderInfo.android";
import { useGetUserByIdQuery } from "../../stores/slices/apiSlice";
import Spinner from "react-native-loading-spinner-overlay";
import {
  DataNavigation,
  IUserDetailProps,
  ProgressRenderingProps,
  UserInfoTypes,
} from "../../types";
import { RootContext } from "../../context/providers/AppProvider";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { nameScreen } from "../../constants/nameScreen";
import { FetchBaseQueryError, skipToken } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type FetchingQueryError = FetchBaseQueryError | SerializedError | undefined;
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
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { state } = React.useContext(RootContext);
  const { isAuth, user, accessToken } = state.auth;

  React.useEffect(() => {
    if (![isAuth, user, accessToken].every(Boolean))
      navigation.navigate(nameScreen.AUTH);
  }, [isAuth, user, accessToken]);
  const {
    data: userRes = {},
    isError,
    isFetching,
    isSuccess,
    error,
  } = useGetUserByIdQuery({ id: user._id, accessToken } || skipToken);

  console.log(isAuth, user, accessToken);
  const userExtract = React.useMemo(() => {
    const userExtract = userRes.data as IUserDetailProps;
    return {
      _id: userExtract?._id,
      profileName: userExtract?.profileName,
      fullName: userExtract?.fullName,
      profile_image: userExtract?.profile_image,
      email: userExtract?.email,
      role: userExtract?.role,
      quiz_interest: userExtract?.quiz_interest,
      wish_list: userExtract?.wish_list,
      enrollCourses: userExtract?.enrollCourses,
    };
  }, [userRes]);

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
          {/* Header body content view */}
          <HeaderInfo />
          {/* Body content view */}
          <View style={styles.bodyWrapper}>
            {/* Body container */}
            <BodyContainer
              dataNavigation={dataNavigation}
              progressRenderList={data}
              userData={userExtract}
            />
          </View>
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
