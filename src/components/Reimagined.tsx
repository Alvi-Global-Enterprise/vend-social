"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ReimaginedProps {
  onOpenEnquiry?: () => void;
  onViewLocations?: () => void;
}

export default function Reimagined({ onOpenEnquiry }: ReimaginedProps) {
  return (
    <section
      id="about"
      className="relative w-full min-h-[580px] md:min-h-[640px] lg:min-h-[669px] bg-black text-white overflow-hidden flex items-center py-16 md:py-20"
    >
      {/* Background Image: Exact Figma Mask group.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Mask group.png"
          alt="Vending, Reimagined"
          fill
          priority
          className="object-cover object-right md:object-right select-none pointer-events-none"
        />
        {/* Subtle black fallback on far-left for seamless responsiveness */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-black pointer-events-none hidden md:block" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 w-full">
        {/* Left Content Area matching user screenshot */}
        <div className="max-w-xl lg:max-w-[620px] space-y-6 md:space-y-7">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#E300FF] font-bold text-sm sm:text-base md:text-[20px] tracking-[0.32em] uppercase">
              MORE THAN CONVENIENCE
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h2 className="text-white text-5xl sm:text-6xl md:text-[68px] lg:text-[72px] font-extrabold leading-none tracking-tight">
              Vending,
            </h2>
            <div className="font-cookie text-6xl sm:text-7xl md:text-[105px] lg:text-[115px] leading-[0.92] gradient-text-purple-magenta capitalize pt-1">
              Reimagined
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base sm:text-lg md:text-[20px] lg:text-[21px] font-normal leading-[1.48] tracking-[0.01em] max-w-[580px]"
          >
            We see vending as more than just a machine - it’s a convenience, a social activity and a way to keep people connected. Essential refreshments and everyday products, right where you need them - helping busy people save time, stay refreshed and stay connected.
          </motion.p>

          {/* Make an Enquiry Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            <button
              onClick={onOpenEnquiry}
              className="group inline-flex items-center gap-3 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-[17px] md:text-[18px] px-8 h-[48px] rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(227,0,255,0.45)]"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-4 h-4 stroke-[2.8] transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
