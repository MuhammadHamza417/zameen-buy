"use client";

import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { usePathname } from "next/navigation";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <>
      {!isAuthPage && <Header />}

      <main className="flex-grow">{children}</main>

      {!isAuthPage && <Footer />}
    </>
  );
}