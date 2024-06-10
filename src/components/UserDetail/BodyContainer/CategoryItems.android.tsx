import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DataNavigation } from "../../../types/userDetail.types";
import CustomIconButton from "../Button/CustomIconButton.android";
import LearningProgressCurrentList from "./LearningProgressCurrentList.android";
import { nameScreen } from "../../../constants/nameScreen";
export type SubStackParamList = {
  SubStackNestedScreen: undefined;
};

const CategoryItem = ({ item }: { item: DataNavigation }) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()!;
  const onPressReducer = (title: string) => {
    switch (title) {
      case "Yêu thích":
        return onFavoritePress();
      case "Xem gần nhất":
        return;
      case "Mã giảm giá":
        return onPromotionCodePress();
      case "Lịch sử giao dịch":
        return onTransactionHistoryPress();
      default:
        return "Courses";
    }
  };
  const onFavoritePress = () => {
    return navigation.navigate(nameScreen.USER_STACK, {
      screen: nameScreen.USER_FAVORITE_SCREEN,
    });
  };
  const onPromotionCodePress = () => {
    return navigation.navigate(nameScreen.USER_STACK, {
      screen: nameScreen.USER_PROMOTION_SCREEN,
    });
  };

  const onTransactionHistoryPress = () => {
    return navigation.navigate(nameScreen.USER_STACK, {
      screen: nameScreen.USER_HISTORY_TRANSACTION_SCREEN,
      params: {
        title: "Transaction History",
      },
    });
  };

  const onRecentLearningViewPress = () => {};

  return (
    <>
      <View style={styles.categoryItemContainer}>
        <View style={styles.categoryItemWrapper}>
          <Image
            source={item.icon as any}
            resizeMode="center"
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.categoryTitle}>{item.title}</Text>
        </View>
        <CustomIconButton
          buttonName="chevron-right"
          onPress={() => onPressReducer(item.title)}
        />
      </View>
      {item.object && (
        <LearningProgressCurrentList progressListItem={item.object} />
      )}
    </>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 7,
  },
  categoryItemWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 17,
    fontWeight: "400",
    marginHorizontal: 10,
  },
});
