import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { textColor } from "../../../constants/appColors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../types/navigation.types";

interface CusTomSlideSwiperProps {
  img: ImageSourcePropType;
  title: string;
  subTitle: string;
  swiperRef: React.RefObject<any>;
  buttonText: string;
}

const CusTomSlideSwiper: React.FC<CusTomSlideSwiperProps> = ({
  img,
  title,
  subTitle,
  swiperRef,
  buttonText,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.onBoardingContainer}>
      <Image resizeMode={"contain"} style={styles.img} source={img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (buttonText === "Bắt đầu") {
            navigation.navigate("LoginScreen");
          } else {
            swiperRef.current?.scrollBy(1);
          }
        }}
      >
        <LinearGradient
          style={[{ flex: 1, borderRadius: 10 }]}
          colors={["#5EDFF5", "#9F80F8"]}
        >
          <Text style={styles.buttonText}>
            {buttonText === "Bắt đầu" ? buttonText : "Tiếp tục"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardingContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: Dimensions.get("window").height * 0.75,
  },
  title: {
    color: textColor.titleTextColorBlack,
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },
  subTitle: {
    color: textColor.subTitleColor,
    fontWeight: "300",
    fontSize: 16,
    paddingHorizontal: 35,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
    width: 350,
    height: 50,
  },
  buttonText: {
    textAlign: "center",
    marginTop: 15,
    color: textColor.titleTextColorWhite,
    fontSize: 18,
  },
});

export default CusTomSlideSwiper;
