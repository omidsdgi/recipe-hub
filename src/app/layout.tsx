import type { Metadata } from "next";
import {Nunito_Sans, Pacifico, Figtree } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import {DarkModeProvider} from "@/context/DarkModeContext";

const figtree = Figtree({
  subsets:['latin'],
  variable:'--font-sans',
  display:"swap"
});

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
// const THEME_INIT_SCRIPT = `
// (function () {
//   try {
//     var stored = localStorage.getItem("theme");
//     var theme =
//       stored === "dark" || stored === "light"
//         ? stored
//         : window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     var root = document.documentElement;
//     if (theme === "dark") root.classList.add("dark");
//     root.setAttribute("data-theme", theme);
//   } catch (e) {}
// })();
// `;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en" suppressHydrationWarning
          className={cn(nunitoSans.variable, pasifico.variable, "font-sans", figtree.variable)}
      >
      {/*<head>*/}
      {/*  /!* باید اولین چیزی باشد که اجرا می‌شود؛ قبل از هیدریشن هر Client Component *!/*/}
      {/*  <script dangerouslySetInnerHTML={{__html: THEME_INIT_SCRIPT}}/>*/}
      {/*</head>*/}
      <body suppressHydrationWarning>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
      </body>
      </html>
  );
}
