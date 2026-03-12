import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

import type { FC, ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce clothing store",
  description: "Side project, just for practice.",
};

interface IRootLayout {
  children: ReactNode;
}

const badyClass = cn(geistSans.variable, geistMono.variable, "antialiased");

const RootLayout: FC<Readonly<IRootLayout>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={badyClass}>
        <div className="w-full min-h-screen">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
