import { useQuery } from "@tanstack/react-query";
import { getPromise } from "@shared/apis/rules.ts";

export const useGetPromise = (id: number) => {
  const result = useQuery({
    queryKey: ["getPromise", id],
    queryFn: () => getPromise(id),
  })

  return result;
}
