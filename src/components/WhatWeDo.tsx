"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      description: "Fresh, convenient water solutions for workplaces, gyms, residential spaces and more.",
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
    <section id="services" className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          {/* Left Title */}
          <div>
            <div className="text-[#E300FF] font-bold text-sm md:text-[23px] tracking-[0.32em] uppercase mb-3">
              WHAT WE DO
            </div>
            <h2 className="text-black text-4xl sm:text-5xl md:text-[65px] font-extrabold uppercase leading-[1.05] tracking-tight">
              Complete Vending
            </h2>
            <div className="font-cookie text-6xl sm:text-7xl md:text-[110px] leading-[0.95] gradient-text-solutions capitalize pt-1">
              Solutions
            </div>
          </div>

          {/* Right Description */}
          <div className="max-w-xl lg:text-right">
            <p className="text-black/85 text-lg md:text-[22px] font-normal leading-[1.45] tracking-[0.01em]">
              We provide fully managed vending solutions designed around modern lifestyles — from vending machines and coffee to fresh water and everyday essentials.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-[20px] p-8 md:p-9 flex flex-col justify-between min-h-[380px] border border-gray-100 transition-all duration-300 card-shadow hover:card-shadow-hover hover:border-[#E300FF]/30"
            >
              <div>
                {/* Exact Figma Extracted Icon in pink/magenta */}
                <div className="w-14 h-14 rounded-2xl bg-[#E300FF]/10 flex items-center justify-center mb-8 p-3 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-black font-bold text-[24px] leading-snug mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-black/75 text-[18px] leading-[1.5] font-normal">
                  {service.description}
                </p>
              </div>

              {/* Bottom Divider & Learn More */}
              <div className="pt-6">
                <div className="w-full h-[1.5px] bg-[#D9D9D9] mb-5 group-hover:bg-[#E300FF]/40 transition-colors" />
                <button
                  onClick={() => onLearnMore && onLearnMore(service.title)}
                  className="inline-flex items-center gap-2.5 text-[#E300FF] font-bold text-[17px] tracking-wider uppercase group-hover:gap-4 transition-all"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
