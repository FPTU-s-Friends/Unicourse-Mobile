import { User } from "../../types";

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
  user: {
    _id: "",
    email: "",
    fullName: "",
    profileName: "",
    profile_image: "https://firebasestorage.googleapis.com/v0/b/unicourse-f4020.appspot.com/o/User%2Fdefault-avatar.png?alt=media&token=e9ad363c-de79-4457-9fa5-1864a911c686",
    role: "student",
  },
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
