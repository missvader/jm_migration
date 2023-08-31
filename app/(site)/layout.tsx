"use client";

import "../../app/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export const metadata: Metadata = {
  title: "Julian Moya",
  description: "Julian Moya website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const theme =
      localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full h-screen `}
      >
        <Navbar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
