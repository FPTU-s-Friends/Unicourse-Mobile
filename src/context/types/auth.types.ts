export enum AUTH_ACTION {
  SET_USER = "SET_USER",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN",
}

export interface AuthContextType {
  isAuth: boolean;
  accessToken: string;
}

export const initialAuthState: AuthContextType = {
  isAuth: false,
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

export type AuthAction = SetIsAuthAction | SetAccessToken;
