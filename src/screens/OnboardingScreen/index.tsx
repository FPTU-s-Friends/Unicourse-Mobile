import React, { useRef } from "react";
import { View } from "react-native";
import { ONBOARDING, ONBOARDING_1, ONBOARDING_2 } from "../../assets";
import Swiper from "react-native-swiper";
import CusTomSlideSwiper from "../../components/Auth/Onboarding/Onboarding";

const OnboardingScreen = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Swiper
      style={{ backgroundColor: "#fff" }}
      ref={swiperRef}
      activeDotColor="#97D5FE"
      showsButtons={false}
    >
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
