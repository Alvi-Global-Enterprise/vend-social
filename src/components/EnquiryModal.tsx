"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultService?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  title = "Make an Enquiry",
  defaultService = "General Enquiry",
}: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    spaceType: "Residential Community",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-neutral-950 border border-[#E300FF]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#E300FF] hover:text-black flex items-center justify-center text-white/70 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#E300FF]/20 rounded-full flex items-center justify-center mx-auto text-[#E300FF]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Thank You!</h3>
            <p className="text-white/70 max-w-md mx-auto">
              We received your enquiry. The VEND-SOCIAL MCR team will contact you shortly to arrange a customized solution.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[#E300FF] font-bold text-xs tracking-[0.3em] uppercase">
                VEND-SOCIAL MCR
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {title}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Tell us about your space and requirements. We handle installation, maintenance &amp; restocking.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/20 focus:border-[#E300FF] rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-[#E300FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07503 777 838"
                    className="w-full bg-white/5 border border-white/20 focus:border-[#E300FF] rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-[#E300FF] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/20 focus:border-[#E300FF] rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-[#E300FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  Space / Business Type
                </label>
                <select
                  value={formData.spaceType}
                  onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                  className="w-full bg-neutral-900 border border-white/20 focus:border-[#E300FF] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#E300FF] transition-colors"
                >
                  <option value="Residential Community">Residential Community / Apartments</option>
                  <option value="Gym & Fitness Club">Gym &amp; Fitness Club</option>
                  <option value="College or University">College / Student Housing</option>
                  <option value="Corporate Office">Corporate Office / Business Park</option>
                  <option value="Events & Venues">Events &amp; Venues</option>
                  <option value="Advertising Opportunities">Advertising Display Screen</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                  Message / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about footfall, location in Manchester, or products requested..."
                  className="w-full bg-white/5 border border-white/20 focus:border-[#E300FF] rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-[#E300FF] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#E300FF] hover:bg-[#eb2eff] text-black font-extrabold text-base py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(227,0,255,0.4)]"
              >
                <span>Submit Enquiry</span>
                <Send className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-white/60 gap-3">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E300FF]" />
                07503 777 838
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E300FF]" />
                kira101@hotmail.co.uk
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E300FF]" />
                Manchester, UK
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
