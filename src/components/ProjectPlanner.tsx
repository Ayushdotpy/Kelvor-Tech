import React, { useState } from "react";
import { ESTIMATION_FACTORS } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface ProjectPlannerProps {
  onPlanGenerated: (planText: string, budget: string, timeline: string) => void;
}

export default function ProjectPlanner({
  onPlanGenerated,
}: ProjectPlannerProps) {
  const [selectedPlatform, setSelectedPlatform] = useState(
    ESTIMATION_FACTORS.platforms[0].id,
  );
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth"]);
  const [selectedTimeline, setSelectedTimeline] = useState("standard");
  const [isGenerated, setIsGenerated] = useState(false);

  const activePlatform =
    ESTIMATION_FACTORS.platforms.find((p) => p.id === selectedPlatform) ||
    ESTIMATION_FACTORS.platforms[0];
  const activeTimeline =
    ESTIMATION_FACTORS.timelines.find((t) => t.id === selectedTimeline) ||
    ESTIMATION_FACTORS.timelines[0];

  const handleFeatureToggle = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculations
  const baseCost = activePlatform.baseCost;
  const baseWeeks = activePlatform.baseWeeks;

  const featuresCost = selectedFeatures.reduce((total, featId) => {
    const feat = ESTIMATION_FACTORS.features.find((f) => f.id === featId);
    return total + (feat ? feat.cost : 0);
  }, 0);

  const featuresWeeks = selectedFeatures.reduce((total, featId) => {
    const feat = ESTIMATION_FACTORS.features.find((f) => f.id === featId);
    return total + (feat ? feat.weeks : 0);
  }, 0);

  const subtotalCost =
    (baseCost + featuresCost) * activeTimeline.costMultiplier;
  const subtotalWeeks =
    (baseWeeks + featuresWeeks) * activeTimeline.timeMultiplier;

  // Format monetary sums
  const formattedCost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(subtotalCost);

  const formattedWeeks = `${subtotalWeeks.toFixed(1)} Weeks`;

  const handleApplyToForm = () => {
    const platformName = activePlatform.name;
    const selectedFeaturesList = selectedFeatures
      .map((id) => ESTIMATION_FACTORS.features.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const briefText = `Custom Proposal request for: ${platformName}. Selected Features: [${selectedFeaturesList}]. Timeline Pace: ${activeTimeline.name}.`;
    onPlanGenerated(briefText, formattedCost, formattedWeeks);
    setIsGenerated(true);
    setTimeout(() => {
      setIsGenerated(false);
    }, 3000);
  };

  return (
    <div
      className="bg-surface-container rounded-container-radius p-8 lg:p-12 border border-secondary/15 shadow-[0_30px_60px_rgba(17,17,17,0.02)]"
      id="estimator"
    >
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">
          DYNAMIC ENGINE
        </span>
        <h3 className="font-display-xl-mobile md:font-headline-lg text-primary tracking-tight font-bold mb-4 leading-none">
          Interactive Scope Planner
        </h3>
        <p className="font-body-md text-body-md text-secondary max-w-xl mx-auto">
          Tailor your product specifications in real-time. Choose your platform,
          scale up your feature requirements, and see architectural estimation
          breakdowns.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Platform Select */}
          <div>
            <label className="block font-label-caps text-label-caps text-primary uppercase tracking-wider mb-4 font-semibold">
              01 / Select Base Platform Structure
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              {ESTIMATION_FACTORS.platforms.map((plat) => (
                <button
                  key={plat.id}
                  onClick={() => setSelectedPlatform(plat.id)}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden flex items-start gap-4 ${
                    selectedPlatform === plat.id
                      ? "border-primary bg-primary text-on-primary shadow-lg scale-[1.02]"
                      : "border-secondary/20 bg-white hover:border-primary text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl opacity-80 mt-1">
                    {plat.icon}
                  </span>
                  <div>
                    <h5 className="font-bold text-sm leading-tight">
                      {plat.name}
                    </h5>
                    <p
                      className={`text-xs mt-1 ${selectedPlatform === plat.id ? "text-on-primary/70" : "text-secondary"}`}
                    >
                      Starts from ${plat.baseCost.toLocaleString()} •{" "}
                      {plat.baseWeeks}w
                    </p>
                  </div>
                  {selectedPlatform === plat.id && (
                    <div className="absolute top-2 right-2 bg-tertiary-fixed text-primary rounded-full p-0.5 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] font-bold">
                        check
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Feature Multiplexer */}
          <div>
            <label className="block font-label-caps text-label-caps text-primary uppercase tracking-wider mb-4 font-semibold">
              02 / Select Enterprise Features & Scale
            </label>
            <div className="space-y-3">
              {ESTIMATION_FACTORS.features.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => handleFeatureToggle(feat.id)}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-200 ${
                      isChecked
                        ? "border-primary/80 bg-white shadow-sm ring-1 ring-primary"
                        : "border-secondary/15 bg-white/70 hover:bg-white hover:border-secondary/40"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                          isChecked
                            ? "bg-primary border-primary text-white"
                            : "border-secondary/40 bg-white"
                        }`}
                      >
                        {isChecked && (
                          <span className="material-symbols-outlined text-[14px] font-bold">
                            check
                          </span>
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-sm text-primary block leading-none">
                          {feat.name}
                        </span>
                        <span className="text-[10px] text-secondary uppercase tracking-wider font-semibold mt-1 block">
                          Category: {feat.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-sm text-primary block">
                        ${feat.cost.toLocaleString()}
                      </span>
                      <span className="text-xs text-secondary">
                        +{feat.weeks}w
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Speed Select */}
          <div>
            <label className="block font-label-caps text-label-caps text-primary uppercase tracking-wider mb-4 font-semibold">
              03 / Development Pace & Intensity
            </label>
            <div className="grid grid-cols-2 gap-4">
              {ESTIMATION_FACTORS.timelines.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setSelectedTimeline(time.id)}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    selectedTimeline === time.id
                      ? "border-primary bg-primary text-on-primary font-bold"
                      : "border-secondary/20 bg-white/50 text-secondary hover:bg-white"
                  }`}
                >
                  <span className="text-sm font-bold block">{time.name}</span>
                  <span className="text-xs opacity-75">
                    {time.id === "expedited"
                      ? "⚡ +35% budget, -30% time"
                      : "✓ Base parameters"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Dynamic Invoice */}
        <div className="lg:col-span-5">
          <div className="bg-primary text-on-primary rounded-2xl p-8 sticky top-32 space-y-8 shadow-2xl">
            <div className="border-b border-white/10 pb-6">
              <span className="text-xs text-tertiary-fixed font-bold tracking-widest uppercase">
                PROPOSAL SUMMARY
              </span>
              <h4 className="font-display text-2xl font-bold text-white mt-1">
                Kelvor Architecture Estimate
              </h4>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start text-sm">
                <div>
                  <span className="text-white/60 block text-xs uppercase tracking-wider">
                    PLATFORM CORE
                  </span>
                  <span className="font-bold text-white">
                    {activePlatform.name}
                  </span>
                </div>
                <span className="font-mono text-white">
                  ${activePlatform.baseCost.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-start text-sm">
                <div>
                  <span className="text-white/60 block text-xs uppercase tracking-wider">
                    FEATURE ADD-ONS
                  </span>
                  <span className="font-bold text-white">
                    {selectedFeatures.length} scale modules selected
                  </span>
                </div>
                <span className="font-mono text-white">
                  ${featuresCost.toLocaleString()}
                </span>
              </div>

              {selectedTimeline === "expedited" && (
                <div className="flex justify-between items-start text-sm text-tertiary-fixed">
                  <div>
                    <span className="block text-xs uppercase tracking-wider">
                      EXPEDITED INTENSITY FEE
                    </span>
                    <span className="font-bold">
                      Accelerated Timeline Active
                    </span>
                  </div>
                  <span className="font-mono">+35%</span>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-6 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-white/50 block text-xs uppercase tracking-wider">
                    TOTAL ESTIMATED INVESTMENT
                  </span>
                  <span className="font-mono text-3xl font-extrabold text-white tracking-tight">
                    {formattedCost}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <span className="text-white/50 block text-xs uppercase tracking-wider">
                    ESTIMATED TIMELINE
                  </span>
                  <span className="font-mono text-2xl font-bold text-tertiary-fixed tracking-tight">
                    {formattedWeeks}
                  </span>
                </div>
                <span className="text-xs text-white/60 text-right max-w-[150px] leading-tight">
                  Based on immediate kickoff capacity.
                </span>
              </div>
            </div>

            <button
              onClick={handleApplyToForm}
              className="w-full bg-tertiary-fixed hover:bg-tertiary-fixed/90 text-primary py-4 rounded-full font-label-caps text-label-caps font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(177,247,51,0.2)]"
            >
              <span className="material-symbols-outlined text-lg">
                edit_note
              </span>
              <span className="tracking-wider">APPLY SCOPE TO BRIEF FORM</span>
            </button>

            <AnimatePresence>
              {isGenerated && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/10 rounded-xl p-3 text-center border border-white/10 text-xs text-tertiary-fixed"
                >
                  ✓ Scope parameters have been imported below to the project
                  form!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
