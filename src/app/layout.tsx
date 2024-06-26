import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ReactQueryProvider from "@/providers/ReactQuerryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies App",
  description:
    "Movies App - is a Next.js project, when you can watch top movies from top countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
