"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home", href: "#home" },
    { label: "About us", id: "about", href: "#about" },
    { label: "Services", id: "services", href: "#services" },
    { label: "Contact Us", id: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-xl shadow-black/50 border-b border-[#E300FF]/20 py-3.5"
          : "bg-[rgba(227,0,255,0.18)] backdrop-blur-sm border-b border-white/10 py-5 lg:h-[104px] flex items-center"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 w-full flex items-center justify-between">
        {/* Left: Brand Logo from Figma */}
        <a href="#home" className="transition-transform hover:scale-105 active:scale-95 shrink-0">
          <Logo theme="dark" size="md" />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className="relative py-2.5 group text-[17px] lg:text-[18px] font-bold tracking-wide transition-colors"
              >
                <span
                  className={
                    isActive
                      ? "text-[#E300FF]"
                      : "text-white/60 hover:text-white transition-colors"
                  }
                >
                  {item.label}
                </span>

                {/* Exact Figma Active Indicator bar under Home */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Enquire About Advertising CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenEnquiry}
            className="group relative inline-flex items-center gap-3 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-[17px] xl:text-[18px] px-7 h-[48px] rounded-full transition-all duration-300 transform hover:scale-[1.03] active:scale-95 shadow-[0_0_25px_rgba(227,0,255,0.45)] hover:shadow-[0_0_35px_rgba(227,0,255,0.7)]"
          >
            <span>Enquire About Advertising</span>
            <span className="w-5 h-5 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 stroke-[2.8]" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-white/10 text-white hover:text-[#E300FF] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#E300FF]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block text-lg font-bold py-2 ${
                activeTab === item.id ? "text-[#E300FF]" : "text-white/70 hover:text-white"
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
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E300FF] text-black font-bold text-base h-[48px] rounded-full"
            >
              <span>Enquire About Advertising</span>
              <ArrowRight className="w-4 h-4 stroke-[2.8]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
