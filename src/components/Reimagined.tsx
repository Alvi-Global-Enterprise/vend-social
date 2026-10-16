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
    <section className="relative w-full bg-white pt-6 pb-20 overflow-hidden">
      <div className="max-w-[1746px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Vector 11 Divider Line */}
        <div className="w-full h-[1px] bg-black opacity-30 mb-12 sm:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-[54px] xl:text-[65px] leading-[1.1] sm:leading-[1.09] tracking-[0.01em] capitalize">
                <div>Complete Vending</div>
                <div>Solutions</div>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-black font-normal text-base sm:text-lg md:text-xl lg:text-[21px] xl:text-[23px] leading-[1.45] sm:leading-[1.41] tracking-[0.01em] max-w-xl"
            >
              Vend-Social MCR provides for today&apos;s fast moving, seamless city living.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-1 sm:pt-2"
            >
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-sm sm:text-base xl:text-[18px] px-6 sm:px-8 h-[44px] sm:h-[48px] rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.8]" />
              </button>
            </motion.div>
          </div>

          {/* Right Image Column (complete-vending.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <div className="relative w-full aspect-[876/511] min-h-[200px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px] xl:min-h-[490px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-xl">
              <Image
                src="/images/complete-vending.png"
                alt="Contactless Payment Vending Machine"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center select-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
