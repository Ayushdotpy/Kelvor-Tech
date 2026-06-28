import React, { useState, useEffect, useRef } from "react";

import ProjectExplorer from "../components/ProjectExplorer";
const WorkCaseStudies = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [projectType, setProjectType] = useState("Website / Web Application");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
  return (
    <section className="py-24 bg-[#F7F7F5]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <ProjectExplorer
          onStartProjectClick={(brief) => handleScopeImported(brief, "", "")}
        />
      </div>
    </section>
  );
};
export default WorkCaseStudies;
