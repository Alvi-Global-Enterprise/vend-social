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
    <section id="about" className="relative w-full bg-white pt-6 pb-24 overflow-hidden text-black">
      <div className="max-w-[1746px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Vector 12 Divider Line */}
        <div className="w-full h-[1px] bg-black opacity-30 mb-12 sm:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Heading, description and CTA */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-5 sm:space-y-6 lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#E300FF] font-bold text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[23px] tracking-[0.25em] sm:tracking-[0.32em] uppercase">
                ABOUT
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-[46px] xl:text-[56px] 2xl:text-[65px] leading-[1.1] sm:leading-[1.09] tracking-[0.01em] uppercase">
                <div>A FAMILY-RUN</div>
                <div>BUSINESS</div>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black font-normal text-sm sm:text-base md:text-[17px] xl:text-[18px] leading-[1.5] sm:leading-[1.41] tracking-[0.01em] max-w-lg"
            >
              VEND-SOCIAL MCR is a family run business. With over 30 years of business and professional experience, we have taken exciting and innovative concepts to successful reality in high profile commercial locations. we understand the importance of connection and convenience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-1 sm:pt-2"
            >
              <button
                onClick={onOurServicesClick}
                className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-sm sm:text-base xl:text-[18px] px-6 sm:px-8 h-[44px] sm:h-[48px] rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.8]" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 4 Vertical Space Cards */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-6">
            {spaces.map((space, index) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[20px] shadow-[0px_0px_25px_rgba(0,0,0,0.18)] hover:shadow-[0px_0px_35px_rgba(227,0,255,0.25)] flex flex-col justify-between min-h-[auto] sm:min-h-[370px] xl:min-h-[402px] transition-all duration-300 border border-transparent hover:border-[#E300FF]/30"
              >
                <div>
                  {/* Photo with rounded top corners + overlapping circular icon badge */}
                  <div className="relative w-full h-[180px] sm:h-[200px] xl:h-[214px]">
                    <div className="relative w-full h-full rounded-t-[20px] overflow-hidden">
                      <Image
                        src={space.image}
                        alt={space.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Circular Badge overlapping image on bottom-right */}
                    <div className="absolute -bottom-[28px] sm:-bottom-[32px] xl:-bottom-[35px] right-3 w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] xl:w-[70px] xl:h-[70px] z-20 drop-shadow-md select-none pointer-events-none">
                      <Image
                        src={space.badge}
                        alt={`${space.title} icon`}
                        width={70}
                        height={70}
                        style={{ width: "auto", height: "auto" }}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-4 sm:px-5 xl:px-6 pt-7 sm:pt-8 xl:pt-9 pb-5 sm:pb-6">
                    <h3 className="text-black font-bold text-lg sm:text-xl xl:text-[22px] 2xl:text-[24px] leading-[1.3] mb-2 sm:mb-2.5">
                      {space.title}
                    </h3>
                    <p className="text-black font-normal text-xs sm:text-sm md:text-[15px] xl:text-[18px] 2xl:text-[20px] leading-[1.45]">
                      {space.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
