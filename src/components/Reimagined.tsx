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
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1746px] px-4 sm:px-8 lg:px-12">
        {/* Top divider */}
        <div className="mb-8 h-px w-full bg-black/25 sm:mb-10 lg:mb-12" />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Left: copy + CTA */}
          <div className="flex flex-col justify-center py-2 sm:py-4 lg:py-6 lg:pr-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="font-sans text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[65px] font-extrabold capitalize leading-[1.09] tracking-[0.01em] text-black"
            >
              Complete Vending
              <br />
              Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-5 max-w-[677px] font-sans text-[16px] sm:text-[18px] lg:text-[21px] xl:text-[23px] font-normal leading-[1.41] tracking-[0.01em] text-black sm:mt-6"
            >
              Vend-Social MCR provides for today&apos;s fast moving, seamless
              city living.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="mt-7 sm:mt-8"
            >
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="
                  inline-flex h-[48px] items-center justify-center gap-3
                  rounded-full bg-[#E300FF] px-8
                  font-sans text-[16px] sm:text-[18px] leading-[20px] font-bold text-black
                  transition-all duration-300
                  hover:scale-[1.03] hover:bg-[#eb2eff] active:scale-[0.98]
                "
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="h-4 w-4 stroke-[2.8]" />
              </button>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full"
          >
            <div className="relative aspect-[876/511] min-h-[220px] w-full overflow-hidden rounded-[16px] sm:min-h-[300px] sm:rounded-[20px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[440px]">
              <Image
                src="/images/complete-vending.png"
                alt="Contactless payment on a VEND-SOCIAL MCR vending machine"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center select-none"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="mt-8 h-px w-full bg-black/25 sm:mt-10 lg:mt-12" />
      </div>
    </section>
  );
}
