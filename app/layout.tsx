import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

import { inter } from '@/utils/fonts'

export const metadata: Metadata = {
  title: "St Michael the Archangel School",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
