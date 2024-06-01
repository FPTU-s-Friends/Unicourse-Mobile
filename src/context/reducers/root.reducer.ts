import { AuthAction } from "../types/auth.types";
import { BlogAction } from "../types/blog.types";
import { RootAction, RootState } from "../types/root.types";
import AuthReducer from "./auth.reducer";
import BlogReducer from "./blog.reducer";

const rootReducer = (state: RootState, action: RootAction): RootState => {
  return {
    auth: AuthReducer(state.auth, action as AuthAction),

    // Add other reducers here
    blog: BlogReducer(state.blog, action as BlogAction)
  };
};

export default rootReducer;
