import { ScrollView, StyleSheet } from "react-native";

import Header from "../../components/HomePage/Header/Header";
import MyCarousel from "../../components/HomePage/Carousel/Carousel";
import Category from "../../components/HomePage/Category/Category";

const HomePageScreen = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Header />

        {/* Carousel */}
        <MyCarousel />

        {/*  Category*/}
        <Category />
        {/* Bottom Stack */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomePageScreen;
