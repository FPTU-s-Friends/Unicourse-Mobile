import axios from "axios";
import { environment } from "../../../environments/environment.development";

export const useCartService = () => {
  const getCart = async (Token: string) => {
    return axios
      .get(`${environment.baseUrl}/api/cart/retrieve-user-cart`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  };

  return { getCart };
};
