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
    <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="mx-auto w-full max-w-[1746px] px-4 sm:px-8 lg:px-12">
        {/* Top divider */}
        <div className="mb-10 h-px w-full bg-black/25 sm:mb-12 lg:mb-16" />

        {/* Centered header */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <p className="mb-2 font-sans text-[15px] sm:text-[18px] lg:text-[23px] font-bold uppercase tracking-[0.32em] text-[#E300FF] leading-[25px]">
            WHY VEND-SOCIAL MCR
          </p>
          <h2 className="font-sans text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[65px] font-extrabold leading-[1.09] tracking-[0.01em] text-black">
            Why Choose Us?
          </h2>
        </div>

        {/* 5 columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col justify-between group lg:px-3 xl:px-5 2xl:px-7 ${
                index !== 0 ? "lg:border-l lg:border-[#D9D9D9]" : ""
              }`}
            >
              <div className="mb-5 flex-1 sm:mb-6">
                <div className="mb-3 font-sans text-[42px] sm:text-[50px] lg:text-[56px] xl:text-[65px] font-extrabold leading-[1.09] tracking-[0.01em] text-black">
                  {step.num}
                </div>

                <h3 className="mb-2.5 font-sans text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[20px] font-extrabold uppercase leading-[1.15] tracking-[0.01em] text-[#E300FF]">
                  {step.title}
                </h3>

                <p className="min-h-[52px] font-sans text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-[1.29] text-black/50">
                  {step.desc}
                </p>
              </div>

              <div className="relative aspect-[272/172] w-full overflow-hidden rounded-[16px]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
