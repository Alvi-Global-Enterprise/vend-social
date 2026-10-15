"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface WhatYouCanFindProps {
  onExploreProducts?: () => void;
}

export default function WhatYouCanFind({
  onExploreProducts,
}: WhatYouCanFindProps) {
  const categories = [
    {
      id: "drinks",
      title: "DRINKS",
      image: "/images/Rectangle 100.png",
      tracking: "tracking-[0.43em]",
    },
    {
      id: "snacks",
      title: "SNACKS",
      image: "/images/Rectangle 107.png",
      tracking: "tracking-[0.43em]",
    },
    {
      id: "fresh-food",
      title: "FRESH FOOD",
      image: "/images/Rectangle 112.png",
      tracking: "tracking-[0.26em]",
    },
    {
      id: "healthy",
      title: "HEALTHY",
      image: "/images/Rectangle 114.png",
      tracking: "tracking-[0.43em]",
    },
    {
      id: "essentials",
      title: "ESSENTIALS",
      image: "/images/Rectangle 116.png",
      tracking: "tracking-[0.26em]",
    },
    {
      id: "chargers",
      title: "CHARGERS",
      image: "/images/Rectangle 115.png",
      tracking: "tracking-[0.26em]",
    },
  ];

  return (
    <section className="relative w-full bg-black py-24 lg:py-32 overflow-hidden text-white min-h-[669px] flex items-center">
      {/* Background Image: Figma Group 298.png */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/Group 298.png"
          alt="What You Can Find Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-6 lg:pr-4">
            <div className="text-[#E300FF] font-bold text-sm md:text-[23px] tracking-[0.32em] uppercase">
              WHAT YOU CAN FIND
            </div>

            <div>
              <h2 className="text-[#EDEDEC] text-4xl sm:text-5xl md:text-[65px] font-extrabold uppercase leading-[1.05] tracking-tight">
                Your Everyday
              </h2>
              <div className="font-cookie text-6xl sm:text-7xl md:text-[110px] leading-[0.95] gradient-text-purple-magenta capitalize pt-1">
                Essentials
              </div>
            </div>

            <p className="text-white/70 text-lg md:text-[22px] font-normal leading-[1.45] tracking-[0.01em]">
              From refreshing drinks to healthy snacks, we&apos;ve got you covered. Quality products, trusted brands and something for every lifestyle.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreProducts}
                className="group inline-flex items-center gap-3 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-base md:text-[18px] px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(227,0,255,0.4)]"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x3 Grid */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-[19px] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-300 cursor-pointer"
                onClick={onExploreProducts}
              >
                {/* Product Image */}
                <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Bottom Magenta Bar (Exact Figma styling: height ~63px, #E300FF, black uppercase bold text) */}
                <div className="bg-[#E300FF] group-hover:bg-[#eb2eff] h-[60px] flex items-center justify-center px-4 transition-colors">
                  <span
                    className={`text-black font-extrabold text-[18px] md:text-[20px] uppercase text-center ${category.tracking} group-hover:tracking-widest transition-all`}
                  >
                    {category.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
