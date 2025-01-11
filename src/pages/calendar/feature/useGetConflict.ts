import { useQuery} from "@tanstack/react-query";
import { getConflict} from "@shared/apis/judge.ts";

export const useGetConflict = (conflict_id: number) => {
    return useQuery({
        queryFn: () => getConflict(conflict_id),
        queryKey: ['conflict', conflict_id],
        enabled: !!conflict_id,
    })
}

