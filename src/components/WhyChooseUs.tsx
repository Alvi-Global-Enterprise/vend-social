"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const steps = [
    {
      num: "01",
      title: "24/7 Convenience",
      desc: "Essentials available when you need them.",
      image: "/images/Rectangle 123.png",
    },
    {
      num: "02",
      title: "Quality Products",
      desc: "Curated drinks, snacks and everyday essentials.",
      image: "/images/Rectangle 124.png",
    },
    {
      num: "03",
      title: "Fully Managed",
      desc: "Installation, maintenance and restocking included.",
      image: "/images/Rectangle 125.png",
    },
    {
      num: "04",
      title: "Designed for People",
      desc: "Solutions for busy, modern lifestyles.",
      image: "/images/Rectangle 126.png",
    },
    {
      num: "05",
      title: "Local Manchester Service",
      desc: "Focused on businesses and communities in MCR.",
      image: "/images/Rectangle 127.png",
    },
  ];

  return (
    <section className="relative w-full bg-white pt-6 pb-24 overflow-hidden">
      <div className="max-w-[1746px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Vector 13 Divider Line */}
        <div className="w-full h-[1px] bg-black opacity-30 mb-12 sm:mb-16" />

        {/* Section Heading Centered */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <div className="text-[#E300FF] font-bold text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[23px] tracking-[0.22em] sm:tracking-[0.32em] uppercase mb-2 sm:mb-3">
            WHY VEND-SOCIAL MCR
          </div>

          <h2 className="text-black font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-[54px] xl:text-[65px] leading-[1.1] sm:leading-[1.09] tracking-[0.01em]">
            Why Choose Us?
          </h2>
        </div>

        {/* 5 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-0 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col justify-between group lg:px-3 xl:px-6 2xl:px-8 ${
                index !== 0 ? "lg:border-l lg:border-[#D9D9D9]" : ""
              }`}
            >
              <div>
                {/* Big Number */}
                <div className="text-black font-extrabold text-4xl sm:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[65px] leading-[1.09] tracking-[0.01em] mb-2 sm:mb-3 xl:mb-4">
                  {step.num}
                </div>

                {/* Subtitle in Magenta */}
                <h3 className="text-[#E300FF] font-extrabold text-base sm:text-lg lg:text-[16px] xl:text-[18px] 2xl:text-[20px] tracking-[0.01em] uppercase leading-[1.15] mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-black/50 font-normal text-xs sm:text-sm md:text-base lg:text-[13px] xl:text-[16px] 2xl:text-[20px] leading-[1.35] mb-4 sm:mb-6 min-h-[auto] sm:min-h-[44px] lg:min-h-[52px]">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Thumbnail Image with Fluid Aspect Ratio */}
              <div className="relative w-full aspect-[272/172] rounded-[16px] overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
