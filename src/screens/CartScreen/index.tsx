import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../../types/navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ItemBlock from "../../components/Cart/ItemBlock/ItemBlock.android";
import HeaderCart from "../../components/Cart/Header/header.android";
import FooterCart from "../../components/Cart/Footer/footer.android";

const CartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderCart navigate={navigation} />
      <ItemBlock />
      <FooterCart />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "f7f8fc",
  },
});

export default CartScreen;
