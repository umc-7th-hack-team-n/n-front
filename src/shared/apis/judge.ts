import { axiosInstance } from "@shared/apis/axiosInstance.ts";
import { BaseResponse } from "@shared/types/base.ts";
import { JudgeRequest, JudgeResponse } from "@shared/types/judge.ts";

export const postConflict: (req: JudgeRequest) => Promise<BaseResponse<JudgeResponse> | undefined> = async (req: JudgeRequest) => {
  try {
    const response = await axiosInstance.post<BaseResponse<JudgeResponse>>('/api/conflict', req);
    console.log(response)
    return response.data;
  } catch ( error ) {
    console.error('Conflict API Error:', error);
    return undefined;
  }
}
