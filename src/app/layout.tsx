import type { Metadata } from "next";
import {Nunito_Sans, Pacifico} from "next/font/google";
import "./globals.css";
import React from "react";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const pasifico=Pacifico({
  weight:"400",
  variable:"--font-heading",
  subsets:["latin"],
  display:"swap",
})
export const metadata: Metadata = {
  title: "Recipe Hub",
  description: "Discover and search delicious recipes with a modern, responsive, and user-friendly application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${pasifico.variable}`}
    >
      <body >
      {children}
      </body>
    </html>
  );
}
