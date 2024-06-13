import { apiSlice } from "./apiSlice";

import { StandardResponse } from "../slices/apiSlice";

export interface IUserTransactionResponse {
  _id: string;
  email: string;
  fullName: string;
  profileName: string;
  profile_image: string;
}

export interface IItemCheckoutResponse {
  _id: string;
  title: string;
  titleDescription: string;
  subTitle: string;
  subTitleDescription: string;
  amount: number;
  thumbnail: string;
}

export interface ITransactionHistoryResponse {
  _id: string;
  userId: IUserTransactionResponse;
  process_date: Date;
  item_checkout: IItemCheckoutResponse[];
  payment_method: string;
  total_old_amount: number;
  total_new_amount: number;
  status: string;
  transaction_code: string;
}

const transactionSlice = apiSlice.injectEndpoints({
  // the cache reducer expects to be added at `state.api` by default
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: ({ accessToken }: { accessToken: string }) => ({
        url: `/api/transactions/user`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}` || "",
        },
      }),
      transformResponse(
        response: StandardResponse<ITransactionHistoryResponse[]>
      ) {
        return response.data;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetTransactionsQuery } = transactionSlice;
