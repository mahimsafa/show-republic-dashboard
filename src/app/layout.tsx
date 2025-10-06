import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "@/components/ThemeProvider";
// import { ThemeProvider } from "@repo/common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShowRepublic",
  description: "Social App",
  icons: {
    icon: "/images/favicon.ico",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}