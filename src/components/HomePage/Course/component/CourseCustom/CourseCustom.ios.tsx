import { Text, View } from "react-native";

/*
Import Type
*/
import { CustomCourseType } from "../../../../../types/common.types";

const CourseCustom: React.FC<CustomCourseType> = ({
  _id,
  thumbnail,
  lecture,
  duration,
  title,
}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default CourseCustom;
