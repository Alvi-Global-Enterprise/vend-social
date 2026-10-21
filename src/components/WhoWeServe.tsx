"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface WhoWeServeProps {
  onOurServicesClick?: () => void;
}

export default function WhoWeServe({ onOurServicesClick }: WhoWeServeProps) {
  const spaces = [
    {
      id: "residential",
      title: "Residential",
      description: "High-end residential communities.",
      image: "/images/Rectangle 90.png",
      badge: "/images/Group 294.png",
    },
    {
      id: "gyms",
      title: "Gyms",
      description: "Fuel your fitness journey.",
      image: "/images/Rectangle 93.png",
      badge: "/images/Group 295.png",
    },
    {
      id: "colleges",
      title: "Colleges",
      description: "Quick essentials for busy students.",
      image: "/images/Rectangle 96.png",
      badge: "/images/Group 296.png",
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description: "Workplaces, offices and special events.",
      image: "/images/Rectangle 99.png",
      badge: "/images/Group 297.png",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white pt-6 pb-16 text-black sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1746px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Left copy */}
          <div className="flex flex-col justify-center lg:col-span-4 xl:col-span-4 lg:pr-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-2 font-sans text-[15px] sm:text-[18px] lg:text-[23px] font-bold uppercase tracking-[0.32em] text-[#E300FF] leading-[25px]"
            >
              ABOUT
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="font-sans text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[65px] font-extrabold capitalize leading-[1.09] tracking-[0.01em] text-black"
            >
              A FAMILY-RUN
              <br />
              BUSINESS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-5 max-w-[560px] font-sans text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-normal leading-[1.41] tracking-[0.01em] text-black sm:mt-6"
            >
              VEND-SOCIAL MCR is a family run business. With over 30 years of
              business and professional experience, we have taken exciting and
              innovative concepts to successful reality in high profile
              commercial locations. We understand the importance of connection
              and convenience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-7 sm:mt-8"
            >
              <button
                type="button"
                onClick={onOurServicesClick}
                className="
                  inline-flex h-[48px] items-center justify-center gap-3
                  rounded-full bg-[#E300FF] px-8
                  font-sans text-[16px] sm:text-[18px] leading-[20px] font-bold text-black
                  transition-all duration-300
                  hover:scale-[1.03] hover:bg-[#eb2eff] active:scale-[0.98]
                "
              >
                <span>Our Services</span>
                <ArrowRight className="h-4 w-4 stroke-[2.8]" />
              </button>
            </motion.div>
          </div>

          {/* Right: 4 space cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-8 xl:col-span-8 xl:grid-cols-4 xl:gap-5">
            {spaces.map((space, index) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="
                  flex flex-col overflow-hidden rounded-[20px] bg-white
                  shadow-[0px_0px_25px_rgba(0,0,0,0.20)]
                  transition-all duration-300
                  hover:shadow-[0px_10px_35px_rgba(227,0,255,0.18)]
                "
              >
                {/* Image + badge */}
                <div className="relative w-full">
                  <div className="relative h-[180px] w-full overflow-hidden sm:h-[195px] xl:h-[214px]">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="absolute -bottom-7 right-3 z-20 h-14 w-14 drop-shadow-md select-none pointer-events-none sm:-bottom-8 sm:h-16 sm:w-16">
                    <Image
                      src={space.badge}
                      alt=""
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col px-4 pb-6 pt-9 sm:px-5 sm:pb-7 sm:pt-10">
                  <h3 className="mb-2 font-sans text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] font-bold leading-[1.498] text-black">
                    {space.title}
                  </h3>
                  <p className="font-sans text-[14px] sm:text-[16px] lg:text-[19px] xl:text-[22px] font-normal leading-[1.498] text-black">
                    {space.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
