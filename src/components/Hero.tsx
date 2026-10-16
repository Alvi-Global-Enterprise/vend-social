
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
      className="relative w-full bg-white pt-20 pb-6 sm:pb-8 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-[1746px] px-4 sm:px-8 lg:px-12">

        {/* HERO BANNER */}
        <div
          className="
            relative isolate w-full overflow-hidden
            rounded-2xl sm:rounded-3xl lg:rounded-[28px]

            /* Mobile/sm: vw-based height */
            h-[55vw] min-h-[240px] max-h-[360px]
            sm:h-[46vw] sm:min-h-[300px] sm:max-h-[440px]

            /* md+: aspect ratio, taller to accommodate full-bleed image */
            md:h-auto md:min-h-0 md:max-h-none
            md:aspect-[16/9]
            lg:aspect-[16/9]
            xl:aspect-[1742/742]
          "
        >
          {/* ── Mobile + Laptop image: hero-image.png (< md AND lg+) ── */}
          <Image
            src="/images/hero-image.png"
            alt="VEND-SOCIAL MCR smart vending machines overlooking Manchester"
            fill
            priority
            sizes="(max-width: 1024px) 0px, 1742px"
            className="object-cover mt-28 object-center hidden lg:block"
          />

          {/* ── Tablet-only image: hero-image1.png (md only, 768-1023px) ── */}
          <Image
            src="/images/hero-image1.png"
            alt="VEND-SOCIAL MCR smart vending machines overlooking Manchester"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 0px"
            className="object-cover object-center block lg:hidden"
          />

          {/* ── MOBILE/SM CONTENT PANEL (overlaid, hidden on md tablet only) ── */}
          <div
            className="
              hidden lg:block
              absolute left-0 top-0 z-10
              bg-white 
              md:bg-transparent

              w-[calc(100%-40px)]
              sm:w-[calc(100%-56px)]
              lg:w-[79%]
              xl:w-[78%]

              rounded-br-[18px]
              sm:rounded-br-[26px]
              lg:rounded-br-[36px]
              md:pl-2!
              px-3 py-3
              sm:px-5 sm:py-4
              lg:px-8 lg:py-6
              xl:px-10 xl:py-7
            "
          >
            <div className="flex mt-10 items-start justify-between gap-3 sm:gap-4 lg:gap-10">
              {/* HEADING */}
              <div className="flex-shrink-0 w-[42%] sm:w-[40%] lg:w-[32%] xl:w-[30%]">
                <h1
                  className="
                    font-sans font-extrabold tracking-tight text-black leading-[1.15]
                    text-[clamp(13px,3.5vw,18px)]
                    sm:text-[clamp(16px,2.8vw,21px)]
                    lg:text-[24px]
                    xl:text-[27px]
                  "
                >
                  Premium Vending
                  <br />
                  In MCR - Part Of
                  <br />
                  A Lifestyle!
                </h1>
              </div>
              {/* DESCRIPTION */}
              <div className="flex-1 min-w-0 mt-5">
                <p
                  className="
                    font-sans font-normal text-black leading-[1.5]
                    text-center
                    text-[clamp(9px,2.2vw,11px)]
                    sm:text-[clamp(10px,1.7vw,12px)]
                    lg:text-right lg:text-[13px]
                    xl:text-[15px]
                  "
                >
                  Vende-Social MCR provides for today&apos;s fast-moving,
                  seamless city living. Inspired by the exciting and lofty
                  Manchester skyline, we recognise that vending has a social
                  role; keeping your clients, staff, members and visitors
                  connected!
                </p>
              </div>
            </div>
          </div>

          {/* ── SCROLL ARROW (always inside banner, top-right) ── */}
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
              lg:right-6 lg:top-6 lg:h-[54px] lg:w-[54px]
              xl:right-8 xl:top-8 xl:h-[62px] xl:w-[62px]
            "
          >
            <ArrowRight
              className="
                -rotate-45 text-[#E300FF]
                transition-transform group-hover:scale-110 group-hover:text-white
                h-4 w-4
                sm:h-5 sm:w-5
                lg:h-6 lg:w-6
                xl:h-7 xl:w-7
              "
              strokeWidth={2.5}
            />
          </button>

          {/* ── ACTION BUTTONS (always inside banner, bottom-right) ── */}
          <div
            className="
              absolute bottom-2.5 right-2.5 z-20
              flex items-center gap-2
              sm:bottom-3.5 sm:right-3.5 sm:gap-2.5
              md:bottom-4 md:right-4
              lg:bottom-6 lg:right-6 lg:gap-3
              xl:bottom-8 xl:right-8
            "
          >
            <a
              href="tel:07503777838"
              className="
                inline-flex items-center justify-center gap-1.5
                rounded-full bg-black text-white font-bold
                shadow-lg transition hover:bg-neutral-800
                h-8 px-3.5 text-[10px]
                sm:h-9 sm:px-4 sm:text-[11px]
                md:h-10 md:px-5 md:text-xs
                lg:h-11 lg:px-6 lg:text-[13px]
              "
            >
              <Phone className="fill-[#E300FF] text-[#E300FF] h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Call Us
            </a>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="
                inline-flex items-center justify-center gap-1.5
                rounded-full border border-white/20
                bg-[#BA4882] text-white font-bold
                shadow-lg backdrop-blur-sm transition hover:bg-[#c4548e]
                h-8 px-3.5 text-[10px]
                sm:h-9 sm:px-4 sm:text-[11px]
                md:h-10 md:px-5 md:text-xs
                lg:h-11 lg:px-6 lg:text-[13px]
              "
            >
              Send An Enquiry
              <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* ── MOBILE + TABLET CONTENT BLOCK (below banner, hidden only on lg+) ── */}
        <div
          className="
            flex lg:hidden
            flex-col sm:flex-col md:flex-row
            items-start md:justify-between
            gap-2 md:gap-6
            mt-3 md:mt-4
          "
        >
          {/* HEADING — left */}
          <div className="flex-shrink-0 w-full md:w-[34%]">
            <h1
              className="
                font-sans font-extrabold tracking-tight text-black leading-[1.15]
                text-[clamp(18px,5vw,22px)]
                md:text-[19px]
              "
            >
              Premium Vending
              <br />
              In MCR - Part Of
              <br />
              A Lifestyle!
            </h1>
          </div>

          {/* DESCRIPTION — right */}
          <div className="flex-1 min-w-0 flex items-center">
            <p
              className="
                font-sans font-normal text-black leading-[1.55]
                md:text-right
                text-[clamp(10px,2.8vw,12px)]
                md:text-[11px]
              "
            >
              Vende-Social MCR provides for today&apos;s fast-moving,
              seamless city living. Inspired by the exciting and lofty
              Manchester skyline, we recognise that vending has a social
              role; keeping your clients, staff, members and visitors
              connected!
            </p>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div
          className="
            mt-4 grid gap-2.5
            grid-cols-2
            sm:mt-5 sm:gap-3.5
            md:grid-cols-4
            lg:mt-7 lg:gap-5
            xl:mt-9 xl:gap-7
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
                flex min-h-[56px] items-center
                justify-center rounded-xl px-2 py-3
                text-center transition-shadow duration-300
                sm:min-h-[72px] sm:rounded-2xl sm:px-3
                lg:min-h-[90px] lg:px-4
                xl:min-h-[100px]
                ${card.bgDark
                  ? "bg-black text-white shadow-[0_0_20px_rgba(0,0,0,0.20)]"
                  : "bg-white text-black shadow-[0_0_20px_rgba(0,0,0,0.14)] hover:shadow-[0_0_25px_rgba(227,0,255,0.18)]"
                }
              `}
            >
              <span
                className="
                  font-sans font-bold leading-snug tracking-wide
                  text-[10px]
                  sm:text-[12px]
                  lg:text-[14px]
                  xl:text-[16px]
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
