import { AuthAction, AuthContextType, initialAuthState } from "./auth.types";
import { BlogAction, BlogContextType, initialBlogState } from "./blog.types";

export interface RootState {
  auth: AuthContextType;

  // Add other state interfaces for additional reducers here
  blog: BlogContextType
}

export const initialState: RootState = {
  auth: initialAuthState,

  // Add initial state for other reducers here
  blog: initialBlogState
};

export type RootAction = AuthAction | BlogAction; // add another Action example:  type RootAction = AuthAction | productAction
