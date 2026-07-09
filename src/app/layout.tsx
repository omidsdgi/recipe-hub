import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import React from "react";


const pasifico=Pacifico({
  weight:"400",
  subsets:["latin"]
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
    >
      <body className={pasifico.className} >
      {children}
      </body>
    </html>
  );
}
