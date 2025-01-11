import { axiosInstance} from "@shared/apis/axiosInstance.ts";
import { BaseResponse} from "@shared/types/base.ts";
import { CalendarResponse} from "@shared/types/calendar.ts";

export const getCalendar: (month: string) => Promise<BaseResponse<CalendarResponse>> = async (month) =>{
    try {
        const response = await axiosInstance.get(`/api/conflicts/${month}`);
        return response.data;
    } catch (error){
        console.error('Calendar API Error', error);
    }
}