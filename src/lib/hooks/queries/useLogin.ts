import { useMutation } from "@tanstack/react-query";

import { authService } from "@/lib/services/auth";
import { saveTokenStorage } from "@/lib/services/auth/token-processes";

import { useAuthRedirect } from "../useAuthRedirect";

export function useLogin() {
  const { redirectAfterAuth } = useAuthRedirect();

  const { mutate: login, isPending } = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      saveTokenStorage(data.token);
      redirectAfterAuth();
    },
  });

  return { login, isPending };
}
