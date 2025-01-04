import type { Metadata } from "next";
import { agressive, sweetSuckerPunch, switzer } from "./fonts";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


export const metadata: Metadata = {
  title: "Underpin Services",
  description: "Pinning Your Vision To Reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sweetSuckerPunch.variable} ${switzer.variable} ${agressive.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
