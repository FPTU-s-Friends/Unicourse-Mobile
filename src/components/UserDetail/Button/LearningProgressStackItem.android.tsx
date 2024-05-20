import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ExtraInformation } from "../../../types/userDetail.types";

const LearningProgressStackItem = ({ item }: { item: ExtraInformation }) => {
  return (
    <View style={styles.progressItemWrapper}>
      <TouchableOpacity style={styles.buttonWrapper}>
        <View
          style={[
            styles.categoryIconWrapper,
            { backgroundColor: item.backgroundColor as string },
          ]}
        >
          <Image
            source={item.thumb as any}
            resizeMode="center"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LearningProgressStackItem;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  progressItemWrapper: {
    backgroundColor: "#f0f0f0",
    marginLeft: 10,
    borderRadius: 15,
  },

  categoryIconWrapper: {
    padding: 8,
    borderRadius: 15,
  },
  categoryTitle: {
    flex: 1,
    marginLeft: 10,
    flexWrap: "wrap",
    fontSize: 16,
    fontWeight: "bold",
  },
});
