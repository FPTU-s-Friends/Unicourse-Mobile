import { Image, StyleSheet, View } from "react-native";
import { BANNER_1 } from "../../../assets";

const MyCarousel = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgBanner}
        resizeMode={"contain"}
        source={BANNER_1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    marginTop: "2%",
  },
  imgBanner: {
    width: 400,
    height: 250,
  },
});

export default MyCarousel;
