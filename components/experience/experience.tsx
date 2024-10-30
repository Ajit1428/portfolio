"use client";

import { useEffect } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";

export const ExperiencePage = () => {
  const { resolvedTheme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setIsActive } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setIsActive("Experiences");
    }
  }, [inView, setIsActive]);
  return (
    <div
      id="experiences"
      ref={ref}
      className="active h-auto px-8 pb-10 pt-24 md:px-20 xl:p-40"
    >
      <section className="flex flex-col items-center justify-center gap-16 xl:gap-24">
        <h2 className="text-[32px] font-bold dark:text-white xl:text-[32px] 2xl:text-[42px]">
          Experiences
        </h2>
        <VerticalTimeline
          lineColor={resolvedTheme === "dark" ? "#a6e3a1" : "#2C96F8"}
          layout="1-column"
          className="!p-0"
        >
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              padding: "0",
              background: "transparent",
              boxShadow: "none",
            }}
            contentArrowStyle={{ display: "none" }}
            date="July 2019 - Jun 2021"
            dateClassName="!font-bold !text-[14px] !italic 2xl:!text-[1.1rem] dark:!text-white"
            iconStyle={{
              backgroundColor: resolvedTheme === "dark" ? "#a6e3a1" : "#2C96F8",
              height: "1rem",
              width: "1rem",
              marginLeft: "12px",
            }}
          >
            <div className="mb-8">
              <div className="flex flex-col -space-y-2">
                <h2 className="mb-2 !text-[22px] font-semibold !text-light-primary dark:!text-dark-primary xl:!text-[26px] 2xl:!text-[32px]">
                  Subisu Cablenet Limited
                </h2>
                <p className="flex gap-[4px] !text-[14px] !font-bold dark:text-white xl:!text-[16px] 2xl:!text-[18px] ">
                  Technical Support Representative
                </p>
              </div>
              <p className="!text-[14px] dark:text-white 2xl:!text-[16px]">
                Subisu and wholly the team helped me build up my communication
                as well as soft skills. Strengthen my networking and technical
                knowledge. Understand how the organization functions in
                real-time
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              padding: "0",
              background: "transparent",
              boxShadow: "none",
            }}
            contentArrowStyle={{ display: "none" }}
            date="Dec 2023 - Apr 2024"
            dateClassName="!font-bold !text-[14px] !italic 2xl:!text-[1.1rem] dark:!text-white"
            iconStyle={{
              backgroundColor: resolvedTheme === "dark" ? "#a6e3a1" : "#2C96F8",
              height: "1rem",
              width: "1rem",
              marginLeft: "12px",
            }}
          >
            <div className="mb-8">
              <div className="flex flex-col -space-y-2">
                <h2 className="mb-2 !text-[22px] font-semibold !text-light-primary dark:!text-dark-primary xl:!text-[26px] 2xl:!text-[32px]">
                  K.B.L. Securities Limited
                </h2>
                <p className="flex gap-[4px] !text-[14px] !font-bold dark:text-white xl:!text-[16px] 2xl:!text-[18px] ">
                  Assistant IT Officer
                </p>
              </div>
              <p className="!text-[14px] dark:text-white 2xl:!text-[16px]">
                Besides my expertise in software development, I got to explore
                the field of brokerage. I experienced the thrills, met new
                people having completely different mindset and learned about
                share markets. Automated the workflow, handled the overall
                networking and maintained their website.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              padding: "0",
              background: "transparent",
              boxShadow: "none",
            }}
            contentArrowStyle={{ display: "none" }}
            date="Apr 2024 - Present"
            dateClassName="!font-bold !text-[14px] !italic 2xl:!text-[1.1rem] dark:!text-white"
            iconStyle={{
              backgroundColor: resolvedTheme === "dark" ? "#a6e3a1" : "#2C96F8",
              height: "1rem",
              width: "1rem",
              marginLeft: "12px",
            }}
          >
            <div className="mb-8">
              <div className="flex flex-col -space-y-2">
                <h2 className="mb-2 !text-[22px] font-semibold !text-light-primary dark:!text-dark-primary xl:!text-[26px] 2xl:!text-[32px]">
                  Hamro Patro Inc.
                </h2>
                <p className="flex gap-[4px] !text-[14px] !font-bold dark:text-white xl:!text-[16px] 2xl:!text-[18px] ">
                  Associate Software Engineer
                </p>
              </div>
              <p className="!text-[14px] dark:text-white 2xl:!text-[16px]">
                Dedicated, focused and determined in becoming a Software
                Engineer. Thriving in my chosen career path and following my
                longed dream at Hamro Patro Inc.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};
