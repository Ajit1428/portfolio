import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar/navbar";
import { SidebarNav } from "@/components/sidebar/sidebar";
import { ActiveSectionContextProvider } from "@/hooks/useActiveSection";
import { Footer } from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ajit Thapa",
  description: "Hi, I'm Ajit Thapa. This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/portfolio.ico" />
      </head>
      <body className={`${poppins.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ActiveSectionContextProvider>
            <Navbar />
            <SidebarNav />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
