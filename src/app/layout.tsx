import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.scss";
import ReactQueryProvider from "@/providers/ReactQuerryProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies App",
  description:
    "Movies App - is a Next.js project, when you can watch top movies from top countries.",
  twitter: {
    card: "summary_large_image",
    title: "Movies App",
    description:
      "Movies App - is a Next.js project, when you can watch top movies from top countries.",
    images: [
      "https://static.javatpoint.com/androidpages/images/movie-apps-for-android12.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
