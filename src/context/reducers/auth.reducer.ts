import { Reducer } from "react";
import { AUTH_ACTION, AuthAction, AuthContextType } from "../types/auth.types";

const AuthReducer: Reducer<AuthContextType, AuthAction> = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case AUTH_ACTION.SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };
    case AUTH_ACTION.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
