import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar/navbar";
import { SidebarNav } from "@/components/sidebar/sidebar";
import { ActiveSectionContextProvider } from "@/hooks/useActiveSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/images/portfolio.ico" />
      </head>
      <body className={`${poppins.className} bg-[#1e1e2e]`}>
        <ActiveSectionContextProvider>
          <Navbar />
          <SidebarNav />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
