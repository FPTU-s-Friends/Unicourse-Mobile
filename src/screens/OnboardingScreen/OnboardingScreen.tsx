import React, { useRef } from "react";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Onboarding from "react-native-onboarding-swiper";
import { ONBOARDING, ONBOARDING_1, ONBOARDING_2 } from "../../assets";
import { LinearGradient } from "expo-linear-gradient";
import { textColor } from "../../constants/appColors";
import { AuthStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";

const OnboardingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const swiperRef = useRef<any>(null);

  return (
    <Swiper ref={swiperRef} activeDotColor="#97D5FE" showsButtons={false}>
      <View>
        <View style={styles.onBoardingContainer}>
          <Image
            resizeMode={"contain"}
            style={styles.img}
            source={ONBOARDING_1}
          />
          <Text style={styles.title}>Học Tập Dễ Dàng</Text>
          <Text style={styles.subTitle}>
            Học theo cách của riêng bạn với các bài học tương tác và giao diện
            trực quan
          </Text>
          <TouchableOpacity
            onPress={() => swiperRef.current?.scrollBy(1)}
            style={styles.button}
          >
            <LinearGradient
              style={[{ flex: 1, borderRadius: 10 }]}
              colors={["#5EDFF5", "#9F80F8"]}
            >
              <Text style={styles.buttonText}>Tiếp tục</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.onBoardingContainer}>
          <Image
            resizeMode={"contain"}
            style={styles.img2}
            source={ONBOARDING_2}
          />
          <Text style={styles.title}>Học Mọi Lúc Mọi Nơi</Text>
          <Text style={styles.subTitle}>
            Người bạn đồng hành thông minh hướng dẫn bạn trong suốt hành trình
            học tập
          </Text>
          <TouchableOpacity
            onPress={() => swiperRef.current?.scrollBy(1)}
            style={styles.button}
          >
            <LinearGradient
              style={[{ flex: 1, borderRadius: 10 }]}
              colors={["#5EDFF5", "#9F80F8"]}
            >
              <Text style={styles.buttonText}>Tiếp tục</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.onBoardingContainer}>
          <Image
            resizeMode={"contain"}
            style={styles.img3}
            source={ONBOARDING}
          />
          <Text style={styles.title}>Theo Dõi Lộ Trình</Text>
          <Text style={styles.subTitle}>
            {" "}
            Học theo cách của riêng bạn với các bài học tương tác và giao diện
            trực quan
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={styles.button}
          >
            <LinearGradient
              style={[{ flex: 1, borderRadius: 10 }]}
              colors={["#5EDFF5", "#9F80F8"]}
            >
              <Text style={styles.buttonText}>Bắt đầu</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  onBoardingContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  img2: {
    position: "relative",
    width: "100%",
    height: 650,
    marginBottom: "65%",
  },
  img3: {
    position: "relative",
    width: "100%",
    height: 600,
    marginBottom: "62%",
    marginTop: "15%",
  },
  title: {
    position: "absolute",
    color: textColor.titleTextColorBlack,
    fontSize: 30,
    fontWeight: "700",
    bottom: "22%",
  },
  subTitle: {
    position: "absolute",
    color: textColor.subTitleColor,
    fontWeight: "300",
    fontSize: 16,
    paddingHorizontal: 35,
    textAlign: "center",
    bottom: "17%",
  },

  button: {
    flexDirection: "column",
    position: "absolute",
    borderTopLeftRadius: 10,
    backgroundColor: "#fff",
    width: 350,
    height: 50,
    bottom: "8%",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 15,
    color: textColor.titleTextColorWhite,
    fontSize: 18,
  },
});

export default OnboardingScreen;
