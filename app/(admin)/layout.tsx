import { Metadata } from "next";
import Navbar from "../(site)/components/Navbar";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Julian Moya ",
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
