import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export const SidebarNav = () => {
  return (
    <div className="z-[999] fixed left-0 top-[20rem] w-[6rem] h-[10rem]">
      <div className="flex flex-col items-center text-[#a6e3a1]  gap-12 border-2 border-[#a6e3a1] bg-[#313244] bg-opacity-80 backdrop-blur rounded-full shadow-lg shadow-black p-10">
        <Link
          target="_blank"
          href="https://github.com/Ajit1428"
          className="cursor-pointer flex hover:scale-125 transition-all hover:bg-[#a6e3a1] hover:rounded-full hover:text-black hover:p-2"
        >
          <Github className="w-8 h-8" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/ajit-thapa-a65158242"
          className="cursor-pointer flex hover:scale-125 transition-all hover:bg-[#a6e3a1] hover:rounded-full hover:text-black hover:p-2"
        >
          <Linkedin className="w-8 h-8" />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/ajit.thapa.161/"
          className="cursor-pointer flex hover:scale-125 transition-all hover:bg-[#a6e3a1] hover:rounded-full hover:text-black hover:p-2"
        >
          <Facebook className="w-8 h-8" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/ajit_thapa91?igsh=ZG8wbzVyMGY0Z2ll"
          className="cursor-pointer flex hover:scale-125 transition-all hover:bg-[#a6e3a1] hover:rounded-full hover:text-black hover:p-2"
        >
          <Instagram className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};
