"use client";

import Image from "next/image";
import Link from "next/link";

import { Moon, Sun } from "lucide-react";
import { navbarRoutes } from "@/utils/navbar/navbar-routes";
import { cn } from "@/utils/cn";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { isActive } = useActiveSection();
  const { setTheme, resolvedTheme } = useTheme();
  window.history.replaceState(null, "", `#${isActive}`.toLowerCase());

  return (
    <div className="z-[999] fixed top-0 h-[4rem] w-screen bg-opacity-80 bg-white border-b border-light-primary backdrop-blur xl:h-[6rem] dark:bg-[#28283d] dark:bg-opacity-80 dark:border-dark-primary">
      <nav className="flex items-center p-4 justify-between xl:py-[30px] xl:px-20 2xl:py-6">
        <a href="#home">
          <Image
            src="/images/logo.gif"
            alt="profile"
            width={40}
            height={40}
            className="cursor-pointer w-[24px] h-[24px] xl:w-[32px] xl:h-[32px] 2xl:w-[40px] 2xl:h-[40px]"
          />
        </a>
        <div className="hidden xl:flex gap-10 xl:text-md 2xl:text-lg">
          {navbarRoutes.map((route) => (
            <Link
              key={route.hash}
              href={route.hash}
              className="flex items-center"
            >
              <button
                className={cn(
                  "font-bold border-2 py-1 px-4 rounded-bl-md rounded-tl-[24px] rounded-tr-md rounded-br-[24px] transition-all ease-in-out duration-300 bg-transparent text-light-primary border-light-primary hover:bg-light-primary hover:text-white cursor-pointer dark:hover:bg-dark-primary dark:hover:text-black dark:text-dark-primary dark:border-dark-primary",
                  isActive === route.label &&
                    "bg-light-primary text-white border-light-primary hover:bg-transparent hover:text-light-primary dark:text-black dark:hover:text-dark-primary dark:hover:bg-transparent dark:border-dark-primary dark:bg-dark-primary",
                )}
              >
                {route.label}
              </button>
            </Link>
          ))}
        </div>
        {resolvedTheme === "dark" ? (
          <button onClick={() => setTheme("light")} className="cursor-pointer">
            <Moon className="flex dark:text-dark-primary w-6 h-6 xl:w-8 xl:h-8" />
          </button>
        ) : (
          <button onClick={() => setTheme("dark")} className="cursor-pointer">
            <Sun className="flex text-sky-600 w-6 h-6 xl:w-8 xl:h-8" />
          </button>
        )}
      </nav>
    </div>
  );
};
