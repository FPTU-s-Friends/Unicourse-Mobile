import React, { Dispatch, useContext } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { textColor } from "../../../../../constants/appColors";
import { LinearGradient } from "expo-linear-gradient";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../../../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootContext } from "../../../../../context/providers/AppProvider";
import { RootAction } from "../../../../../context/types/root.types";
import { AUTH_ACTION } from "../../../../../context/types/auth.types";

// Type for the navigation prop
type AuthNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, "AuthStack">,
  StackNavigationProp<RootStackParamList>
>;
const AuthButton = ({
  onPress,
  icon,
  text,
}: {
  onPress?: () => void;
  icon?: ImageSourcePropType;
  text: string;
}) => {
  const navigation = useNavigation<AuthNavigationProp>();
  const { state, dispatch } = useContext(RootContext);

  const handleLogin = (dispatch: Dispatch<RootAction>) => {
    navigation.navigate("MainStack", { screen: "HomePageScreen" });
    dispatch({ type: AUTH_ACTION.SET_IS_AUTH, payload: true });
  };

  return (
    <>
      {icon ? (
        <View style={styles.container}>
          <Image
            resizeMode={"contain"}
            source={icon}
            style={styles.imgButton}
          />
          <Text style={styles.textButton}>{text}</Text>
        </View>
      ) : (
        <LinearGradient
          style={[
            styles.container,
            {
              marginTop: "5%",
              backgroundColor:
                "linear-gradient(90deg, #5EDFF5 0%, #9F80F8 100%)",
              borderRadius: 40,
            },
          ]}
          colors={["#5EDFF5", "#9F80F8"]}
        >
            <TouchableOpacity
            onPress={onPress}
          >
            <Text style={[styles.textButton, { color: "white" }]}>{text}</Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: "5%",
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
  imgButton: {
    width: 24,
    height: 24,
  },
  textButton: {
    fontSize: 18,
    color: textColor.normalText,
    fontWeight: "bold",
  },
});

export default AuthButton;
