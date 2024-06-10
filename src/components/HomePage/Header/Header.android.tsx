import React, { useContext, useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
/*
@Import Icon
*/
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { RootContext } from "../../../context/providers/AppProvider";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const { state, dispatch } = useContext(RootContext);
    const navigation = useNavigation();
    const [user, setUser] = useState({
        _id: "",
        email: "",
        fullName: "",
        profileName: "",
        profile_image: "https://firebasestorage.googleapis.com/v0/b/unicourse-f4020.appspot.com/o/User%2Fdefault-avatar.png?alt=media&token=e9ad363c-de79-4457-9fa5-1864a911c686",
        role: "student",
    });

    // INIT DATA ZONE
    // Init user data
    useEffect(() => {
        setUser(state.auth.user);
    }, [state.auth.user]);
    
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.userLayout}>
          <View style={styles.userGroupImage}>
            <Image
              style={styles.userImage}
              resizeMode="cover"
              source={{
                uri: user.profile_image
              }}
            />
            <View style={styles.onlineIcon} />
          </View>
          <View style={styles.userTextInfo}>
            <Text style={styles.title} numberOfLines={1}>
              {user.fullName}
            </Text>
            <Text style={styles.textRole} numberOfLines={1}>
              {user.role === "student" ? "Học viên" : "Giáo viên"}
            </Text>
          </View>
        </View>
        <View style={styles.groupBtn}>
          <View style={styles.btn2}>
            <AntDesign name="search1" size={25} color="black" />
          </View>
          <View style={styles.btn3}>
            <Feather name="bell" size={25} color="white" />
          </View>
          <View style={styles.btn2}>
            <AntDesign name="setting" size={24} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    paddingTop: Dimensions.get("window").height * 0.05,
  },
  container: {
    display: "flex",
    height: 80,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#EDEDED",
    borderRadius: 50,
    padding: 6,
  },
  btn2: {
    backgroundColor: "#EDEDED",
    borderRadius: 50,
    padding: 6,
  },
  btn3: {
    backgroundColor: "#578ff2",
    borderRadius: 50,
    padding: 6,
  },
  userLayout: {
    height: 50,
    width: 180,
    flexDirection: "row",
  },
  userGroupImage: {
    height: "auto",
    width: 50,
  },
  userImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 50,
    objectFit: "cover",
  },
  onlineIcon: {
    padding: 5,
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "#4284F4",
    borderColor: "#fff",
    borderWidth: 3,
    bottom: 0,
    right: 0,
  },
  userTextInfo: {
    display: "flex",
    flexDirection: "column",
    width: 150,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111",
  },
  textRole: {
    fontSize: 12,
    color: "#8d8a8a",
  },
  groupBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  thnhVinPosition: {
    overflow: "hidden",
    textAlign: "left",
    lineHeight: 20,
    left: 98,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 18,
    left: 18,
    width: 24,
    height: 24,
    position: "absolute",
  },
  userIcon: {
    marginLeft: -18,
    top: 0,
    left: "50%",
  },
  onlineDotIcon: {
    top: 28,
    left: 28,
    width: 8,
    height: 8,
    position: "absolute",
  },
  onlineUser: {
    top: 12,
    left: 50,
  },
  iconButton: {
    top: 14,
    right: 18,
  },
  iconButton1: {
    marginTop: -18,
    top: "50%",
    right: 63,
  },
});

export default Header;
