import React from "react";
import Image from "next/image";

interface LogoProps {
  theme?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg" | "header" | "footer";
}

export default function Logo({
  className = "",
  size = "md",
}: LogoProps) {
  // Figma specs:
  // Top header logo (Group 281): width 925.54px, height 94.85px
  // Footer logo (Group 287): width 645px, height 66.1px
  // Large devices (lg/xl/2xl) match Figma dimensions; smaller screens remain responsive
  const dimensions = {
    sm: { width: 140, height: 36, className: "h-7 w-auto" },
    md: {
      width: 645,
      height: 66,
      className:
        "h-8 sm:h-9 md:h-10 lg:h-[54px] xl:h-[66px] w-auto max-w-[260px] sm:max-w-[320px] lg:max-w-[520px] xl:max-w-[645px]",
    },
    lg: {
      width: 926,
      height: 95,
      className:
        "h-8 sm:h-10 md:h-12 lg:h-[72px] xl:h-[84px] 2xl:h-[95px] w-auto max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[660px] xl:max-w-[820px] 2xl:max-w-[926px]",
    },
    header: {
      width: 926,
      height: 95,
      className:
        "h-8 sm:h-10 md:h-12 lg:h-[72px] xl:h-[84px] 2xl:h-[95px] w-auto max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[660px] xl:max-w-[820px] 2xl:max-w-[926px]",
    },
    footer: {
      width: 645,
      height: 66,
      className:
        "h-8 sm:h-9 md:h-10 lg:h-[54px] xl:h-[66px] w-auto max-w-[260px] sm:max-w-[320px] lg:max-w-[520px] xl:max-w-[645px]",
    },
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="VEND-SOCIAL MCR — Curated. Convenient. Connected."
        width={dimensions.width}
        height={dimensions.height}
        className={`${dimensions.className} object-contain object-left`}
        priority
      />
    </div>
  );
}
