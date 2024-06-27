import type { Metadata } from "next";
import localFont from "next/font/local";

import "./style/globals.scss";
import ReactQueryProvider from "@/providers/ReactQuerryProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Movies App",
  description:
    "Movies App - is a Next.js project, when you can watch top movies from top countries.",
  twitter: {
    card: "summary_large_image",
    title: "Movies App",
    description:
      "Movies App - is a Next.js project, where you can watch top movies from top countries.",
    images: [
      "https://static.javatpoint.com/androidpages/images/movie-apps-for-android12.png",
    ],
  },
};
const myFont = localFont({
  src: [
    {
      path: "./style/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./style/fonts/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./style/fonts/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./style/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <ReactQueryProvider>
          <div className="wrapper">
            <Header />
            <main className="main">
              <div className="container">{children}</div>
            </main>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
