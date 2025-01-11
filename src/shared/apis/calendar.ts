import { axiosInstance} from "@shared/apis/axiosInstance.ts";
import { BaseResponse} from "@shared/types/base.ts";
import { CalendarResponse} from "@shared/types/calendar.ts";

export const getCalendar = async (month: string) =>{
    try {
        const response = await axiosInstance.get<Promise<BaseResponse<CalendarResponse>>>(`/api/conflicts/${month}`);
        return response.data;
    } catch (error){
        console.error('calendar API Error', error);
    }
}
