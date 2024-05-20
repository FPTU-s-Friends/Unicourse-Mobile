import { AuthAction } from "../types/auth.types";
import { RootAction, RootState } from "../types/root.types";
import AuthReducer from "./auth.reducer";

const rootReducer = (state: RootState, action: RootAction): RootState => {
  return {
    auth: AuthReducer(state.auth, action as AuthAction),

    // Add other reducers here
  };
};

export default rootReducer;
