"use client";

import Image from "next/image";
import Link from "next/link";

import { Menu, SunMoon } from "lucide-react";
import { navbarRoutes } from "@/utils/navbar/navbar-routes";
import { cn } from "@/utils/cn";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Navbar = () => {
  const { isActive, setIsActive } = useActiveSection();
  return (
    <div className="z-[999] fixed top-0 w-screen bg-[#1e1e2e] bg-opacity-80 backdrop-blur">
      <nav className="flex items-center p-4 justify-between xl:py-8 xl:px-20">
        <Image
          src="/images/logo.gif"
          alt="profile"
          width={40}
          height={40}
          className="cursor-pointer w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]"
        />
        <div className="flex xl:hidden">
          <Menu className="text-white h-[30px] w-[30px]" />
        </div>
        <div className="hidden xl:flex gap-10 text-lg">
          {navbarRoutes.map((route) => (
            <Link
              key={route.hash}
              href={route.hash}
              className="flex items-center"
              onClick={() => setIsActive(route.label)}
            >
              <button
                className={cn(
                  "border-2 py-1 px-4 rounded-lg transition-all ease-in-out duration-300 bg-transparent text-white/80 border-white/80 hover:bg-[#a6e3a1] hover:text-black",
                  isActive === route.label &&
                    "bg-[#a6e3a1] text-black hover:bg-transparent hover:text-white/80 hover:border-white/80",
                )}
              >
                {route.label}
              </button>
            </Link>
          ))}
        </div>
        <SunMoon className="hidden xl:flex text-white w-8 h-8 cursor-pointer" />
      </nav>
    </div>
  );
};
