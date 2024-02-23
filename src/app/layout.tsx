import type { Metadata } from "next";
import "./globals.css";
import { LayoutClient } from "./layout.client";

export const metadata: Metadata = {
  title: "Next.js Prisma Sample",
  description: "This is Next.js Prisma Sample Project.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <LayoutClient />
        { children }
      </body>
    </html>
  );
}
