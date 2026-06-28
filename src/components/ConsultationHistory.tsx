import React, { useState, useEffect } from "react";
import { ConsultationRequest } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ConsultationHistoryProps {
  refreshTrigger: number;
}

export default function ConsultationHistory({
  refreshTrigger,
}: ConsultationHistoryProps) {
  const [requests, setRequests] = useState<ConsultationRequest[]>([]);

  useEffect(() => {
    loadRequests();
  }, [refreshTrigger]);

  const loadRequests = () => {
    try {
      const stored = localStorage.getItem("kelvor_consultations");
      if (stored) {
        setRequests(JSON.parse(stored));
      } else {
        setRequests([]);
      }
    } catch (e) {
      console.error("Error loading consultations", e);
    }
  };

  const handleCancelRequest = (id: string) => {
    try {
      const stored = localStorage.getItem("kelvor_consultations");
      if (stored) {
        const parsed = JSON.parse(stored) as ConsultationRequest[];
        const filtered = parsed.filter((item) => item.id !== id);
        localStorage.setItem("kelvor_consultations", JSON.stringify(filtered));
        loadRequests();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSimulateStatus = (
    id: string,
    nextStatus: "reviewed" | "scheduled",
  ) => {
    try {
      const stored = localStorage.getItem("kelvor_consultations");
      if (stored) {
        const parsed = JSON.parse(stored) as ConsultationRequest[];
        const updated = parsed.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              status: nextStatus,
              notes:
                nextStatus === "reviewed"
                  ? "Reviewed by Kelvor Engineering Board. Estimate verified."
                  : "Free Consultation scheduled! Check your inbox.",
            };
          }
          return item;
        });
        localStorage.setItem("kelvor_consultations", JSON.stringify(updated));
        loadRequests();
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (requests.length === 0) {
    return null;
  }

  return (
    <div className="bg-primary text-on-primary rounded-container-radius p-8 lg:p-12 border border-white/10 shadow-[0_40px_40px_rgba(17,17,17,0.08)] mt-12">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs text-tertiary-fixed font-bold tracking-widest uppercase">
            CLIENT PORTAL
          </span>
          <h4 className="font-display text-2xl md:text-3xl font-extrabold text-white mt-1">
            Active Proposals & Inquiries
          </h4>
        </div>
        <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-mono">
          {requests.length} Project Tracker{requests.length > 1 ? "s" : ""}{" "}
          Active
        </span>
      </div>

      <div className="space-y-6">
        <AnimatePresence>
          {requests.map((req) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Top Row: Meta & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block">
                    INQUIRY ID
                  </span>
                  <span className="font-mono text-xs text-white/90">
                    {req.id}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/60 font-mono">
                    {req.date}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      req.status === "pending"
                        ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                        : req.status === "reviewed"
                          ? "bg-blue-400/20 text-blue-300 border border-blue-400/30"
                          : "bg-tertiary-fixed/20 text-tertiary-fixed border border-tertiary-fixed/30"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              </div>

              {/* Grid content */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block">
                    PRODUCT BRIEF
                  </span>
                  <span className="font-bold text-white text-sm">
                    {req.projectType}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block">
                    ESTIMATED BUDGET
                  </span>
                  <span className="font-bold text-white text-sm">
                    {req.budget || "To be discussed"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block">
                    EXPECTED TIMELINE
                  </span>
                  <span className="font-bold text-white text-sm">
                    {req.timeline || "To be discussed"}
                  </span>
                </div>
              </div>

              {/* Details text */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-[10px] text-white/50 uppercase tracking-widest block mb-1">
                  PROJECT DETAILS
                </span>
                <p className="text-xs text-white/70 line-clamp-3 leading-relaxed">
                  {req.details}
                </p>
              </div>

              {/* simulated response */}
              {req.notes && (
                <div className="mt-4 p-4 bg-tertiary-fixed/10 border border-tertiary-fixed/20 rounded-xl text-xs text-tertiary-fixed flex items-start gap-2">
                  <span className="material-symbols-outlined text-base mt-0.5">
                    info
                  </span>
                  <div>
                    <span className="font-bold uppercase tracking-wider text-[9px] block">
                      ENGINEER NOTES:
                    </span>
                    <p className="mt-0.5 text-white/90">{req.notes}</p>
                  </div>
                </div>
              )}

              {/* Action operations */}
              <div className="mt-6 flex flex-wrap gap-3 justify-end">
                {req.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleSimulateStatus(req.id, "reviewed")}
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wider transition-all"
                    >
                      🧪 Simulate Review
                    </button>
                    <button
                      onClick={() => handleSimulateStatus(req.id, "scheduled")}
                      className="bg-tertiary-fixed/25 hover:bg-tertiary-fixed/40 text-tertiary-fixed border border-tertiary-fixed/30 px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wider transition-all"
                    >
                      ⚡ Approve & Book Call
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleCancelRequest(req.id)}
                  className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all"
                >
                  Cancel Proposal Request
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
