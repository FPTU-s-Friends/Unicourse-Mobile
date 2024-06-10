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
  profile_image: string,
  role: string;
};

export type User = {
  _id: string;
  email: string;
  fullName: string;
  profileName: string;
  profile_image: string,
  role: string;
};

export type LectureType = {
  _id: string;
  name: string;
  avatar: string;
};

export type CourseType = {
  _id: string;
  thumbnail: string;
  title: string;
  price: string;
  navigate: any;
};
