import { apiSlice } from "./apiSlice";

import { StandardResponse } from "../slices/apiSlice";

export interface IVoucherRes {
  _id: string;
  code: string;
  title: string;
  type: "percentage" | "fixed";
  discount_amount: number;
  remaining_uses: number;
  valid_from?: Date;
  valid_to?: Date;
  created_at?: Date;
}

const voucherApi = apiSlice.injectEndpoints({
  // the cache reducer expects to be added at `state.api` by default
  endpoints: (builder) => ({
    getVouchers: builder.query({
      query: ({ accessToken }: { accessToken: string }) => ({
        url: `/api/voucher`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}` || "",
        },
      }),
      transformResponse(response: StandardResponse<IVoucherRes[]>) {
        return response.data;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetVouchersQuery } = voucherApi;
