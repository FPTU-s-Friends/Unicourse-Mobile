import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const AppBarHeader = ({
  onBackPress,
  onMagnifyPress,
  title,
}: {
  onBackPress: (event?: GestureResponderEvent) => void | undefined;
  onMagnifyPress: (event?: GestureResponderEvent) => void | undefined;
  title: string;
}) => {
  return (
    <Appbar.Header mode="small">
      <Appbar.BackAction onPress={onBackPress} />
      <Appbar.Content
        titleStyle={{
          fontSize: 20,
          fontWeight: "bold",
        }}
        title={title}
      />
      <Appbar.Action icon="magnify" onPress={onMagnifyPress} />
    </Appbar.Header>
  );
};

export default AppBarHeader;

const styles = StyleSheet.create({});
