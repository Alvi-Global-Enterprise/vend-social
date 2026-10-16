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

  const renderNavLink = (item: { label: string; id: string; href: string }) => {
    const isActive = activeTab === item.id;
    return (
      <a
        key={item.id}
        href={item.href}
        onClick={() => setActiveTab(item.id)}
        className="relative inline-flex flex-col items-start py-1 text-[14px] xl:text-[15px] font-bold tracking-[-0.01em] transition-colors duration-200"
      >
        <span
          className={
            isActive
              ? "text-[#E300FF]"
              : "text-black/40 hover:text-black/70"
          }
        >
          {item.label}
        </span>
        {isActive && (
          <span className="absolute -bottom-1.5 left-0 h-[3px] w-6 rounded-full bg-black" />
        )}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/15 transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[88px] w-full max-w-[1746px] items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Left Nav */}
        <nav className="hidden flex-1 items-center gap-10 xl:gap-14 lg:flex">
          {leftNavItems.map(renderNavLink)}
        </nav>

        {/* Center Logo */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <a
            href="#home"
            onClick={() => setActiveTab("home")}
            className="inline-block transition-opacity hover:opacity-90"
            aria-label="VEND-SOCIAL MCR Home"
          >
            <Logo size="lg" className="h-11 sm:h-12 md:h-14 lg:h-[58px] xl:h-[62px]" />
          </a>
        </div>

        {/* Right Nav */}
        <nav className="hidden flex-1 items-center justify-end gap-10 xl:gap-14 lg:flex">
          {rightNavItems.map(renderNavLink)}
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
              className={`block py-2.5 text-[15px] font-bold ${
                activeTab === item.id
                  ? "text-[#E300FF]"
                  : "text-black/50 hover:text-black"
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
