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
      <div className="fixed right-0 top-[30%] z-[999] hidden xl:flex">
        <div className="flex size-fit flex-col items-center gap-8 rounded-full border-2 border-light-primary bg-white bg-opacity-80 p-[20px] text-light-primary backdrop-blur dark:border-dark-primary dark:bg-[#28283d] dark:text-dark-primary">
          <Link
            target="_blank"
            href="https://github.com/Ajit1428"
            className="cursor-pointer p-[12px] transition-all ease-in-out hover:rounded-full hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-black"
          >
            <Github className="size-8" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ajit-thapa-a65158242"
            className="cursor-pointer p-[12px] transition-all ease-in-out hover:rounded-full hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-black"
          >
            <Linkedin className="size-8" />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/ajit.thapa.161/"
            className="cursor-pointer p-[12px] transition-all ease-in-out hover:rounded-full hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-black"
          >
            <Facebook className="size-8" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ajit_thapa91?igsh=ZG8wbzVyMGY0Z2ll"
            className="cursor-pointer p-[12px] transition-all ease-in-out hover:rounded-full hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-black"
          >
            <Instagram className="size-8" />
          </Link>
        </div>
      </div>
      {isActive === "Projects" && (
        <Link
          href="#home"
          className="fixed bottom-[4.2rem] right-2 z-[999] cursor-pointer rounded-md border-2 border-light-primary bg-light-primary p-[4px] text-white transition-all ease-in-out hover:border-light-primary hover:bg-transparent hover:text-light-primary dark:border-dark-primary dark:bg-dark-primary dark:text-black/80 dark:hover:bg-transparent dark:hover:text-dark-primary xl:bottom-16 xl:right-10 xl:px-[6px] xl:py-[4px] "
        >
          <ArrowBigUpDash className="size-6 xl:size-8" />
        </Link>
      )}
    </>
  );
};
