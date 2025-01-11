import { useQuery } from "@tanstack/react-query";
import { getHomeInfo } from "@shared/apis/home.ts";

export const useGetCoupleInfo = (id: number) => {
  const result = useQuery({
    queryKey: ["couple", id],
    queryFn: () => getHomeInfo(id).then((res) => res?.success),
  })

  return result;
}
