import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";

import { figtree } from '@/utils/fonts'

export const metadata: Metadata = {
  title: "St Michael the Archangel Academy, Makurdi",
  description: "St Michael the Archangel Makurdi is a private school located at the heart of the city of Makurdi in Benue state, Nigeria.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Navbar />
        {children}
        <Toaster position='top-right' />
        <Footer />
      </body>
    </html>
  );
}
