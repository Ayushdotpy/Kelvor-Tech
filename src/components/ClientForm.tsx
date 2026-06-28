import { useState } from "react";

// TODO: Replace with your own Web3Forms access key.
// Get one free at https://web3forms.com — just enter your email, no signup/password needed,
// and it emails you a key instantly. Alternatively, set it in your .env file as VITE_WEB3FORMS_ACCESS_KEY.
const WEB3FORMS_ACCESS_KEY = "bd3e5398-61dd-41ec-b88a-63623a943cc9";

const ClientForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [projectType, setProjectType] = useState("Website / Web Application");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      triggerToast("Please complete required fields (Name & Email).");
      return;
    }

    const activeKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY;

    if (activeKey === "YOUR_ACCESS_KEY_HERE" || !activeKey.trim()) {
      triggerToast("Please configure your Web3Forms access key in your .env file to enable email submission.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: activeKey,
          subject: `New Consultation Request from ${name}`,
          from_name: "Website Consultation Form",
          name,
          email,
          project_type: projectType,
          budget: budget || "To be defined",
          timeline: timeline || "Standard Pace",
          details: details || "No additional specifications provided.",
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Reset fields
        setName("");
        setEmail("");
        setDetails("");
        setBudget("");
        setTimeline("");

        triggerToast(
          "✓ Request sent! We'll be in touch within 24 hours.",
        );
      } else {
        triggerToast("Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      console.error(err);
      triggerToast("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-[#F7F7F5] border-t border-secondary/10"
      id="consultation-form"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-primary text-on-primary px-8 py-4 rounded-full font-sans text-xs font-bold tracking-wider shadow-2xl border border-white/10 flex items-center gap-3">
          <span className="material-symbols-outlined text-tertiary-fixed text-lg">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="bg-primary rounded-container-radius p-6 sm:p-10 md:p-16 lg:p-24 overflow-hidden relative group border border-white/5 shadow-2xl">
          {/* Ambient Background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-tertiary-fixed rounded-full blur-[200px]" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-12">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold text-tertiary-fixed tracking-widest uppercase block">
                START YOUR DIGITAL TRANSFORMATION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-6xl text-white leading-none font-black">
                Let's Build Your
                <br />
                Next Digital Product.
              </h2>
              <p className="text-white/60 font-sans text-base lg:text-lg max-w-2xl mt-4 leading-relaxed">
                Whether you need a custom website, enterprise software, AI
                automation, SaaS platform, or a complete digital transformation,
                our team is ready to bring your vision to life.
              </p>
            </div>

            {/* Consultation Input Form */}
            <form onSubmit={handleFormSubmit} className="space-y-8 sm:space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name field */}
                <div className="relative border-b border-white/10 pb-4 group/input">
                  <label className="block font-sans text-[10px] text-white/40 mb-1 uppercase tracking-widest font-bold">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="[YOUR NAME]"
                    className="w-full bg-transparent border-none text-white text-base outline-none focus:ring-0 placeholder:text-white/15 pt-1"
                  />
                </div>

                {/* Email field */}
                <div className="relative border-b border-white/10 pb-4 group/input">
                  <label className="block font-sans text-[10px] text-white/40 mb-1 uppercase tracking-widest font-bold">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="[EMAIL ADDRESS]"
                    className="w-full bg-transparent border-none text-white text-base outline-none focus:ring-0 placeholder:text-white/15 pt-1"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {/* Project Type drop */}
                <div className="relative border-b border-white/10 pb-4 group/input">
                  <label className="block font-sans text-[10px] text-white/40 mb-1 uppercase tracking-widest font-bold">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-transparent border-none text-white text-sm outline-none focus:ring-0 pt-1 appearance-none cursor-pointer [&>option]:bg-primary [&>option]:text-white"
                  >
                    <option value="Website / Web Application">
                      Website / Web App
                    </option>
                    <option value="Enterprise Software Code">
                      Enterprise Software
                    </option>
                    <option value="AI Automation Pipelines">
                      AI / Automation
                    </option>
                    <option value="SaaS Platform Development">
                      SaaS Platform
                    </option>
                    <option value="Mobile Applications (iOS/Android)">
                      Mobile App
                    </option>
                  </select>
                </div>

                {/* Budget estimate field */}
                <div className="relative border-b border-white/10 pb-4 group/input">
                  <label className="block font-sans text-[10px] text-white/40 mb-1 uppercase tracking-widest font-bold">
                    Estimated Investment
                  </label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. $40,000"
                    className="w-full bg-transparent border-none text-white text-base outline-none focus:ring-0 placeholder:text-white/15 pt-1"
                  />
                </div>

                {/* Timeline speed select */}
                <div className="relative border-b border-white/10 pb-4 group/input">
                  <label className="block font-sans text-[10px] text-white/40 mb-1 uppercase tracking-widest font-bold">
                    Target Timeline Pace
                  </label>
                  <input
                    type="text"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="e.g. 8 Weeks"
                    className="w-full bg-transparent border-none text-white text-base outline-none focus:ring-0 placeholder:text-white/15 pt-1"
                  />
                </div>
              </div>

              {/* Details text-area */}
              <div className="relative border-b border-white/10 pb-4 group/input">
                <label className="block font-sans text-[10px] text-white/40 mb-1 uppercase tracking-widest font-bold">
                  Project Details & Scope specifications
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us about your technical vision..."
                  className="w-full bg-transparent border-none text-white text-base outline-none focus:ring-0 placeholder:text-white/15 pt-1 resize-none"
                />
              </div>

              {/* Form submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-tertiary-fixed text-primary px-10 py-4 rounded-full font-sans text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_40px_rgba(177,247,51,0.2)] hover:shadow-[0_0_60px_rgba(177,247,51,0.4)] disabled:opacity-60 disabled:hover:scale-100"
                >
                  <span>
                    {isSubmitting ? "SENDING..." : "BOOK FREE CONSULTATION"}
                  </span>
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientForm;