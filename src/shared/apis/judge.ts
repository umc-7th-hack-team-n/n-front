import { axiosInstance } from "@shared/apis/axiosInstance.ts";
import { BaseResponse } from "@shared/types/base.ts";
import { JudgeRequest, JudgeResponse } from "@shared/types/judge.ts";

export const postConflict: (req: JudgeRequest) => Promise<BaseResponse<JudgeResponse> | undefined> = async (req: JudgeRequest) => {
  try {
    const response = await axiosInstance.post<BaseResponse<JudgeResponse>>('/api/conflict', req);
    console.log(response)
    return response.data;
  } catch ( error ) {
    console.error('Conflict POST API Error:', error);
    return undefined;
  }
}

export const getConflict: (conflict_id: number) => Promise<BaseResponse<JudgeResponse> | undefined> = async (conflict_id) => {
  try{
    const response = await axiosInstance.get(`/api/conflicts/id/${conflict_id}`);
    return response.data;
  }
  catch(error){
    console.error('Conflict GET API Error:', error);
    return undefined;
  }
}