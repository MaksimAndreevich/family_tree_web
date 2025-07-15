import { useMutation } from "@tanstack/react-query";

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
  });

  return { register, isPending };
}
