import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HOUSE OF SAINT - A SOFTWARE COMPANY",
  description: "One of the best creative online agencies in the world, House Of Saint pushes the boundry further than ever before with Our approach to expressing creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
