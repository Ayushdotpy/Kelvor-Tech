import React, { useState } from "react";
import { METHODOLOGY_STEPS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function MethodologyViewer() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeStep = METHODOLOGY_STEPS[activeStepIdx];

  return (
    <div className="space-y-12" id="methodology">
      {/* Horizontally scrolling stepper buttons for 7 steps */}
      <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-none snap-x -mx-4 px-4 md:mx-0 md:px-0">
        {METHODOLOGY_STEPS.map((step, idx) => {
          const isSelected = activeStepIdx === idx;
          return (
            <button
              key={step.stepNum}
              onClick={() => setActiveStepIdx(idx)}
              className={`snap-start min-w-[140px] flex-1 p-5 rounded-2xl border text-left transition-all relative ${
                isSelected
                  ? "border-primary bg-white shadow-lg scale-[1.02] z-10"
                  : "border-secondary/15 bg-surface-container-low hover:border-secondary/35 text-secondary"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`font-display text-4xl font-extrabold ${isSelected ? "text-primary" : "text-primary/10"}`}
                >
                  {step.stepNum}
                </span>
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim" />
                )}
              </div>
              <h4 className="font-bold text-sm text-primary leading-tight">
                {step.title}
              </h4>
              <p className="text-[10px] text-secondary mt-1 uppercase tracking-wider">
                {step.duration}
              </p>
            </button>
          );
        })}
      </div>

      {/* Focus Interactive Viewer Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStepIdx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-container-radius p-8 lg:p-12 border border-secondary/10 shadow-[0_30px_60px_rgba(17,17,17,0.01)] grid md:grid-cols-12 gap-8 items-start"
        >
          {/* Detailed Info Column */}
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-primary text-on-primary font-display font-black px-4 py-1.5 rounded-lg text-lg">
                PHASE {activeStep.stepNum}
              </span>
              <span className="text-xs text-secondary uppercase tracking-widest font-bold">
                EST. DURATION: {activeStep.duration}
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-primary leading-tight">
              {activeStep.title} Technology Stage
            </h3>

            <p className="font-body-md text-secondary leading-relaxed text-base">
              {activeStep.detailedScope}
            </p>

            <div className="pt-4 border-t border-secondary/10 flex items-center gap-4 text-xs font-mono text-secondary">
              <span className="material-symbols-outlined text-lg">
                verified_user
              </span>
              <span>
                Rigorous technical guardrails in place for Stage{" "}
                {activeStep.stepNum}
              </span>
            </div>
          </div>

          {/* Deliverables Column */}
          <div className="md:col-span-5 bg-surface-container rounded-2xl p-6 lg:p-8 space-y-4">
            <span className="font-label-caps text-xs tracking-widest text-secondary uppercase font-bold block">
              STAGE DELIVERABLES
            </span>

            <ul className="space-y-3">
              {activeStep.deliverables.map((deliv, dIdx) => (
                <li key={dIdx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-base mt-1">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-primary font-medium">
                    {deliv}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-secondary/10">
              <p className="text-[11px] text-secondary leading-normal">
                All Kelvor deliverables are signed off by leads, stored on
                secure environments, and fully accessible inside git
                repositories.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
