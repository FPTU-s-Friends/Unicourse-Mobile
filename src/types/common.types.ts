// ----------------------- BLOG ZONE -----------------------
import { View } from "react-native";

// Blog Tags
export type Tags = Tag[];

export type Tag = {
  name: string;
  code: string;
  color: string;
};

export type Blogs = Blog[];

export type Blog = {
  _id: string;
  userId: BlogUser;
  tags: Tags;
  thumbnail_url: string;
  title: string;
  description: string;
  created_at: string;
  min_read: number;
  content: string;
  like: string[];
  comment_obj: Object[];
  status: string;
  flag: boolean;
};

export type BlogUser = {
  _id: string;
  email: string;
  fullName: string;
  profileName: string;
  profile_image: string;
  role: string;
};
// ----------------------- END BLOG ZONE -------------------

// ----------------------- USER ZONE -----------------------
export type User = {
  _id: string;
  email: string;
  fullName: string;
  profileName: string;
  profile_image: string;
  role: string;
};

export type LectureType = {
  _id: string;
  name: string;
  avatar: string;
};

// ----------------------- END USER ZONE -------------------

// ----------------------- COURSE ZONE ---------------------
export type CourseType = {
  _id: string;
  thumbnail: string;
  title: string;
  price: string;
  navigate: any;
};

// USER STACK
export interface IUserDetailProps extends User {
  quiz_interest: string[];
  wish_list: string[];
  enrollCourses: string[];
}

export interface UserInfoTypes {
  name: string;
  avatar: any;
}

export interface DataNavigation {
  icon: string;
  title: string;
  object?: Array<ExtraInformation>;
}

export interface ExtraInformation {
  title: string;
  thumb: string;
  backgroundColor: string;
}

export interface ProgressRenderingProps {
  icon: string;
  title: string;
  description: string;
}

export interface ListRenderFavoriteProps {
  id: string;
  title: string;
  price: string;
  oldPrice: string;
  rating: number;
  user: string;
  user_url: any;
  favorite_url: any;
}

export interface StartRatingCustomProps
  extends React.ComponentProps<typeof View> {
  rating: number;
}

// ----------------------- END COURSE ZONE -----------------
