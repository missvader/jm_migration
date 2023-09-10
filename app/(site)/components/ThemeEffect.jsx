"use client";
import { useEffect } from "react";

export default function ThemeEffect() {
  useEffect(() => {
    const theme =
      localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return null; // No necesitamos un elemento renderizable
}
