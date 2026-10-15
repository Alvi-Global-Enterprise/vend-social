"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Reimagined from "@/components/Reimagined";
import WhoWeServe from "@/components/WhoWeServe";
import WhatYouCanFind from "@/components/WhatYouCanFind";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
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
      {/* Top Fixed Navbar */}
      <Navbar onOpenEnquiry={() => openEnquiryModal("Enquire About Advertising", "Advertising Display")} />

      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={() => openEnquiryModal("Send an Enquiry", "Smart Vending Solution")} />

      {/* 2. What We Do - Complete Vending Solutions */}
      <WhatWeDo onLearnMore={(serviceName) => openEnquiryModal(`Learn More: ${serviceName}`, serviceName)} />

      {/* 3. More Than Convenience - Vending Reimagined */}
      <Reimagined
        onOpenEnquiry={() => openEnquiryModal("Make an Enquiry", "Fully Managed Vending")}
        onViewLocations={() => openEnquiryModal("View All Locations & Request Machine", "Location Inquiry")}
      />

      {/* 4. Who We Serve - Solutions for Every Space */}
      <WhoWeServe onOurServicesClick={() => openEnquiryModal("Explore Services for Your Space", "Space Inquiry")} />

      {/* 5. What You Can Find - Your Everyday Essentials */}
      <WhatYouCanFind onExploreProducts={() => openEnquiryModal("Explore Product Stocking", "Product Catalog")} />

      {/* 6. Why VEND-SOCIALMCR - Why Choose Us? */}
      <WhyChooseUs />

      {/* 7. Ready For Smarter Vending - CTA Banner */}
      <CtaBanner onOpenEnquiry={() => openEnquiryModal("Request Vending Solution", "Turnkey Solution")} />

      {/* 8. Footer */}
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
