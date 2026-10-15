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
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden text-black">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, description and CTA */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-6 lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#E300FF] font-bold text-sm sm:text-base md:text-[20px] tracking-[0.32em] uppercase">
                WHO WE SERVE
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h2 className="text-black text-5xl sm:text-6xl md:text-[65px] font-extrabold leading-none tracking-tight">
                Solutions For
              </h2>
              <div className="font-cookie text-6xl sm:text-7xl md:text-[105px] lg:text-[115px] leading-[0.92] gradient-text-purple-magenta capitalize pt-1">
                Every Space
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black text-base sm:text-lg md:text-[20px] font-normal leading-[1.45] tracking-[0.01em] max-w-[460px]"
            >
              From premium residential properties to fitness centres, colleges and corporate events - we bring convenience to the places that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={onOurServicesClick}
                className="group inline-flex items-center gap-3 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-[17px] md:text-[18px] px-8 h-[48px] rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_22px_rgba(227,0,255,0.4)]"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 stroke-[2.8] transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 4 Photo Cards Grid */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
            {spaces.map((space, index) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_35px_rgba(227,0,255,0.15)] border border-gray-100 flex flex-col justify-between min-h-[415px] transition-all duration-300"
              >
                <div>
                  {/* Photo & Badge Container (NO overflow-hidden on this wrapper so the badge is NOT clipped!) */}
                  <div className="relative w-full h-[215px]">
                    {/* Inner Photo wrapper with rounded top corners and overflow-hidden for the image only */}
                    <div className="relative w-full h-full rounded-t-[24px] overflow-hidden">
                      <Image
                        src={space.image}
                        alt={space.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Circular Badge - sits on bottom-right, half on image and half on card body, 100% visible with NO clipping! */}
                    <div className="absolute -bottom-[33px] right-4 w-[68px] h-[68px] z-20 drop-shadow-md select-none pointer-events-none">
                      <Image
                        src={space.badge}
                        alt={`${space.title} badge`}
                        width={68}
                        height={68}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Card Content with top padding so title has plenty of room below the overlapping badge */}
                  <div className="px-6 pt-9 pb-6">
                    <h3 className="text-black font-extrabold text-[22px] md:text-[24px] mb-2 leading-tight">
                      {space.title}
                    </h3>
                    <p className="text-black/75 text-[15px] md:text-[17px] leading-[1.4] font-normal">
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
