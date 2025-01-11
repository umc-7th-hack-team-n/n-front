import { axiosInstance } from "@shared/apis/axiosInstance.ts";
import { BaseResponse, CoupleResponse } from "@shared/types";

export const getHomeInfo = async (couple_id: number) => {
  try {
    const response = await axiosInstance.get<BaseResponse<CoupleResponse>>(`/couple/${couple_id}`);
    console.log(response)
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
