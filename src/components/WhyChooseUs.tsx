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
          <p className="mb-2 font-sans text-[12px] font-bold uppercase tracking-[0.28em] text-[#E300FF] sm:mb-3 sm:text-[13px] sm:tracking-[0.32em]">
            WHY VEND-SOCIAL MCR
          </p>
          <h2
            className="font-sans text-[32px] font-black leading-[1.08] tracking-[-0.015em] text-black sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px]"
            style={{ fontWeight: 900, WebkitTextStroke: "0.3px currentColor" }}
          >
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
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`
                group relative flex flex-col
                lg:px-4 xl:px-5
                ${index !== 0 ? "lg:border-l lg:border-[#D9D9D9]" : ""}
              `}
            >
              <div className="mb-5 flex-1 sm:mb-6">
                <div className="mb-2 font-sans text-[40px] font-black leading-none tracking-[-0.02em] text-black sm:mb-3 sm:text-[44px] lg:text-[42px] xl:text-[48px]">
                  {step.num}
                </div>

                <h3 className="mb-2 font-sans text-[14px] font-extrabold uppercase leading-[1.2] tracking-[0.01em] text-[#E300FF] sm:text-[15px] xl:text-[16px]">
                  {step.title}
                </h3>

                <p className="min-h-[40px] font-sans text-[13px] font-normal leading-[1.4] text-black/45 sm:min-h-[44px] sm:text-[14px] lg:text-[13px] xl:text-[14px]">
                  {step.desc}
                </p>
              </div>

              <div className="relative aspect-[272/172] w-full overflow-hidden rounded-[14px] sm:rounded-[16px]">
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
