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
    sm: { width: 100, height: 25, className: "h-2 sm:h-6 " },
    md: { width: 320, height: 40, className: "h-7 sm:h-8 md:h-10 w-auto" },
    lg: { width: 500, height: 62, className: "h-7 sm:h-9 md:h-11 lg:h-14 w-auto" },
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="VEND-SOCIAL MCR Logo"
        width={200}
        height={40}
        style={{ width: "auto", height: "auto" }}
        className={`${dimensions.className} object-contain`}
        priority
      />
    </div>
  );
}
