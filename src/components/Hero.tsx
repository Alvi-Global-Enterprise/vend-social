"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[820px] md:min-h-[880px] lg:min-h-[920px] xl:min-h-[960px] w-full bg-black text-white overflow-hidden pt-32 lg:pt-36 pb-16 flex items-center"
    >
      {/* Background Image: Figma Group 195.png covering full section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Group 195.png"
          alt="Smart Vending Available 24/7"
          fill
          priority
          className="object-cover object-right md:object-center lg:object-right select-none pointer-events-none"
        />
        {/* Subtle radial/linear dark gradient on far-left to ensure perfect typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent lg:w-3/5 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 md:space-y-7">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#E300FF] font-bold text-[15px] sm:text-[17px] md:text-[18px] tracking-[0.32em] uppercase">
              CONVENIENT • FRESH • ALWAYS ON
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight uppercase leading-[1.06]">
              SMART VENDING
            </h1>
            <div className="font-cookie text-[#E300FF] text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.95] gradient-text-purple-magenta select-none pt-1">
              Available 24/7
            </div>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-base sm:text-lg md:text-[22px] lg:text-[24px] font-normal leading-[1.42] max-w-2xl tracking-[0.01em]"
          >
            Premium vending, coffee and water solutions for modern businesses, gyms, residential communities and events across Manchester.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Call Us Button */}
            <a
              href="tel:07503777838"
              className="inline-flex items-center justify-center gap-2.5 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-[17px] md:text-[18px] px-8 h-[48px] rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(227,0,255,0.45)]"
            >
              <Phone className="w-4 h-4 fill-black stroke-black" />
              <span>Call Us</span>
            </a>

            {/* Send An Enquiry Button */}
            <button
              onClick={onOpenEnquiry}
              className="group inline-flex items-center justify-center gap-3 border border-white hover:border-[#E300FF] hover:bg-white/10 text-white font-bold text-[17px] md:text-[18px] px-7 h-[48px] rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <span>Send An Enquiry</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Exact Figma Feature Badges (bare icons, no circles, matching screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 flex flex-wrap items-center gap-8 md:gap-10 lg:gap-12"
          >
            {/* 1: Supply & Installation (Crossed tools) */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/Group.png"
                  alt="Supply & Installation icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-white font-bold text-[13px] sm:text-[15px] md:text-[16px] leading-[1.25] tracking-[0.01em] uppercase">
                <div>SUPPLY &amp;</div>
                <div>INSTALLATION</div>
              </div>
            </div>

            {/* 2: Maintenance & Servicing (Flower cog/gear) */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/Vector(1).png"
                  alt="Maintenance & Servicing icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-white font-bold text-[13px] sm:text-[15px] md:text-[16px] leading-[1.25] tracking-[0.01em] uppercase">
                <div>MAINTENANCE</div>
                <div>&amp; SERVICING</div>
              </div>
            </div>

            {/* 3: Restocking & Support (3D Box) */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-8 h-6 sm:w-9 sm:h-7 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/Group 265.png"
                  alt="Restocking & Support icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-white font-bold text-[13px] sm:text-[15px] md:text-[16px] leading-[1.25] tracking-[0.01em] uppercase">
                <div>RESTOCKING</div>
                <div>&amp; SUPPORT</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
