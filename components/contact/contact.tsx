"use client";

import { useEffect } from "react";

import Image from "next/image";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";

export const ContactMePage = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setIsActive } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setIsActive("Contact");
    }
  }, [inView, setIsActive]);
  return (
    <div id="contact" ref={ref} className="py-[10rem] px-[10rem] h-screen">
      <section className="flex flex-col item-center justify-center gap-[6rem] ">
        <h2 className="text-[3rem] text-white text-center">Get in touch</h2>
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/images/contact_me.jpg"
            alt="contact-me-image"
            width={400}
            height={400}
            className="rounded-[2rem] shadow-md shadow-black/80"
          />
          <div>
            <span>Email</span>
            <span>Phone no</span>
          </div>
        </div>
      </section>
    </div>
  );
};
