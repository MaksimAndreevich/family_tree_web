import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";

import { authService } from "@/lib/services/auth";
import { saveTokenStorage } from "@/lib/services/auth/token-processes";

import { useAuthRedirect } from "../useAuthRedirect";

export function useRegister() {
  const { redirectAfterAuth } = useAuthRedirect();

  const { mutate: register, isPending } = useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      saveTokenStorage(data.token);
      redirectAfterAuth();
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        enqueueSnackbar(error.response?.data.error, {
          variant: "error",
        });
      }
    },
  });

  return { register, isPending };
}
