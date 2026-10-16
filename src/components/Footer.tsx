"use client";

import React, { useState } from "react";
import Logo from "./Logo";

export default function Footer() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { label: "Home", id: "home", href: "#home" },
    { label: "About us", id: "about", href: "#about" },
    { label: "Services", id: "services", href: "#services" },
    { label: "Contact Us", id: "contact", href: "#contact" },
  ];

  return (
    <footer className="relative w-full bg-white pt-6 pb-12 overflow-hidden text-black">
      <div className="max-w-[1746px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Vector 15 Divider Line */}
        <div className="w-full h-[1px] bg-black opacity-30 mb-8 sm:mb-10" />

        {/* Middle Row: Logo on Left, Nav in Center, Socials on Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 py-3 sm:py-4">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="inline-block hover:scale-105 transition-transform">
              <Logo size="md" className="h-8 sm:h-10 md:h-12 w-auto" />
            </a>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-12 xl:gap-14">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className="relative py-1 group text-sm sm:text-base xl:text-[18px] font-bold transition-all duration-200"
                >
                  <span
                    className={
                      isActive
                        ? "text-[#E300FF]"
                        : "text-black/40 hover:text-black transition-colors"
                    }
                  >
                    {item.label}
                  </span>

                  {/* Underline indicator matching Figma Rectangle 123 (24px x 3px black rounded) */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-[24px] h-[3px] bg-black rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Social Media Icons in Black */}
          <div className="flex items-center gap-4 sm:gap-6 text-black">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#E300FF] transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.57 11.76 5 14.42 5c1.28 0 2.62.23 2.62.23v2.88h-1.48c-1.45 0-1.9.9-1.9 1.83V12h3.25l-.52 3h-2.73v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#E300FF] transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="hover:text-[#E300FF] transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-[#E300FF] transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#E300FF] transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5V10.1H5.06v8.4h2.8z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Vector 16 Divider Line */}
        <div className="w-full h-[1px] bg-black opacity-30 mt-6 sm:mt-8 mb-6" />

        {/* Bottom Bar: Copyright on Left, Terms on Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-black font-normal text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[22px] tracking-[0.03em] sm:tracking-[0.08em] text-center sm:text-left">
          <div>
            © 2026 VENDSOCIAL-MCR. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-center sm:text-right">
            <a href="#privacy" className="hover:text-[#E300FF] transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-[#E300FF] transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
