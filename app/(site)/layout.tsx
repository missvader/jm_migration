import "../../app/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeEffect from "./components/ThemeEffect";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Julian Moya",
  description: "Julian Moya website",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full h-screen `}
      >
        {/* Incluye el componente de efecto secundario aquí */}
        <ThemeEffect />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
