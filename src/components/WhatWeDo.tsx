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
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:mb-16 lg:flex-row lg:items-end lg:gap-16 xl:gap-24">
          <div className="max-w-[560px] shrink-0">
            <p className="mb-2 font-sans text-[12px] font-bold uppercase tracking-[0.28em] text-[#E300FF] sm:mb-3 sm:text-[13px] sm:tracking-[0.32em]">
              WHAT WE DO
            </p>
            <h2 className="font-sans text-[32px] font-black leading-[1.08] tracking-[-0.015em] text-black sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px]">
              Complete Vending
              <br />
              Solutions
            </h2>
          </div>

          <div className="w-full max-w-[560px] lg:ml-auto lg:max-w-[520px] xl:max-w-[560px]">
            <p className="font-sans text-[14px] font-normal leading-[1.55] text-black sm:text-[15px] lg:text-[16px] lg:leading-[1.6]">
              We offer a free consultation at your convenience, identifying
              your specific business requirements of drinks snacks,
              confectionary, essential electrical items. Our machines are easy
              and effective to use with card payment facilities for safety,
              convenience and efficiency.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
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
                flex min-h-[220px] cursor-pointer flex-col
                rounded-[18px] bg-white p-6
                shadow-[0_4px_24px_rgba(0,0,0,0.08)]
                transition-shadow duration-300
                hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
                sm:min-h-[240px] sm:p-7
                lg:min-h-[260px] lg:rounded-[20px] lg:p-8
              "
            >
              <div className="mb-5 flex h-9 w-9 items-center justify-start sm:mb-6 sm:h-10 sm:w-10">
                <Image
                  src={service.icon}
                  alt=""
                  width={service.width}
                  height={service.height}
                  className="h-auto w-auto object-contain"
                />
              </div>

              <h3 className="mb-2.5 font-sans text-[17px] font-bold leading-snug text-black sm:text-[18px] lg:text-[19px]">
                {service.title}
              </h3>

              <p className="font-sans text-[13px] font-normal leading-[1.5] text-black/90 sm:text-[14px] lg:text-[14.5px] lg:leading-[1.55]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
