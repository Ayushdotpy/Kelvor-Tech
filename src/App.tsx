import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import { CAPABILITIES, PROJECTS_DATA } from "./data";
import { Project } from "./types";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import WorkCaseStudies from "./components/WorkCaseStudies";
import Methodology from "./components/Methodology";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Capabilities from "./components/Capabilities";
import ClientForm from "./components/ClientForm";

export default function App() {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [projectType, setProjectType] = useState("Website / Web Application");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  // App Sync State
  const [refreshInquiries, setRefreshInquiries] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter state for capabilities
  const [capabilitySearch, setCapabilitySearch] = useState("");

  // Set up values from project builder / case study inquirer
  const handleScopeImported = (
    briefText: string,
    calculatedBudget: string,
    calculatedTimeline: string,
  ) => {
    setDetails(briefText);
    setBudget(calculatedBudget);
    setTimeline(calculatedTimeline);

    // Smooth scroll down to consultation form
    const formSection = document.getElementById("consultation-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    triggerToast("Scope configuration imported successfully!");
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      triggerToast("Please complete required fields (Name & Email).");
      return;
    }

    const newRequest = {
      id: `ZNX-${Math.floor(1000 + Math.random() * 9000)}`,
      name,
      email,
      details: details || "No additional specifications provided.",
      projectType,
      budget: budget || "To be defined",
      timeline: timeline || "Standard Pace",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: "pending" as const,
    };

    try {
      const stored = localStorage.getItem("kelvor_consultations");
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(newRequest);
      localStorage.setItem("kelvor_consultations", JSON.stringify(list));

      // Reset fields
      setName("");
      setEmail("");
      setDetails("");
      setBudget("");
      setTimeline("");

      // Sync list
      setRefreshInquiries((prev) => prev + 1);

      // Success triggers
      triggerToast("✓ Proposal submitted! Simulated confirmation sent.");

      // Scroll to history list so client can track immediately
      setTimeout(() => {
        const portalSec = document.getElementById("client-portal");
        if (portalSec) {
          portalSec.scrollIntoView({ behavior: "smooth" });
        }
      }, 800);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredCapabilities = CAPABILITIES.filter(
    (cap) =>
      cap.title.toLowerCase().includes(capabilitySearch.toLowerCase()) ||
      cap.description.toLowerCase().includes(capabilitySearch.toLowerCase()) ||
      cap.detailedTech.toLowerCase().includes(capabilitySearch.toLowerCase()),
  );

  return (
    <div className="bg-[#F7F7F5] text-[#1c1b1b] relative min-h-screen overflow-x-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-xs tracking-wider shadow-2xl border border-white/10 flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-tertiary-fixed text-lg">
              check_circle
            </span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Header Navigation */}

      <Navbar />

      {/* Hero Section */}

      <Hero />

      {/* About / Mission Statement */}

      <OurMission />

      {/* Featured Work Case Studies */}

      <WorkCaseStudies />

      {/* Methodology Section */}

      <Methodology />

      {/* Selected Tech Work Bento Grid */}

      <Gallery />

      {/* Project Scope Builder & Cost Estimator widget */}

      {/*}
      <section className="py-32 bg-[#F7F7F5] border-t border-secondary/10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <ProjectPlanner onPlanGenerated={handleScopeImported} />
        </div>
      </section>
      */}

      {/* Massive Dark Stats Screen banner */}
      <Stats />

      {/* Why Choose Us */}

      <WhyUs />

      {/* Capabilities section with Live Filter Search */}

      <Capabilities />

      {/* final Lead Capture Consultation form & dynamic client list */}

      <ClientForm />



      {/* Footer */}

      <Footer />
    </div>
  );
}