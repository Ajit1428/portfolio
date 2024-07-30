"use client";

import { useEffect } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { useInView } from "react-intersection-observer";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const ExperiencePage = () => {
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
      className="active h-auto px-8 pt-[6rem] pb-10 xl:px-[10rem] xl:py-[10rem]"
    >
      <section className="flex flex-col items-center justify-center gap-[4rem] xl:gap-[6rem]">
        <h2 className="text-white font-bold text-[32px] xl:text-[42px] ">
          Experiences
        </h2>
        <VerticalTimeline
          lineColor="#a6e3a1"
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
            dateClassName="!font-bold !text-[14px] !italic !text-white xl:!text-[1.1rem] "
            iconStyle={{
              backgroundColor: "#a6e3a1",
              height: "1.5rem",
              width: "1.5rem",
              marginLeft: "8px",
            }}
          >
            <div className="mb-8">
              <div className="flex flex-col -space-y-2">
                <h2 className="!text-[#a6e3a1] mb-2 font-semibold !text-[22px] xl:!text-[32px] ">
                  Subisu Cablenet Limited
                </h2>
                <p className="flex gap-[4px] !font-bold text-white !text-[14px] xl:!text-[18px]">
                  Technical Support Representative
                </p>
              </div>
              <p className="!text-[14px] xl:!text-[16px] text-white">
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
            dateClassName="!font-bold !text-[14px] !italic !text-white xl:!text-[1.1rem] "
            iconStyle={{
              backgroundColor: "#a6e3a1",
              height: "1.5rem",
              width: "1.5rem",
              marginLeft: "8px",
            }}
          >
            <div className="mb-8">
              <div className="flex flex-col -space-y-2">
                <h2 className="!text-[#a6e3a1] mb-2 font-semibold !text-[22px] xl:!text-[32px] ">
                  K.B.L. Securities Limited
                </h2>
                <p className="flex gap-[4px] !font-bold text-white !text-[13px] xl:!text-[18px]">
                  Assistant IT Officer
                </p>
              </div>
              <p className="!text-[14px] xl:!text-[16px] text-white">
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
            dateClassName="!font-bold !text-[14px] !italic !text-white xl:!text-[1.1rem] "
            iconStyle={{
              backgroundColor: "#a6e3a1",
              height: "1.5rem",
              width: "1.5rem",
              marginLeft: "8px",
            }}
          >
            <div className="mb-8">
              <div className="flex flex-col -space-y-2">
                <h2 className="!text-[#a6e3a1] mb-2 font-semibold !text-[22px] xl:!text-[32px] ">
                  Hamro Patro Inc.
                </h2>
                <p className="flex gap-[4px] !font-bold text-white !text-[13px] xl:!text-[18px]">
                  Associate Software Engineer
                </p>
              </div>
              <p className="!text-[14px] xl:!text-[16px] text-white">
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
