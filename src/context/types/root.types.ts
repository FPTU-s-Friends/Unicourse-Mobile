import { AuthAction, AuthContextType, initialAuthState } from "./auth.types";

export interface RootState {
  auth: AuthContextType;

  // Add other state interfaces for additional reducers here
}

export const initialState: RootState = {
  auth: initialAuthState,

  // Add initial state for other reducers here
};

export type RootAction = AuthAction; // add another Action example:  type RootAction = AuthAction | productAction
