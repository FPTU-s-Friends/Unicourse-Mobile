import { User } from "../../models";

export enum AUTH_ACTION {
  SET_USER = "SET_USER",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN",
}

export interface AuthContextType {
  isAuth: boolean;
  user: User;
  accessToken: string;
}

export const initialAuthState: AuthContextType = {
  isAuth: false,
  user: {} as User,
  accessToken: "",
};

export interface SetIsAuthAction {
  type: AUTH_ACTION.SET_IS_AUTH;
  payload: boolean;
}

export interface SetAccessToken {
  type: AUTH_ACTION.SET_ACCESS_TOKEN;
  payload: string;
}

export interface SetUserAction {
  type: AUTH_ACTION.SET_USER;
  payload: User;
}

export type AuthAction = SetIsAuthAction | SetAccessToken | SetUserAction;
