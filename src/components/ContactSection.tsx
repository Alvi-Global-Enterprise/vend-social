"use client";

import React, { useState } from "react";
import { ArrowRight, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="contact" className="relative w-full bg-white pt-6 pb-24 overflow-hidden">
      <div className="max-w-[1746px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Vector 14 Divider Line */}
        <div className="w-full h-[1px] bg-black opacity-30 mb-12 sm:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Us Info */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-black font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[65px] leading-[1.1] sm:leading-[1.09] tracking-[0.01em] mb-2 sm:mb-4">
                Contact Us
              </h2>
              <p className="text-black font-normal text-lg sm:text-xl md:text-2xl lg:text-[23px] xl:text-[25px] leading-[1.3] sm:leading-[1.41] tracking-[0.01em]">
                Let&apos;s Create a Convenient Solution...
              </p>
            </div>

            {/* Team Members & Contact Details */}
            <div className="space-y-5 sm:space-y-6 pt-1 sm:pt-2">
              {/* Person 1: Jay Patwal MA */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E300FF]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#E300FF]" />
                </div>
                <div>
                  <div className="text-black font-bold text-base sm:text-[18px] leading-[1.3] sm:leading-[1.41] uppercase tracking-[0.01em]">
                    Jay Patwal MA
                  </div>
                  <div className="text-black/50 font-normal text-xs sm:text-sm md:text-[16px] leading-[1.3] sm:leading-[1.41] uppercase tracking-[0.01em]">
                    Sales Executive
                  </div>
                </div>
              </div>

              {/* Person 2: Kira Kaur LLB Hons Dip LP */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E300FF]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#E300FF]" />
                </div>
                <div>
                  <div className="text-black font-bold text-base sm:text-[18px] leading-[1.3] sm:leading-[1.41] uppercase tracking-[0.01em]">
                    Kira Kaur LLB Hons Dip LP
                  </div>
                  <div className="text-black/50 font-normal text-xs sm:text-sm md:text-[16px] leading-[1.3] sm:leading-[1.41] uppercase tracking-[0.01em]">
                    New Business Manager
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5 sm:gap-4 pt-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E300FF]/15 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E300FF] fill-[#E300FF]" />
                </div>
                <a
                  href="tel:07503777838"
                  className="text-black/60 hover:text-black font-normal text-sm sm:text-base md:text-[18px] leading-[1.41] uppercase tracking-[0.01em] transition-colors"
                >
                  07503 777 838
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E300FF]/15 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E300FF]" />
                </div>
                <a
                  href="mailto:jk@vendsocialmcr.com"
                  className="text-black/60 hover:text-black font-normal text-sm sm:text-base md:text-[18px] leading-[1.41] underline uppercase tracking-[0.01em] transition-colors break-all sm:break-normal"
                >
                  jk@vendsocialmcr.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 xl:col-span-7 w-full">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-neutral-50 border border-[#E300FF]/30 rounded-3xl p-6 sm:p-12 text-center space-y-4 shadow-lg"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E300FF]/20 rounded-full flex items-center justify-center mx-auto text-[#E300FF]">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black">Thank You!</h3>
                <p className="text-black/70 text-base sm:text-lg max-w-md mx-auto">
                  Your enquiry has been received. Our team will contact you shortly to arrange your free consultation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Row 1: Name* and Company* */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-[44px] sm:h-[45px] bg-[#D9D9D9] hover:bg-[#d0d0d0] focus:bg-[#e0e0e0] border-0 rounded-full px-5 sm:px-6 text-black placeholder:text-black/40 font-normal text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E300FF] transition-all"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company*"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-[44px] sm:h-[45px] bg-[#D9D9D9] hover:bg-[#d0d0d0] focus:bg-[#e0e0e0] border-0 rounded-full px-5 sm:px-6 text-black placeholder:text-black/40 font-normal text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E300FF] transition-all"
                  />
                </div>

                {/* Row 2: Email* and Phone* */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[44px] sm:h-[45px] bg-[#D9D9D9] hover:bg-[#d0d0d0] focus:bg-[#e0e0e0] border-0 rounded-full px-5 sm:px-6 text-black placeholder:text-black/40 font-normal text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E300FF] transition-all"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-[44px] sm:h-[45px] bg-[#D9D9D9] hover:bg-[#d0d0d0] focus:bg-[#e0e0e0] border-0 rounded-full px-5 sm:px-6 text-black placeholder:text-black/40 font-normal text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E300FF] transition-all"
                  />
                </div>

                {/* Row 3: Location* and Space Type* */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Location*"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full h-[44px] sm:h-[45px] bg-[#D9D9D9] hover:bg-[#d0d0d0] focus:bg-[#e0e0e0] border-0 rounded-full px-5 sm:px-6 text-black placeholder:text-black/40 font-normal text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E300FF] transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Space Type / Requirement*"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full h-[44px] sm:h-[45px] bg-[#D9D9D9] hover:bg-[#d0d0d0] focus:bg-[#e0e0e0] border-0 rounded-full px-5 sm:px-6 text-black placeholder:text-black/40 font-normal text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E300FF] transition-all"
                  />
                </div>

                {/* Row 4: Message* */}
                <div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Message*"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[66px] sm:min-h-[72px] py-3 bg-[#D9D9D9] hover:bg-[#d0d0d0] focus:bg-[#e0e0e0] border-0 rounded-[24px] sm:rounded-[33px] px-5 sm:px-6 text-black placeholder:text-black/40 font-normal text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E300FF] transition-all resize-none"
                  />
                </div>

                {/* Row 5: SEND ENQUIRY Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full h-[46px] sm:h-[48px] bg-[#E300FF] hover:bg-[#eb2eff] text-black font-bold text-sm sm:text-base xl:text-[18px] rounded-full inline-flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] shadow-md uppercase tracking-wide"
                  >
                    <span>SEND ENQUIRY</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.8]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
