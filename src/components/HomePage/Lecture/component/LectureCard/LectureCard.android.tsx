import { StyleSheet, View, Image, Text } from "react-native";

/*
Import Type
*/
import { LectureType } from "../../../../../types";

const LectureCard: React.FC<LectureType> = ({ _id, name, avatar }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={"cover"}
        style={styles.avatar}
        source={{ uri: avatar }}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "5%",
    width: 100,
    gap: 5,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default LectureCard;
