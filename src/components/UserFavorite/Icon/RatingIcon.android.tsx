import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons as Icon } from "@expo/vector-icons";
import { StartRatingCustomProps } from "../../../types";

const StartRating = ({ rating, ...props }: StartRatingCustomProps) => {
  let arr = [];
  let name = "star";

  for (let i = 1; i <= 5; i++) {
    if (i > rating) {
      if (i - rating === 0.5) {
        name = "star-half";
      } else {
        name = "star";
      }
    }
    arr.push(
      <Icon
        name={name as keyof typeof Icon.glyphMap}
        key={i}
        size={17}
        color="#FFD700"
        style={styles.star}
      />
    );
  }
  return <View {...props}>{arr}</View>;
};

export default StartRating;

const styles = StyleSheet.create({
  star: {
    marginHorizontal: 2,
  },
});
