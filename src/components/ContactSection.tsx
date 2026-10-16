"use client";

import React, { useState } from "react";
import { ArrowRight, Users, Phone, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const inputClass =
  "w-full h-11 sm:h-12 bg-[#E8E8E8] hover:bg-[#E0E0E0] focus:bg-[#EFEFEF] border-0 rounded-full px-5 sm:px-6 text-black placeholder:text-black/35 font-normal text-[14px] sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#E300FF]/50 transition-all";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    sector: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        location: "",
        sector: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1746px] px-4 sm:px-8 lg:px-12">
        {/* Top divider */}
        <div className="mb-10 h-px w-full bg-black/25 sm:mb-12 lg:mb-16" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left: contact info */}
          <div className="lg:col-span-5 xl:col-span-5">
            <h2
              className="mb-2 font-sans text-[36px] font-black leading-[1.08] tracking-[-0.015em] text-black sm:mb-3 sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[60px]"
              style={{ fontWeight: 900, WebkitTextStroke: "0.3px currentColor" }}
            >
              Contact Us
            </h2>
            <p className="mb-8 font-sans text-[16px] font-normal leading-[1.4] text-black sm:mb-10 sm:text-[18px] lg:text-[20px]">
              Let&apos;s Create a Convenient Solution...
            </p>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3.5">
                <Users
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#E300FF] sm:h-[22px] sm:w-[22px]"
                  strokeWidth={2.2}
                />
                <div>
                  <div className="font-sans text-[14px] font-bold uppercase leading-snug tracking-[0.02em] text-black sm:text-[15px]">
                    Jay Patwal MA
                  </div>
                  <div className="mt-0.5 font-sans text-[12px] font-normal uppercase tracking-[0.02em] text-black/45 sm:text-[13px]">
                    Sales Executive
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Users
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#E300FF] sm:h-[22px] sm:w-[22px]"
                  strokeWidth={2.2}
                />
                <div>
                  <div className="font-sans text-[14px] font-bold uppercase leading-snug tracking-[0.02em] text-black sm:text-[15px]">
                    Kira Kaur LLB Hons Dip LP
                  </div>
                  <div className="mt-0.5 font-sans text-[12px] font-normal uppercase tracking-[0.02em] text-black/45 sm:text-[13px]">
                    New Business Manager
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-1">
                <Phone
                  className="h-5 w-5 shrink-0 fill-[#E300FF] text-[#E300FF] sm:h-[20px] sm:w-[20px]"
                  strokeWidth={2}
                />
                <a
                  href="tel:07503777838"
                  className="font-sans text-[14px] font-normal uppercase tracking-[0.02em] text-black/55 transition-colors hover:text-black sm:text-[15px]"
                >
                  07503 777 838
                </a>
              </div>

              <div className="flex items-center gap-3.5">
                <Mail
                  className="h-5 w-5 shrink-0 text-[#E300FF] sm:h-[20px] sm:w-[20px]"
                  strokeWidth={2}
                />
                <a
                  href="mailto:jk@vendsocialmcr.com"
                  className="break-all font-sans text-[14px] font-normal uppercase tracking-[0.02em] text-black/55 underline transition-colors hover:text-black sm:break-normal sm:text-[15px]"
                >
                  jk@vendsocialmcr.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="w-full lg:col-span-7 xl:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 rounded-3xl border border-[#E300FF]/30 bg-neutral-50 p-6 text-center shadow-lg sm:p-12"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E300FF]/20 text-[#E300FF] sm:h-16 sm:w-16">
                  <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-black sm:text-3xl">
                  Thank You!
                </h3>
                <p className="mx-auto max-w-md text-base text-black/70 sm:text-lg">
                  Your enquiry has been received. Our team will contact you
                  shortly to arrange your free consultation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company*"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Location*"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Space Type / Requirement*"
                    value={formData.sector}
                    onChange={(e) =>
                      setFormData({ ...formData, sector: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>

                <textarea
                  rows={3}
                  required
                  placeholder="Message*"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full min-h-[72px] resize-none rounded-[24px] border-0 bg-[#E8E8E8] px-5 py-3.5 text-[14px] font-normal text-black placeholder:text-black/35 transition-all hover:bg-[#E0E0E0] focus:bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-[#E300FF]/50 sm:min-h-[80px] sm:rounded-[28px] sm:px-6 sm:text-[15px]"
                />

                <button
                  type="submit"
                  className="
                    inline-flex h-12 w-full items-center justify-center gap-2.5
                    rounded-full bg-[#E300FF]
                    font-sans text-[14px] font-bold uppercase tracking-wide text-black
                    transition-all duration-300
                    hover:scale-[1.01] hover:bg-[#eb2eff] active:scale-[0.99]
                    sm:h-[50px] sm:gap-3 sm:text-[15px]
                  "
                >
                  <span>SEND ENQUIRY</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.8]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
