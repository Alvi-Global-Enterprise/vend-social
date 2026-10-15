"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CtaBannerProps {
  onOpenEnquiry?: () => void;
}

export default function CtaBanner({ onOpenEnquiry }: CtaBannerProps) {
  return (
    <section className="relative w-full min-h-[464px] bg-black text-white overflow-hidden flex items-center">
      {/* Background Image: Figma Group 215.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Group 215.png"
          alt="Ready for Smarter Vending"
          fill
          className="object-cover object-center lg:object-right"
        />
        {/* Subtle dark gradient overlay to guarantee text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 w-full py-16 lg:py-20">
        <div className="max-w-3xl space-y-5">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#E300FF] font-bold text-sm md:text-[21px] tracking-[0.32em] uppercase">
              READY FOR SMARTER VENDING
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-[54px] font-extrabold capitalize leading-[1.1] tracking-tight">
              Let’s create a convenient
            </h2>
            <div className="font-cookie text-5xl sm:text-6xl md:text-[86px] leading-[0.95] gradient-text-purple-magenta capitalize pt-1">
              solution for your space
            </div>
          </motion.div>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg md:text-[23px] font-normal leading-[1.4] tracking-[0.01em] capitalize"
          >
            For your customers, residents, staff or visitors.
          </motion.p>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* Call Us */}
            <a
              href="tel:07503777838"
              className="inline-flex items-center justify-center gap-2.5 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-base md:text-[18px] px-7 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(227,0,255,0.4)]"
            >
              <Phone className="w-5 h-5 fill-black stroke-black" />
              <span>Call Us</span>
            </a>

            {/* Send an enquiry */}
            <button
              onClick={onOpenEnquiry}
              className="group inline-flex items-center justify-center gap-3 border border-white hover:border-[#E300FF] hover:bg-white/10 text-white font-bold text-base md:text-[18px] px-7 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <span>Send an enquiry</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
