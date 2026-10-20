"use client";

import React, { useState } from "react";
import { ArrowRight, Users, Phone, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const inputClass =
  "w-full h-[45px] bg-[#E8E8E8] hover:bg-[#E0E0E0] focus:bg-[#EFEFEF] border-0 rounded-[200px] px-6 text-black placeholder:text-black font-normal text-[16px] leading-[23px] tracking-[0.01em] focus:outline-none focus:ring-2 focus:ring-[#E300FF]/50 transition-all";

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

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left: contact info */}
          <div className="lg:col-span-5 xl:col-span-5">
            <h2 className="mb-2 font-sans text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[65px] font-extrabold leading-[1.09] tracking-[0.01em] text-black sm:mb-3">
              Contact Us
            </h2>
            <p className="mb-8 font-sans text-[17px] sm:text-[20px] lg:text-[23px] xl:text-[25px] font-normal leading-[1.41] tracking-[0.01em] text-black sm:mb-10">
              Let&apos;s Create a Convenient Solution...
            </p>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3.5">
                <img src={"/images/persons.png"} alt="persons" width={25} height={25} />
                <div>
                  <div className="font-sans text-[15px] sm:text-[18px] font-bold uppercase leading-[1.41] tracking-[0.01em] text-black">
                    Jay Patwal MA
                  </div>
                  <div className="mt-0.5 font-sans text-[14px] sm:text-[18px] font-normal uppercase tracking-[0.01em] text-black leading-[1.41]">
                    Founder and Sales Director
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <img src={"/images/persons.png"} alt="persons" width={25} height={25} />
                <div>
                  <div className="font-sans text-[15px] sm:text-[18px] font-bold uppercase leading-[1.41] tracking-[0.01em] text-black">
                    Kira Kaur LLB Hons Dip LP
                  </div>
                  <div className="mt-0.5 font-sans text-[14px] sm:text-[18px] font-normal uppercase tracking-[0.01em] text-black leading-[1.41]">
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
                  className="font-sans text-[15px] sm:text-[18px] font-normal uppercase tracking-[0.01em] text-black transition-colors hover:text-black/70 leading-[1.41]"
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
                  className="break-all font-sans text-[15px] sm:text-[18px] font-normal uppercase tracking-[0.01em] text-black underline transition-colors hover:text-black/70 leading-[1.41] sm:break-normal"
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
                <p className="mx-auto max-w-md text-base text-black sm:text-lg">
                  Your enquiry has been received. Our team will contact you
                  shortly to arrange your free consultation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-6">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-6">
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
                  className="w-full min-h-[80px] resize-none rounded-[24px] border-0 bg-[#E8E8E8] px-6 py-4 text-[16px] leading-[23px] font-normal text-black placeholder:text-black transition-all hover:bg-[#E0E0E0] focus:bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-[#E300FF]/50"
                />

                <button
                  type="submit"
                  className="
                    inline-flex h-[48px] w-full items-center justify-center gap-3
                    rounded-full bg-[#E300FF]
                    font-sans text-[18px] leading-[20px] font-bold uppercase tracking-wide text-black
                    transition-all duration-300
                    hover:scale-[1.01] hover:bg-[#eb2eff] active:scale-[0.99]
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
