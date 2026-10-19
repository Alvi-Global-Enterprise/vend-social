"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenEnquiry?: () => void;
}

const featureCards = [
  { title: "PREMIUM PRODUCTS", bgDark: true },
  { title: "CONVENIENT ACCESS", bgDark: false },
  { title: "CONNECTED SPACES", bgDark: false },
  { title: "SUSTAINABLE SOLUTIONS", bgDark: false },
];

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative w-full bg-white pt-[88px] sm:pt-[96px] lg:pt-[115px] xl:pt-[148px] pb-6 sm:pb-8 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-[1746px] px-4 sm:px-8 lg:px-12">
        {/* HERO BANNER */}
        <div
          className="
            relative w-full 
            rounded-2xl sm:rounded-3xl lg:rounded-[28px]
            h-[500px]
            /* Mobile/sm: vw-based height */
            // h-[55vw] min-h-[240px] max-h-[360px]
            // sm:h-[46vw] sm:min-h-[300px] sm:max-h-[440px]
            /* md+: aspect ratio */
            // md:h-auto md:min-h-0 md:max-h-none
            // md:aspect-[16/9]
            // lg:aspect-[16/9]
            // xl:aspect-[1742/742]
          "
        >
          {/* Desktop/Laptop image (lg+) */}
          <Image
            src="/images/hero-image.png"
            alt="VEND-SOCIAL MCR smart vending machines overlooking Manchester"
            fill
            priority
            sizes="(max-width: 1024px) 0px, 1742px"
            className="object-cover mt-20 sm:mt-24 lg:mt-28 object-center hidden lg:block"
          />

          {/* Tablet/Mobile image (< lg) */}
          <Image
            src="/images/hero-image1.png"
            alt="VEND-SOCIAL MCR smart vending machines overlooking Manchester"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 0px"
            className="object-cover object-center block lg:hidden"
          />

          {/* Overlaid panel on large devices */}
          <div
            className="
              hidden lg:block
              absolute left-0 top-0 z-10
              bg-transparent
              w-[calc(100%-40px)]
              sm:w-[calc(100%-56px)]
              lg:w-[82%]
              xl:w-[76%]
              px-4 py-4
              sm:px-6 sm:py-4
              lg:px-8 lg:py-6
              xl:px-0 xl:py-7
            "
          >
            <div className="flex mt-4 lg:mt-8 items-start justify-between ">
              {/* HEADING (Figma: font-weight 800, font-size 25px, line-height 129%, letter-spacing 0.01em) */}
              <div className="flex-shrink-0 w-[40%] sm:w-[36%] lg:w-[32%] xl:w-[30%]">
                <h1 className="font-sans font-extrabold tracking-[0.01em] text-black capitalize leading-[1.29] text-[18px] sm:text-[21px] lg:text-[23px] xl:text-[25px]">
                  Premium Vending
                  <br />
                  In MCR - Part Of
                  <br />
                  A Lifestyle!
                </h1>
              </div>

              {/* DESCRIPTION (Figma: font-weight 400, font-size 23px, line-height 122%, text-align right, letter-spacing 0.01em) */}
              <div className="flex-1 mt-6 min-w-0">
                <p className="font-sans font-normal text-black text-right tracking-[0.01em] leading-[1.28] text-[13px] sm:text-[15px] lg:text-[19px] xl:text-[20px]">
                  Vende-Social MCR provides for todays fast-moving seamless city
                  living. Inspired by the exciting and lofty Manchester skyline
                  we recognise that vending has a social role; keeping your
                  clients, staff, members and visitors connected!
                </p>
              </div>
            </div>
          </div>

          {/* SCROLL ARROW (always inside banner, top-right) */}
          <button
            type="button"
            onClick={scrollToServices}
            aria-label="Scroll down to services"
            className="
              absolute right-2.5 top-2.5 z-20
              flex items-center justify-center
              h-9 w-9
              rounded-full border-2 border-black bg-white
              shadow-md transition-transform duration-300
              hover:scale-105 hover:bg-black
              group
              sm:right-3.5 sm:top-3.5 sm:h-11 sm:w-11
              md:right-4 md:top-4
              lg:right-6 lg:top-6 lg:h-[64px] lg:w-[64px]
              xl:right-8 xl:top-6 xl:h-[78px] xl:w-[78px]
            "
          >
            <ArrowRight
              className="
                -rotate-45 text-[#E300FF]
                transition-transform group-hover:scale-110 group-hover:text-white
                h-4 w-4
                sm:h-5 sm:w-5
                lg:h-7 lg:w-7
                xl:h-8 xl:w-8
              "
              strokeWidth={3}
            />
          </button>

          {/* ACTION BUTTONS (always inside banner, bottom-right) */}
          <div
            className="
              absolute bottom-2.5 right-2.5 z-20
              flex items-center gap-2
              sm:bottom-3.5 sm:right-3.5 sm:gap-2.5
              md:bottom-4 md:right-4
              lg:bottom-6 lg:right-6 lg:gap-3.5
              xl:-bottom-16 xl:right-14
            "
          >
            <a
              href="tel:07503777838"
              className="
                inline-flex items-center justify-center gap-2
                rounded-full bg-black text-white font-sans font-bold
                shadow-lg transition hover:bg-neutral-800
                h-8 px-3.5 text-[11px]
                sm:h-9 sm:px-4 sm:text-[13px]
                md:h-10 md:px-5 md:text-[15px]
                lg:h-[48px] lg:px-6 lg:text-[18px] lg:leading-[20px]
              "
            >
              <Phone className="fill-[#E300FF] text-[#E300FF] h-3.5 w-3.5 lg:h-4 lg:w-4" />
              Call Us
            </a>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="
                inline-flex items-center justify-center gap-2
                rounded-full border border-white/20
                bg-[#BA4882] text-white font-sans font-bold
                shadow-lg backdrop-blur-sm transition hover:bg-[#c4548e]
                h-8 px-3.5 text-[11px]
                sm:h-9 sm:px-4 sm:text-[13px]
                md:h-10 md:px-5 md:text-[15px]
                lg:h-[48px] lg:px-7 lg:text-[18px] lg:leading-[20px]
              "
            >
              Send An Enquiry
              <ArrowRight className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* MOBILE + TABLET CONTENT BLOCK (below banner, visible < lg) */}
        <div className="flex lg:hidden flex-col md:flex-row items-start md:justify-between gap-3 md:gap-6 mt-4 md:mt-5">
          <div className="flex-shrink-0 w-full md:w-[36%]">
            <h1 className="font-sans font-extrabold tracking-tight text-black capitalize leading-[1.2] text-[20px] sm:text-[23px] md:text-[24px]">
              Premium Vending
              <br />
              In MCR - Part Of
              <br />
              A Lifestyle!
            </h1>
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-sans font-normal text-black leading-[1.4] md:text-right text-[13px] sm:text-[15px] md:text-[17px]">
              Vende-Social MCR provides for todays fast-moving seamless city
              living. Inspired by the exciting and lofty Manchester skyline
              we recognise that vending has a social role; keeping your clients,
              staff, members and visitors connected!
            </p>
          </div>
        </div>

        {/* FEATURE CARDS (Figma: Rectangle 109, 143, 144, 145: width 370px, height 119px, border-radius 19px, font-size 25px, font-weight 700) */}
        <div
          className="
            mt-5 grid gap-3
            grid-cols-2
            sm:mt-6 sm:gap-4
            md:grid-cols-4
            lg:mt-8 lg:gap-5
            xl:mt-52 xl:gap-6
          "
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className={`
                flex items-center justify-center
                rounded-[14px] sm:rounded-[16px] lg:rounded-[19px]
                px-3 py-3 sm:px-4 sm:py-4
                min-h-[64px] sm:min-h-[80px] md:min-h-[95px] lg:min-h-[110px] xl:min-h-[119px]
                text-center transition-all duration-300
                ${card.bgDark
                  ? "bg-[#000000] text-white shadow-[0_0_25px_rgba(0,0,0,0.25)]"
                  : "bg-[#FFFFFF] text-black shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_30px_rgba(227,0,255,0.2)]"
                }
              `}
            >
              <span
                className="
                  font-sans font-bold uppercase tracking-[0.01em] leading-[1.3]
                  text-[12px]
                  sm:text-[15px]
                  md:text-[18px]
                  lg:text-[22px]
                  xl:text-[25px]
                "
              >
                {card.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
