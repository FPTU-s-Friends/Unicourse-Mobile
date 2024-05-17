import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LOGO, GG_IMG, GitHub_IMG } from "../../assets";
import { textColor } from "../../constants/appColors";
import AuthButton from "../../components/Auth/SignIn/AuthButton";
const AuthScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={["#5EDFF5", "#9F80F8"]}>
      <View style={styles.content}>
        <Image resizeMode={"contain"} style={styles.logo} source={LOGO} />
        <Text style={styles.title}>Unicourse</Text>
        <Text style={styles.subTitle}>
          Học theo cách của riêng bạn với các bài học tương tác và giao diện
          trực quan.
        </Text>
        {/* GROUP BTN */}
        <AuthButton icon={GG_IMG} text="Đăng nhập với Google" />
        <AuthButton icon={GitHub_IMG} text="Đăng nhập với GitHub" />
        <Text style={{ fontSize: 25, color: "#616161" }}>or</Text>
        <AuthButton text="Đăng nhập bằng số điện thoại" />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 250,
    backgroundColor: "#fff",
    height: 700,
    borderRadius: 36,
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "20%",
    height: "20%",
  },
  title: {
    color: textColor.normalText,
    paddingTop: 10,
    fontSize: 26,
    fontWeight: "bold",
  },
  subTitle: {
    marginBottom: "10%",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    width: "60%",
    fontWeight: 400,
    marginTop: 10,
    color: textColor.subTitleColor,
  },
});

export default AuthScreen;
