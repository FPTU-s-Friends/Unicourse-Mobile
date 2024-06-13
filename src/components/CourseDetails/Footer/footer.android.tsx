import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { textColor, textFont } from "../../../constants";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "../../../../environments/environment.development";
import { useCourseDetailService } from "../../../core/services/courseDetail.service";

const FooterCard = ({
  navigate,
  courseId,
}: {
  navigate: any;
  courseId: string;
}) => {
  const [Token, setToken] = useState("");

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const userData = await AsyncStorage.getItem("@access_token");
      if (userData !== null) {
        setToken(userData);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  // const addToCart = async () => {
  //   try {
  //     const url = `${environment.baseUrl}/api/cart/add-to-cart/${courseId}`;
  //     const result = await axios.post(
  //       url,
  //       {},
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${Token}`,
  //         },
  //       }
  //     );
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // };

  const onPress = async () => {
    const { addToCart } = useCourseDetailService();
    await addToCart(courseId, Token);
    navigate.navigate("CartStack", {
      screen: "CartScreen",
    });
  };

  const navigateToLearningScreen = () => {
    navigate.navigate("LearningScreen", {
      courseId: courseId,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartStyle} onPress={onPress}>
        <Feather name="shopping-cart" size={21} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linearContainer}
        onPress={navigateToLearningScreen}
      >
        <LinearGradient
          colors={["#4294ff", "#8e54e9"]}
          style={styles.buttonStyle}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={{ fontSize: 16, alignSelf: "center", color: "white" }}>
            Học ngay
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    columnGap: 10,
  },
  cartStyle: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linearContainer: {
    flex: 9,
  },
  buttonStyle: {
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});

export default FooterCard;
