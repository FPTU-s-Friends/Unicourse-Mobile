// Blog Tags
export type Tags = Tag[];

export type Tag = {
  text: string;
  textColor: string;
  backgroundColor: string;
}

export type Blogs = Blog[];

export type Blog = {
    user: User;
    tags: Tags;
    title: string;
    description: string;
    createdAt: Date;
    minutedRead: number;
}

export type User = {
    name: string;
    avatar: string;
    role: string;
}