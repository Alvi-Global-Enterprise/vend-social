"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface WhatWeDoProps {
  onLearnMore?: (service: string) => void;
}

export default function WhatWeDo({ onLearnMore }: WhatWeDoProps) {
  const services = [
    {
      id: "vending",
      title: "Vending Machines",
      description: "Drinks, snacks, food and everyday essentials, available when you need them.",
      icon: "/images/Vector-1.png",
      width: 32,
      height: 32,
    },
    {
      id: "coffee",
      title: "Coffee Solutions",
      description: "Premium coffee and hot beverage solutions for busy people and modern spaces.",
      icon: "/images/Page-1.png",
      width: 32,
      height: 32,
    },
    {
      id: "water",
      title: "Water Solutions",
      description: "Cool and Hydrating solutions for workplaces, gyms, residential spaces and more.",
      icon: "/images/Vector-2.png",
      width: 28,
      height: 34,
    },
    {
      id: "managed",
      title: "Fully Managed Service",
      description: "From supply and installation to maintenance and restocking, we take care of everything.",
      icon: "/images/Vector.png",
      width: 32,
      height: 32,
    },
  ];

  return (
    <section id="services" className="relative w-full bg-white pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[1746px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        {/* Vector 10 Divider Line */}
        <div className="w-full h-[1px] bg-black opacity-30 mb-8 sm:mb-12 lg:mb-16" />

        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-20">
          {/* Left Title */}
          <div>
            <div className="text-[#E300FF] font-bold text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[23px] tracking-[0.22em] sm:tracking-[0.32em] uppercase mb-2 sm:mb-3">
              WHAT WE DO
            </div>
            <h2 className="text-black font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-[52px] xl:text-[65px] leading-[1.1] sm:leading-[1.08] tracking-[0.01em] capitalize">
              <div>Complete Vending</div>
              <div>Solutions</div>
            </h2>
          </div>

          {/* Right Description */}
          <div className="max-w-2xl lg:text-right">
            <p className="text-black font-normal text-sm sm:text-base md:text-[17px] lg:text-[19px] xl:text-[23px] leading-[1.5] tracking-[0.01em]">
              We offer a free consultation at your convenience, identifying your specific business requirements of drinks snacks, confectionary, essential electrical items. Our machines are easy and effective to use with card payment facilities for safety, convenience and efficiency.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => onLearnMore && onLearnMore(service.title)}
              className="bg-white rounded-[20px] p-5 sm:p-6 lg:p-6 xl:p-8 flex flex-col justify-between min-h-[auto] sm:min-h-[260px] lg:min-h-[280px] xl:min-h-[319px] shadow-[0px_0px_25px_rgba(0,0,0,0.14)] hover:shadow-[0px_0px_35px_rgba(227,0,255,0.25)] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#E300FF]/30"
            >
              <div>
                {/* Purple Icon */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 xl:w-12 xl:h-12 flex items-center justify-start mb-3 sm:mb-5 xl:mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-black font-bold text-base sm:text-lg lg:text-[20px] xl:text-[24px] leading-[1.3] mb-2 sm:mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-black font-normal text-xs sm:text-sm lg:text-[15px] xl:text-[18px] 2xl:text-[22px] leading-[1.45]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
