import type { Metadata } from "next";
import { sweetSuckerPunch, switzer } from "./fonts";
import "./globals.css";


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
        className={`${sweetSuckerPunch.variable} ${switzer.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
