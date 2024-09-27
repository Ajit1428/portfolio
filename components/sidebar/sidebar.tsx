"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import {
  ArrowBigUpDash,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export const SidebarNav = () => {
  const { isActive } = useActiveSection();
  return (
    <>
      <div className="hidden xl:flex z-[999] fixed right-0 top-[30%]">
        <div className="w-fit h-fit flex flex-col items-center bg-white gap-8 border-2 border-light-primary text-light-primary bg-opacity-80 backdrop-blur rounded-full p-[20px] dark:border-dark-primary dark:text-dark-primary dark:bg-[#28283d]">
          <Link
            target="_blank"
            href="https://github.com/Ajit1428"
            className="p-[12px] hover:rounded-full hover:text-white hover:bg-light-primary cursor-pointer transition-all ease-in-out dark:hover:text-black dark:hover:bg-dark-primary"
          >
            <Github className="w-8 h-8" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ajit-thapa-a65158242"
            className="p-[12px] hover:rounded-full hover:text-white hover:bg-light-primary cursor-pointer transition-all ease-in-out dark:hover:text-black dark:hover:bg-dark-primary"
          >
            <Linkedin className="w-8 h-8" />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/ajit.thapa.161/"
            className="p-[12px] hover:rounded-full hover:text-white hover:bg-light-primary cursor-pointer transition-all ease-in-out dark:hover:text-black dark:hover:bg-dark-primary"
          >
            <Facebook className="w-8 h-8" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ajit_thapa91?igsh=ZG8wbzVyMGY0Z2ll"
            className="p-[12px] hover:rounded-full hover:text-white hover:bg-light-primary cursor-pointer transition-all ease-in-out dark:hover:text-black dark:hover:bg-dark-primary"
          >
            <Instagram className="w-8 h-8" />
          </Link>
        </div>
      </div>
      {isActive === "Projects" && (
        <Link
          href="#home"
          className="fixed z-[999] right-2 bottom-[4.2rem] p-[4px] text-white border-2 border-light-primary bg-light-primary transition-all ease-in-out hover:bg-transparent hover:border-light-primary hover:text-light-primary rounded-md cursor-pointer xl:right-10 xl:bottom-10 xl:px-[6px] xl:py-[4px] dark:text-black/80 dark:bg-dark-primary dark:border-dark-primary dark:hover:bg-transparent dark:hover:text-dark-primary "
        >
          <ArrowBigUpDash className="w-6 h-6 xl:w-8 xl:h-8" />
        </Link>
      )}
    </>
  );
};
