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
      description:
        "Drinks, snacks, food and everyday essentials, available when you need them.",
      icon: "/images/Vector-1.png",
      width: 36,
      height: 36,
    },
    {
      id: "coffee",
      title: "Coffee Solutions",
      description:
        "Premium coffee and hot beverage solutions for busy people and modern spaces.",
      icon: "/images/Page-1.png",
      width: 36,
      height: 36,
    },
    {
      id: "water",
      title: "Water Solutions",
      description:
        "Cool and Hydrating solutions for workplaces, gyms, residential spaces and more.",
      icon: "/images/Vector-2.png",
      width: 30,
      height: 38,
    },
    {
      id: "managed",
      title: "Fully Managed Service",
      description:
        "From supply and installation to maintenance and restocking, we take care of everything.",
      icon: "/images/Vector.png",
      width: 36,
      height: 36,
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1746px] px-4 sm:px-8 lg:px-12">
        {/* Divider */}
        <div className="mb-10 h-px w-full bg-black/25 sm:mb-14 lg:mb-16" />

        {/* Header: title left + description right */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:mb-16 lg:flex-row lg:items-end lg:gap-14 xl:gap-20">
          <div className="max-w-[700px] shrink-0">
            <p className="mb-2 font-sans text-[15px] sm:text-[18px] lg:text-[23px] font-bold uppercase tracking-[0.32em] text-[#E300FF] leading-[25px]">
              WHAT WE DO
            </p>
            <h2 className="font-sans text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[65px] font-extrabold capitalize leading-[1.09] tracking-[0.01em] text-black">
              Complete Vending
              <br />
              Solutions
            </h2>
          </div>

          <div className="w-full max-w-[882px] lg:ml-auto">
            <p className="font-sans text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[23px] font-normal leading-[1.41] tracking-[0.01em] text-black lg:text-right">
              We offer a free consultation at your convenience, identifying your specific business requirements of drinks snacks, confectionary, essential electrical items. Our machines are easy and effective to use with card payment facilities for safety, convenience and efficiency.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => onLearnMore?.(service.title)}
              className="
                flex cursor-pointer flex-col justify-start
                rounded-[20px] bg-white p-6 sm:p-7 xl:p-8
                min-h-[260px] sm:min-h-[290px] xl:min-h-[320px]
                shadow-[0px_0px_25px_rgba(0,0,0,0.20)]
                transition-all duration-300
                hover:shadow-[0px_10px_35px_rgba(227,0,255,0.18)]
              "
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-start sm:h-11 sm:w-11">
                <Image
                  src={service.icon}
                  alt=""
                  width={service.width}
                  height={service.height}
                  className="h-auto w-auto object-contain"
                />
              </div>

              <h3 className="mb-3 font-sans text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] font-bold leading-[1.498] text-black">
                {service.title}
              </h3>

              <p className="font-sans text-[15px] sm:text-[17px] lg:text-[20px] xl:text-[23px] font-normal leading-[1.498] text-black">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
