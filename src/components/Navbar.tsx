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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 h-20 z-50 bg-white transition-all duration-300 ${isScrolled ? "shadow-sm py-2.5 sm:py-3" : "py-3 sm:py-4 md:py-6"
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
                className="relative py-1 group text-base xl:text-[18px] font-bold transition-all duration-200"
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
                  <span className="absolute -bottom-2 left-0 w-[24px] h-[3px] bg-black rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Center Brand Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <a href="#home" className="transition-transform hover:scale-105 active:scale-95 inline-block">
            <Logo size="lg" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 " />
          </a>
        </div>

        {/* Right Nav Links (Desktop >= lg) */}
        <nav className="hidden lg:flex items-center justify-end gap-8 xl:gap-14 flex-1">
          {rightNavItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className="relative py-1 group text-base xl:text-[18px] font-bold transition-all duration-200"
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
                  <span className="absolute -bottom-2 left-0 w-[24px] h-[3px] bg-black rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button (< lg) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-[#E300FF] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>
      </div>


      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
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
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="w-full bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-base h-[48px] rounded-full transition-all"
            >
              Send An Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
