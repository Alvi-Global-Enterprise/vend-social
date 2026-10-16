"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Reimagined from "@/components/Reimagined";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Make an Enquiry");
  const [defaultService, setDefaultService] = useState("General Enquiry");

  const openEnquiryModal = (title = "Make an Enquiry", service = "General Enquiry") => {
    setModalTitle(title);
    setDefaultService(service);
    setModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-black selection:bg-[#E300FF] selection:text-white relative">
      {/* Top Navbar */}
      <Navbar onOpenEnquiry={() => openEnquiryModal("Send an Enquiry", "Smart Vending")} />

      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={() => openEnquiryModal("Send an Enquiry", "Lifestyle Vending")} />

      {/* 2. What We Do - Complete Vending Solutions */}
      <WhatWeDo onLearnMore={(serviceName) => openEnquiryModal(`Learn More: ${serviceName}`, serviceName)} />

      {/* 3. Complete Vending Solutions - Contactless Payment Image Section */}
      <Reimagined
        onOpenEnquiry={() => openEnquiryModal("Make an Enquiry", "Contactless Vending")}
      />

      {/* 4. About - A Family-Run Business & Solutions For Every Space */}
      <WhoWeServe onOurServicesClick={() => openEnquiryModal("Explore Services for Your Space", "Space Solution")} />

      {/* 5. Why VEND-SOCIAL MCR - Why Choose Us? */}
      <WhyChooseUs />

      {/* 6. Contact Us - Team Info & Direct Form */}
      <ContactSection />

      {/* 7. Footer */}
      <Footer />

      {/* Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={closeEnquiryModal}
        title={modalTitle}
        defaultService={defaultService}
      />
    </main>
  );
}
