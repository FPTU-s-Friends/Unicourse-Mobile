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
      query: (id: string) => ({
        url: `/api/user/${id}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNmMTU1YjdhZDAyNzBjZDkxZjBmYWYiLCJlbWFpbCI6ImNoYXVkbXNzMTcxMDk4QGZwdC5lZHUudm4iLCJmdWxsTmFtZSI6IkRhbmcgTWluaCBDaGF1IChLMTcgSENNKSIsImRhdGVPZkJpcnRoIjpudWxsLCJwcm9maWxlX2ltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSklEOFRqRENGWE53OUZ3M0VXZjBEZHZYZHBFalNhVmJVb0Zma3JXY09mSnVNY2JHMD1zOTYtYyIsInJvbGUiOiJzdHVkZW50IiwiaXNfY29tbWVudF9ibG9ja2VkIjpmYWxzZSwiaXNfYmxvY2tlZCI6ZmFsc2UsImlzX2NoYXRfYmxvY2tlZCI6ZmFsc2UsIndpc2hfbGlzdCI6W10sImludGVyZXN0cyI6W10sInJlY29tbWVuZGVkX2NvdXJzZXMiOltdLCJpYXQiOjE3MTgwMjM5MTIsImV4cCI6MTcxODE5NjcxMn0.fGgVorKe7DSXeINp2DWF1fiT-7moDafBU1jrCXyuHSw` ||
            "",
        },
      }),
    }),
  }),
});

export const { useGetUserByIdQuery } = apiSlice;
