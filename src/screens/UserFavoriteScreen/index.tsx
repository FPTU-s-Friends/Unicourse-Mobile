import {
  CommonActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppBarHeader from "../../components/UserFavorite/AppBar/AppBarHeader.android";
import BodyContainer from "../../components/UserFavorite/Body/BodyContainer.android";
import { nameScreen } from "../../constants/nameScreen";
import { ListRenderFavoriteProps, UserStackScreenProps } from "../../types";
import { useGetWishlistCourseQuery } from "../../stores/slices/apiSlice";
import { skipToken } from "@reduxjs/toolkit/query";
import Spinner from "react-native-loading-spinner-overlay";
import { Text } from "react-native-elements";

export interface IUserFavoriteList {
  _id: string;
  title: string;
  titleDescription: string;
  subTitle: string;
  subTitleDescription: string;
  thumbnail: string;
  amount: number;
  type: string;
  lectureName: string;
  lectureImage: string;
}

export const items = [
  {
    id: "1",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4.5,
    user: "Ronald Richards",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/txtcraft.png"),
  },
  {
    id: "2",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 5,
    user: "Darrell Steward",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/remark.png"),
  },
  {
    id: "3",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4,
    user: "Jane Cooper",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/pill.png"),
  },
  {
    id: "4",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4.5,
    user: "Leslie Alexander",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/remark.png"),
  },
  {
    id: "5",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4,
    user: "Jane Cooper",
    user_url: require("../../assets/thumb/avatar.png"),
    favorite_url: require("../../assets/thumb/txtcraft.png"),
  },
  {
    id: "6",
    title: "MAD101 - Toán rời rạc",
    price: "99,000 vnd",
    oldPrice: "119,000 vnd",
    rating: 4.5,
    user_url: require("../../assets/thumb/avatar.png"),
    user: "Leslie Alexander",
    favorite_url: require("../../assets/thumb/conis.png"),
  },
  // Add more items here
] as ListRenderFavoriteProps[];

const UserFavoriteScreen = () => {
  const route = useRoute<UserStackScreenProps<"UserFavoriteScreen">["route"]>();
  const navigation =
    useNavigation<UserStackScreenProps<"UserDetailScreen">["navigation"]>();

  const { accessToken } = route.params;
  const {
    data: userFavoriteList = [] as IUserFavoriteList[],
    isError,
    isFetching,
    isSuccess,
    error,
  } = useGetWishlistCourseQuery({ accessToken } || skipToken);

  const userFavoriteExtract = React.useMemo(() => {
    return userFavoriteList.map((item: IUserFavoriteList) => {
      return {
        _id: item?._id,
        title: item?.title,
        titleDescription: item?.titleDescription,
        subTitle: item?.subTitle,
        subTitleDescription: item?.subTitleDescription,
        thumbnail: item?.thumbnail,
        amount: item?.amount,
        type: item?.type,
        lectureName: item?.lectureName,
        lectureImage: item?.lectureImage,
      };
    });
  }, [userFavoriteList]);

  const onBackPress = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  const onMagnifyPress = () => {
    console.log("Magnify");
  };

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
      <>
        <AppBarHeader
          onBackPress={onBackPress}
          onMagnifyPress={onMagnifyPress}
          title="Yêu thích"
        />
        <BodyContainer data={userFavoriteExtract} />
      </>
    );
  }

  return <View style={styles.container}>{content}</View>;
};

export default UserFavoriteScreen;

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
  cardContainer: {
    width: 180,
    height: 320,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffffffa8",
  },
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#E0E7FF",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
