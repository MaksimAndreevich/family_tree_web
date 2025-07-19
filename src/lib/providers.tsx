"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

import { theme } from "@/ui/theme";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          preventDuplicate
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
