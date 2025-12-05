import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

import { cn } from "@/lib/common.lib";

import Header from "@/components/common/header";

import "../theme/theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Gameloft task",
    default: "Gameloft task",
  },
  description: "Anatolii Pyroh test task for Gameloft",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={cn(inter.className, "flex min-h-screen flex-col")}>
        <Header />

        <main className="flex min-h-[80vh] flex-1 flex-col">{children}</main>

        <Toaster />
      </body>
    </html>
  );
}
