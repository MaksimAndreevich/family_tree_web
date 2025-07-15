import { Providers } from "@/lib/providers";
import type { Metadata } from "next";
import "../ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Семейное древо",
  description: "Создай свое семейное древо",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
