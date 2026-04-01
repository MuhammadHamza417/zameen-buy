import { Inter } from "next/font/google"; 
import "./globals.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "ZameenDirect - Find Your Dream Property",
  description: "Premium real estate & property ecosystem connecting buyers, sellers, and agents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#F8F9FA] antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}