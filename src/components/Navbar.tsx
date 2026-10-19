"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = [
    { label: "Home", id: "home", href: "#home" },
    { label: "About us", id: "about", href: "#about" },
  ];

  const rightNavItems = [
    { label: "Services", id: "services", href: "#services" },
    { label: "Contact Us", id: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-black/15 ${
        isScrolled
          ? "shadow-sm py-2 sm:py-2.5 lg:py-3"
          : "py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5"
      }`}
    >
      <div className="max-w-[1746px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex items-center justify-between">
        {/* Left Nav Links (Desktop >= lg) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-14 flex-1">
          {leftNavItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className="relative py-1 group font-sans text-[18px] font-bold leading-[20px] transition-all duration-200"
              >
                <span
                  className={
                    isActive
                      ? "text-[#E300FF]"
                      : "text-black/35 hover:text-black transition-colors"
                  }
                >
                  {item.label}
                </span>

                {/* Underline indicator matching Figma Rectangle 3 (24px x 3px black rounded) */}
                {isActive && (
                  <span className="absolute -bottom-2.5 left-0 w-[24px] h-[3px] bg-black rounded-[1.5px]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Center Logo */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <a
            href="#home"
            onClick={() => setActiveTab("home")}
            className="inline-block transition-transform hover:scale-105 active:scale-95"
            aria-label="VEND-SOCIAL MCR Home"
          >
            <Logo size="header" />
          </a>
        </div>

        {/* Right Nav */}
        <nav className="hidden flex-1 items-center justify-end gap-8 xl:gap-14 lg:flex">
          {rightNavItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className="relative py-1 group font-sans text-[18px] font-bold leading-[20px] transition-all duration-200"
              >
                <span
                  className={
                    isActive
                      ? "text-[#E300FF]"
                      : "text-black/35 hover:text-black transition-colors"
                  }
                >
                  {item.label}
                </span>

                {isActive && (
                  <span className="absolute -bottom-2.5 left-0 w-[24px] h-[3px] bg-black rounded-[1.5px]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black transition-colors hover:text-[#E300FF]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="space-y-1 border-t border-black/10 bg-white px-6 py-5 shadow-lg lg:hidden">
          {[...leftNavItems, ...rightNavItems].map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block text-lg sm:text-xl font-bold py-2 ${activeTab === item.id ? "text-[#E300FF]" : "text-black/60 hover:text-black"
                }`}
            >
              {item.label}
            </a>
          ))}
          {onOpenEnquiry && (
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="h-12 w-full rounded-full bg-[#E300FF] text-base font-bold text-black transition-all hover:bg-[#eb2eff]"
              >
                Send An Enquiry
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
