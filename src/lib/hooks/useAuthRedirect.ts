import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { WEB_ROUTES } from "@/lib/routes";

export const useAuthRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectAfterAuth = useCallback(() => {
    const redirectUrl = searchParams.get("redirect") || WEB_ROUTES.tree;
    router.push(redirectUrl);
  }, [router, searchParams]);

  return { redirectAfterAuth };
};
