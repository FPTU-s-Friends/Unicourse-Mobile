import { Reducer } from "react";
import { BLOG_ACTION, BlogAction, BlogContextType } from "../types/blog.types";

const BlogReducer: Reducer<BlogContextType, BlogAction> = (state, action) => {
  switch (action.type) {
    case BLOG_ACTION.FETCH_BLOG:
      return { ...state, blogs: action.payload };
    case BLOG_ACTION.FETCH_BLOG_DETAIL_INFO:
      return { ...state, selectBlog: action.payload };
    default:
      return state;
  }
};

export default BlogReducer;
