import axios from "axios";
import { environment } from "../../../environments/environment.development";

export const useCourseDetailService = () => {
  const getCourseById = async (id: string) => {
    return axios
      .get(`${environment.baseUrl}/api/course/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      });
  };

  const addToCart = async (id: string, Token: string) => {
    return axios
      .post(
        `${environment.baseUrl}/api/cart/add-to-cart/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .catch((err) => {
        console.log("🚀 ~ addToCart ~ err:", err);
      });
  };

  return { getCourseById, addToCart };
};
