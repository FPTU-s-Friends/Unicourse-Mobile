import { appInfo } from "../constants/appInfo";
import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: appInfo.sizes.WIDTH,
    height: "100%",
    resizeMode: "cover",
    zIndex: 0,
  },
});

export default globalStyle;
