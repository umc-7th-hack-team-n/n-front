import { useMutation } from "@tanstack/react-query";
import { RulesReq } from "@shared/types";
import { putPromise } from "@shared/apis/rules.ts";
import { useNavigate } from "react-router";

export const usePutPromise = () => {
  const navigate = useNavigate();

  const result = useMutation({
    mutationFn: (req: RulesReq) => putPromise(1, req),
    onSuccess: (data) => {
      console.log(data);
      navigate('/home');
    },
  });
  return result;
};
