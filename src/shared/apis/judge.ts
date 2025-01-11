import { axiosInstance } from "@shared/apis/axiosInstance.ts";
import { BaseResponse } from "@shared/types/base.ts";
import { JudgeResponse } from "@shared/types/judge.ts";

export const postConflict: () => Promise<BaseResponse<JudgeResponse>> = async () => {
  try {
    const response = await axiosInstance.post('/api/conflict');
    return response.data;
  } catch ( error ) {
    console.error('Conflict API Error:', error);
  }
}
