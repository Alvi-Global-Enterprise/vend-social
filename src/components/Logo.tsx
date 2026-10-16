import React from "react";
import Image from "next/image";

interface LogoProps {
  theme?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  size = "md",
}: LogoProps) {
  const dimensions = {
    sm: { width: 140, height: 36, className: "h-7 w-auto" },
    md: { width: 280, height: 56, className: "h-9 sm:h-10 md:h-11 w-auto" },
    lg: { width: 360, height: 72, className: "h-11 sm:h-12 md:h-14 lg:h-[58px] xl:h-[62px] w-auto" },
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
