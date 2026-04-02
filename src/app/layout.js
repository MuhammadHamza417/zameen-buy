"use client"; // Hook use karne ke liye client directive zaroori hai

import { Inter } from "next/font/google"; 
import "./globals.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAuthPage = pathname.startsWith("/auth");

  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#F8F9FA] antialiased`}>
        {!isAuthPage && <Header />}
        
        <main className="flex-grow">
          {children}
        </main>
        
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}