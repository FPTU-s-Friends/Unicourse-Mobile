// Blog Tags
export type Tags = Tag[];

export type Tag = {
  text: string;
  textColor: string;
  backgroundColor: string;
};

export type Blogs = Blog[];

export type Blog = {
  _id: string;
  user: User;
  tags: Tags;
  thumnail: string;
  title: string;
  description: string;
  createdAt: string;
  minutedRead: number;
  blogDetail: string;
  likes: number;
  comments: number;
}

export type User = {
  name: string;
  avatar: string;
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
};
