import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export const SidebarNav = () => {
  return (
    <div className="hidden xl:flex  z-[999] fixed right-0 top-[30%]">
      <div className="w-fit h-fit flex flex-col items-center text-[#a6e3a1] gap-8 border-2 border-[#a6e3a1] bg-[#313244] bg-opacity-80 backdrop-blur rounded-full shadow-lg shadow-black p-[26px]">
        <Link
          target="_blank"
          href="https://github.com/Ajit1428"
          className="cursor-pointer flex transition-all hover:bg-[#a6e3a1] hover:rounded-full hover:text-black p-[10px]"
        >
          <Github className="w-8 h-8" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/ajit-thapa-a65158242"
          className="cursor-pointer flex transition-all hover:bg-[#a6e3a1] hover:rounded-full hover:text-black p-[10px]"
        >
          <Linkedin className="w-8 h-8" />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/ajit.thapa.161/"
          className="cursor-pointer flex transition-all hover:bg-[#a6e3a1] hover:rounded-full hover:text-black p-[10px]"
        >
          <Facebook className="w-8 h-8" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/ajit_thapa91?igsh=ZG8wbzVyMGY0Z2ll"
          className="cursor-pointer flex transition-all hover:bg-[#a6e3a1] hover:rounded-full hover:text-black p-[10px]"
        >
          <Instagram className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};
