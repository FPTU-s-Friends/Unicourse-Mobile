import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import LinearGradientWrapper from "../../components/User/Common/LinearGradientWrapper.android";
import HeaderInfo from "../../components/User/HeaderContainer/HeaderInfo.android";
import AvatarBlock from "../../components/User/BodyContainer/AvatarBlock.android";
import {
  DataNavigation,
  ExtraInformation,
  ProgressRenderingProps,
  UserInfoTypes,
} from "../../types/userDetail.types";
import UserLearningProgress from "../../components/User/BodyContainer/UserLearningProgress.android";
import ItemSeparatorGeneratorView from "../../components/User/Common/ItemSeparatorGeneratorView.android";
import LogoutButton from "../../components/User/Button/LogoutButton.android";
import LearningProgressStackItem from "../../components/User/Button/LearningProgressStackItem.android";
import LearningProgressCurrentList from "../../components/User/BodyContainer/LearningProgressCurrentList.android";

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
      {/* Main Wrapper Block */}
      <SafeAreaView>
        {/* Header body content view */}
        <HeaderInfo />
        {/* Body content view */}
        <View style={styles.bodyWrapper}>
          {/* Avatar block */}
          <AvatarBlock userData={userData} />
          {/* Body container */}
          <View style={styles.bodyContainer}>
            <Text style={styles.authorName}>{userData.name}</Text>
            {/* User progress Info */}
            <UserLearningProgress progressRendered={data} />
            {/* Navigation block */}
            <View style={{ marginTop: 10, padding: 10 }}>
              <FlatList
                data={dataNavigation}
                ItemSeparatorComponent={() => <ItemSeparatorGeneratorView />}
                renderItem={({ item }: ListRenderItemInfo<DataNavigation>) => {
                  return (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginHorizontal: 20,
                          paddingVertical: 15,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={item.icon as any}
                            resizeMode="center"
                            style={{ width: 25, height: 25 }}
                          />
                          <Text style={styles.categoryTitle}>{item.title}</Text>
                        </View>
                        <TouchableOpacity>
                          <Icon
                            name="chevron-right"
                            size={27}
                            color={"black"}
                          ></Icon>
                        </TouchableOpacity>
                      </View>
                      {item.object && (
                        <LearningProgressCurrentList
                          progressListItem={item.object}
                        />
                      )}
                    </>
                  );
                }}
              />
            </View>
          </View>
          <LogoutButton />
        </View>
      </SafeAreaView>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({
  bodyWrapper: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },

  bodyContainer: {
    backgroundColor: "#ffffff",
    width: 355,
    height: 650,
    borderRadius: 15,
  },
  logoutButtonGradient: {
    height: 62,
    padding: 10,
    borderRadius: 15,
    width: 231,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  logoutText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },
  bodyAvatarBlock: { position: "relative", top: 22, zIndex: 1 },
  authorName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },
  userProgressInfo: {
    backgroundColor: "#ebecf0",
    marginTop: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  itemBlockRendered: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 14,
  },
  itemTitleRendered: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 10,
    color: "#898686",
  },
  itemDescriptionRendered: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
  },
  categoryTitle: {
    fontSize: 17,
    fontWeight: "400",
    marginHorizontal: 10,
  },
});

export default UserDetailScreen;
