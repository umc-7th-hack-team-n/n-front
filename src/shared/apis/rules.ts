import { BaseResponse, RulesReq, RulesResponse } from "@shared/types";
import { axiosInstance } from "@shared/apis/axiosInstance.ts";

export const putPromise = async (coupleId: number, req: RulesReq) => {
  try {
    const response = await axiosInstance.put<BaseResponse<RulesResponse>>(`/api/promise/${coupleId}`, req);
    console.log(response);
    return response.data;
  } catch ( error ) {
    console.error('Rules API Error:', error);
    return undefined;
  }
};

export const getPromise = async (coupleId: number) => {
  try {
    const response = await axiosInstance.get<BaseResponse<RulesResponse>>(`/api/promise/${coupleId}`);
    console.log(response);
    return response.data;
  } catch ( error ) {
    console.error('Rules API Error:', error);
    return undefined;
  }
}
