import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../../environments/environment.development";

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
    }),
  }),
});

export const { useGetUserByIdQuery } = apiSlice;
