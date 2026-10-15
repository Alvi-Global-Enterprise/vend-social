"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function WhyChooseUs() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "24/7 CONVENIENCE",
      desc: "Essentials available when you need them.",
      image: "/images/Rectangle 123.png",
    },
    {
      num: "02",
      title: "QUALITY PRODUCTS",
      desc: "Curated drinks, snacks and everyday essentials.",
      image: "/images/Rectangle 124.png",
    },
    {
      num: "03",
      title: "FULLY MANAGED",
      desc: "Installation, maintenance and restocking included.",
      image: "/images/Rectangle 125.png",
    },
    {
      num: "04",
      title: "DESIGNED FOR PEOPLE",
      desc: "Solutions for busy, modern lifestyles.",
      image: "/images/Rectangle 126.png",
    },
    {
      num: "05",
      title: "LOCAL MANCHESTER SERVICE",
      desc: "Focused on businesses and communities in MCR.",
      image: "/images/Rectangle 127.png",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading Centered */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="text-[#E300FF] font-bold text-sm md:text-[23px] tracking-[0.32em] uppercase mb-3">
            WHY VEND-SOCIALMCR
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 text-center">
            <span className="text-black text-4xl sm:text-5xl md:text-[65px] font-extrabold uppercase leading-none tracking-tight">
              Why
            </span>
            <span className="font-cookie text-6xl sm:text-7xl md:text-[115px] leading-none gradient-text-purple-magenta px-2">
              Choose
            </span>
            <span className="text-black text-4xl sm:text-5xl md:text-[65px] font-extrabold uppercase leading-none tracking-tight">
              Us?
            </span>
          </div>
        </div>

        {/* 5 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 relative">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(index)}
                className={`relative flex flex-col justify-between cursor-pointer group transition-all duration-300 lg:px-6 xl:px-8 ${
                  index !== 0 ? "lg:border-l lg:border-[#D9D9D9]" : ""
                }`}
              >
                <div>
                  {/* Big Number */}
                  <div className="text-black font-extrabold text-5xl md:text-[65px] leading-none mb-4 group-hover:text-[#E300FF] transition-colors">
                    {step.num}
                  </div>

                  {/* Title in Magenta */}
                  <h3 className="text-[#E300FF] font-extrabold text-[18px] md:text-[20px] tracking-[0.01em] uppercase leading-tight mb-2.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black/50 text-[16px] md:text-[18px] leading-[1.3] font-normal mb-6 min-h-[50px]">
                    {step.desc}
                  </p>
                </div>

                {/* Thumbnail Image */}
                <div className="space-y-5">
                  <div className="relative w-full h-[172px] rounded-[16px] overflow-hidden shadow-md">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Action Chevron Button */}
                  <div className="pt-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-black text-white shadow-lg scale-105"
                          : "bg-black/10 text-black/40 group-hover:bg-black group-hover:text-white"
                      }`}
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.8]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
