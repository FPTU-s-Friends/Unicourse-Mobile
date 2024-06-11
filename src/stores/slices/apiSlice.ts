import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../../environments/environment.development";
import { IUserFavoriteList } from "../../screens/UserFavoriteScreen";
import { flatten } from "flat";

export interface StandardResponse<T> {
  message: string;
  status: string;
  data: T extends Array<infer U> ? U[] : T;
}

export interface IUserFavoriteResponse {
  _id: string;
  title: string;
  titleDescription: string;
  subTitle: string;
  subTitleDescription: string;
  thumbnail: string;
  amount: number;
  type: string;
  lecture: ILecture;
}

export interface ILecture {
  _id: string;
  fullName: string;
  profile_image: string;
}

export const apiSlice = createApi({
  // the cache reducer expects to be added at `state.api` by default
  reducerPath: "api",
  // All of our requests will have pre-defined URLs
  baseQuery: fetchBaseQuery({
    baseUrl: environment.baseUrl,
  }),

  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: ({ id, accessToken }: { id: string; accessToken: string }) => ({
        url: `/api/user/${id}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}` || "",
        },
      }),
      transformResponse(response: StandardResponse<any>) {
        console.log("Called");

        return response.data;
      },
    }),
    getWishlistCourse: builder.query({
      query: ({ accessToken }: { accessToken: string }) => ({
        url: `/api/user/get-wish-list`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}` || "",
        },
      }),
      transformResponse(response: StandardResponse<IUserFavoriteResponse[]>) {
        const data = response.data.map((item) => {
          if (item["lecture"])
            return {
              ...item,
              lectureName: item.lecture.fullName,
              lectureImage: item.lecture.profile_image,
            };
        }) as IUserFavoriteList[];
        return data;
      },
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useLazyGetWishlistCourseQuery,
  useGetWishlistCourseQuery,
} = apiSlice;
