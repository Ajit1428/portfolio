"use client";

import { useEffect } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";

export const ContactMePage = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setIsActive } = useActiveSection();

  useEffect(() => {
    if (inView) {
      // setIsActive("Contact");
    }
  }, [inView, setIsActive]);
  return (
    <div
      id="contact"
      ref={ref}
      className="mb-[5rem] py-[8rem] px-[10rem] h-screen"
    >
      <section className="flex flex-col item-center justify-center gap-[4rem] ">
        <h2 className="text-[3rem] text-white text-center">Get in touch</h2>
        <div className="flex items-center mx-[10rem]">
          <div className="relative w-[40rem] ">
            <img
              src="/images/contact-me.jpg"
              alt="contact-me-image"
              className="rounded-l-[2rem] h-[40rem] w-[40rem] opacity-40 shadow-md shadow-black/80"
            />
            <span className="absolute top-1/3 font-bold left-20 text-[3rem] text-white">
              Let&apos;s discuss on{" "}
              <span className="text-[#a6e3a1]">something cool</span> together
            </span>
          </div>
          <div className="bg-white w-[40rem] h-[40rem]"></div>
        </div>
      </section>
    </div>
  );
};
