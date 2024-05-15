import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LOGO, GG_IMG, GitHub_IMG } from "../../assets";
import { StatusBar } from "expo-status-bar";
import { textColor } from "../../constants/appColors";
const AuthStack = () => {
  return (
    <LinearGradient style={styles.container} colors={["#5EDFF5", "#9F80F8"]}>
      <StatusBar style="light" translucent />
      <View style={styles.content}>
        <Image resizeMode={"contain"} style={styles.logo} source={LOGO} />
        <Text style={styles.title}>Unicourse</Text>
        <Text style={styles.subTitle}>
          Học theo cách của riêng bạn với các bài học tương tác và giao diện
          trực quan.
        </Text>
        {/* BTN GG */}
        <View style={styles.btnGG}>
          <Image resizeMode={"contain"} style={styles.ggImg} source={GG_IMG} />
          <Text style={styles.textBtn}>Đăng nhập với Google</Text>
        </View>
        {/* BTN GitHub */}
        <View style={styles.btnGitHub}>
          <Image
            resizeMode={"contain"}
            style={styles.gitHubImg}
            source={GitHub_IMG}
          />
          <Text style={styles.textBtn}>Đăng nhập với GitHub</Text>
        </View>

        <Text style={{ paddingTop: "5%", fontSize: 25, color: "#616161" }}>
          or
        </Text>

        {/* BTN Phone */}
        <View style={styles.btnPhone}>
          <Text style={styles.textBtn}>Đăng nhập với số điện thoại</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  content: {
    marginTop: 250,
    backgroundColor: "#fff",
    height: 650,
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
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    width: "60%",
    fontWeight: 400,
    marginTop: 10,
    color: textColor.subTitleColor,
  },
  btnGG: {
    marginTop: "10%",
    width: "90%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEE",
    paddingHorizontal: "15%",
    paddingVertical: "5%",
    justifyContent: "center",
  },
  ggImg: {
    width: 24,
    height: 24,
  },
  textBtn: {
    fontSize: 18,
    color: textColor.normalText,
    fontWeight: "bold",
    zIndex: 10,
  },
  btnGitHub: {
    marginTop: "5%",
    width: "90%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEE",
    paddingHorizontal: "15%",
    paddingVertical: "5%",
    justifyContent: "center",
  },
  gitHubImg: {
    width: 24,
    height: 24,
  },
  btnPhone: {
    marginTop: "5%",
    width: "90%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEE",
    paddingHorizontal: "15%",
    paddingVertical: "5%",
    justifyContent: "center",
  },
});

export default AuthStack;
