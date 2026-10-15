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
    sm: { width: 150, height: 30, className: "h-7 w-auto" },
    md: { width: 194, height: 38, className: "h-[38px] w-auto" },
    lg: { width: 378, height: 74, className: "h-[64px] lg:h-[74px] w-auto" },
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="VEND-SOCIALMCR Logo"
        width={dimensions.width}
        height={dimensions.height}
        className={`${dimensions.className} object-contain`}
        priority
      />
    </div>
  );
}
