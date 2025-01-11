import { JudgeRequest } from "@shared/types";
import { useMutation } from "@tanstack/react-query";
import { postConflict } from "@shared/apis/judge.ts";
import { useNavigate } from "react-router";

export const usePostConflict = () => {
  const navigate = useNavigate();
  const result = useMutation({
    mutationFn: (req: JudgeRequest) => postConflict(req),
    onMutate: () => {
      navigate('/loading');
    },
    onSuccess: (data) => {
      navigate('/judge-result', { state: { judgeResponse: data?.success } });
    },
  });

  return result;
};
