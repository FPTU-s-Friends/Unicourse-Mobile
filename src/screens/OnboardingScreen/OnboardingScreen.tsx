import React, { useRef } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ONBOARDING, ONBOARDING_1, ONBOARDING_2 } from "../../assets";
import { AuthStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";
import CusTomSlideSwiper from "../../components/Auth/Onboarding/Onboarding.ios";

const OnboardingScreen = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Swiper ref={swiperRef} activeDotColor="#97D5FE" showsButtons={false}>
      <View>
        <CusTomSlideSwiper
          img={ONBOARDING_1}
          title="Học Tập Dễ Dàng"
          subTitle="Học theo cách của riêng bạn với các bài học tương tác và giao diện
            trực quan"
          swiperRef={swiperRef}
          buttonText="Tiếp tục"
        />
      </View>
      <View>
        <CusTomSlideSwiper
          img={ONBOARDING_2}
          title="Học Mọi Lúc Mọi Nơi"
          subTitle="Người bạn đồng hành thông minh hướng dẫn bạn trong suốt hành trình
            học tập"
          swiperRef={swiperRef}
          buttonText="Tiếp tục"
        />
      </View>
      <View>
        <CusTomSlideSwiper
          img={ONBOARDING}
          title="Theo Dõi Lộ Trình"
          subTitle="Học theo cách của riêng bạn với các bài học tương tác và giao diện
          trực quan"
          swiperRef={swiperRef}
          buttonText="Bắt đầu"
        />
      </View>
    </Swiper>
  );
};

export default OnboardingScreen;
