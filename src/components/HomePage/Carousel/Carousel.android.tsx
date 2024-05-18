import { Image, StyleSheet, View } from "react-native";

const MyCarousel = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgBanner}
        resizeMode={"contain"}
        source={require("../../../assets/images/banner/banner_1.png")}
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
