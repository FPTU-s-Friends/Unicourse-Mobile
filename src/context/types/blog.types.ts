import { Blog } from "../../models";

export enum BLOG_ACTION {
    FETCH_BLOG = "FETCH_BLOG",
    FETCH_BLOG_DETAIL_INFO = "FETCH_BLOG_DETAIL_INFO",
    ADD_BLOG = "ADD_BLOG",
    UPDATE_BLOG = "UPDATE_BLOG",
    DELETE_BLOG = "DELETE_BLOG"
  }
  
  export interface BlogContextType {
    blogs: Blog[],
    selectBlog: Blog
  }
  
  export const initialBlogState: BlogContextType = {
    blogs: [],
    selectBlog: {} as Blog,
  };
  
  export interface FetchBlogAction {
    type: BLOG_ACTION.FETCH_BLOG;
    payload: Blog[];
  }
  
  export interface FetchBlogDetailAction {
    type: BLOG_ACTION.FETCH_BLOG_DETAIL_INFO;
    payload: Blog;
  }
  
  export type BlogAction = FetchBlogAction | FetchBlogDetailAction;
  