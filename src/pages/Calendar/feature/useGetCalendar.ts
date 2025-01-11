import {useQuery} from "@tanstack/react-query";
import {getCalendar} from "@shared/apis/calendar.ts";

export const useGetCalendar = (month: string) => {
    return useQuery({
        queryFn: () => getCalendar(month),
        queryKey: ['calender', month],
        enabled: !!month,
    })
}