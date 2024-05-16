import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Onboarding from "react-native-onboarding-swiper";
import { ONBOARDING, ONBOARDING_1, ONBOARDING_2 } from "../../assets";
import { LinearGradient } from "expo-linear-gradient";
import { textColor } from "../../constants/appColors";
import { AuthStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const OnboardingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} style={styles.button}>
        <LinearGradient
          style={[{ flex: 1, borderRadius: 10 }]}
          colors={["#5EDFF5", "#9F80F8"]}
        >
          <Text style={styles.buttonText}>Bắt đầu</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const nextButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.button} {...props}>
        <LinearGradient
          style={[{ flex: 1, borderRadius: 10 }]}
          colors={["#5EDFF5", "#9F80F8"]}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const handleDone = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <Onboarding
      bottomBarHighlight={false}
      DoneButtonComponent={doneButton}
      NextButtonComponent={nextButton}
      SkipButtonComponent={() => <></>}
      onDone={handleDone}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              resizeMode={"contain"}
              style={styles.img}
              source={ONBOARDING_1}
            />
          ),
          title: <Text style={styles.title}>Học Tập Dễ Dàng</Text>,
          subtitle: (
            <Text style={styles.subTitle}>
              Học theo cách của riêng bạn với các bài học tương tác và giao diện
              trực quan.
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              resizeMode={"contain"}
              style={styles.img2}
              source={ONBOARDING_2}
            />
          ),
          title: <Text style={styles.title}>Học Tập Mọi Lúc</Text>,
          subtitle: (
            <Text style={styles.subTitle2}>
              Khám phá người bạn đồng hành thông minh hướng dẫn bạn trong suốt
              hành trình học tập của mình.
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              resizeMode={"contain"}
              style={styles.img}
              source={ONBOARDING}
            />
          ),
          title: <Text style={styles.title}>Theo dõi tiến trình</Text>,
          subtitle: (
            <Text style={styles.subTitle}>
              Học theo cách của riêng bạn với các bài học tương tác và giao diện
              trực quan.
            </Text>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    top: "70%",
    color: textColor.titleTextColorBlack,
    fontSize: 28,
    fontWeight: "700",
  },
  subTitle: {
    color: textColor.subTitleColor,
    fontWeight: "300",
    fontSize: 16,
    paddingHorizontal: 35,
    textAlign: "center",
  },
  subTitle2: {
    color: textColor.subTitleColor,
    fontWeight: "300",
    fontSize: 16,
    paddingHorizontal: 35,
    textAlign: "center",
    position: "absolute",
    top: "75.5%",
  },
  img: {
    width: "100%",
    height: 450,
  },
  img2: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "-20%",
  },
  button: {
    flexDirection: "column",
    position: "absolute",
    borderTopLeftRadius: 10,
    backgroundColor: "#fff",
    width: 350,
    height: 50,
    top: "-150%",
    right: "22%",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 15,
    color: textColor.titleTextColorWhite,
    fontSize: 18,
  },
});

export default OnboardingScreen;
