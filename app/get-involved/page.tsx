"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const intakePaths = [
  {
    id: "partner",
    title: "Partner with us",
    desc: "For institutions ready to co-create at one of the five council levels - Founding, Capital, Government & Multilateral, Academic & Knowledge, or Innovation.",
    formTitle: "Partnership Enquiry",
    fields: [
      { name: "organization", label: "Organization Name", type: "text", required: true },
      { name: "council", label: "Council of Interest", type: "select", options: ["Founding", "Capital", "Government & Multilateral", "Academic & Knowledge", "Innovation"], required: true }
    ]
  },
  {
    id: "host",
    title: "Host a cohort",
    desc: "For employers, government agencies, and demand aggregators with a hiring or production need that a Skildustry cohort can meet.",
    formTitle: "Cohort Hosting Enquiry",
    fields: [
      { name: "organization", label: "Organization Name", type: "text", required: true },
      { name: "needs", label: "Hiring / Production Needs", type: "textarea", required: true }
    ]
  },
  {
    id: "fund",
    title: "Fund the mission",
    desc: "For capital partners and blended-finance vehicles interested in cohort deployment, tournament infrastructure, or Skildustry enterprise formation.",
    formTitle: "Funding & Investment Enquiry",
    fields: [
      { name: "organization", label: "Organization / Fund Name", type: "text", required: true },
      { name: "interest", label: "Area of Interest", type: "select", options: ["Cohort Deployment", "Tournament Infrastructure", "Enterprise Formation", "Other"], required: true }
    ]
  },
  {
    id: "media",
    title: "Media and speaking",
    desc: "For press, editorial partners, and speaking invitations relating to the Skildustry doctrine or Re-Skill Africa’s programmes.",
    formTitle: "Media Enquiry",
    fields: [
      { name: "publication", label: "Publication / Event Name", type: "text", required: true },
      { name: "request", label: "Request Details", type: "textarea", required: true }
    ]
  },
  {
    id: "general",
    title: "General enquiries",
    desc: "For anything else - we will route it to the right desk.",
    formTitle: "General Enquiry",
    fields: [
      { name: "subject", label: "Subject", type: "text", required: true },
      { name: "message", label: "Message", type: "textarea", required: true }
    ]
  }
];

export default function GetInvolvedPage() {
  const [activePath, setActivePath] = useState(intakePaths[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset logic if needed
    }, 4000);
  };

  const handleSelectPath = (path: typeof intakePaths[0]) => {
    setActivePath(path);
    setIsSubmitted(false);
    
    // Auto-scroll on mobile/tablet screens
    if (window.innerWidth < 1024 && formRef.current) {
      setTimeout(() => {
        const yOffset = -100; // offset for sticky headers if any
        const element = formRef.current;
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.05] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-white text-[48px] md:text-[64px] lg:text-[80px] font-bold tracking-tighter leading-none mb-6">
              Build with us
            </h1>
            <p className="text-white/80 text-[18px] md:text-[22px] font-light max-w-2xl leading-relaxed">
              Choose the path that fits - and we will route your enquiry accordingly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── INTAKE SECTION ──────────────────────── */}
      <section className="w-full py-20 md:py-32 px-4 md:px-12 relative z-20 -mt-8 rounded-t-[40px] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left: Path Selector */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4 relative">
            <div className="lg:hidden mb-2">
              <p className="text-brand-dark/60 font-semibold uppercase tracking-wider text-[12px] flex items-center gap-2">
                Step 1: Select your path
                <ArrowRight size={14} className="rotate-90" />
              </p>
            </div>
            
            {intakePaths.map((path, idx) => {
              const isActive = activePath.id === path.id;
              
              return (
                <motion.button
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleSelectPath(path)}
                  className={`text-left p-6 md:p-8 rounded-[24px] border transition-all duration-300 relative overflow-hidden group ${
                    isActive 
                      ? "bg-white border-primary/20 shadow-[0_20px_40px_rgb(0,0,0,0.06)]" 
                      : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-[24px]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className={`text-[20px] md:text-[24px] font-bold tracking-tight transition-colors ${isActive ? "text-brand-dark" : "text-brand-gray group-hover:text-brand-dark"}`}>
                      {path.title}
                    </h3>
                    <div className={`mt-1 shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-brand-dark'}`}>
                      <ArrowRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-90 lg:rotate-0' : '-rotate-45 group-hover:rotate-0'}`} />
                    </div>
                  </div>
                  
                  <p className={`text-[15px] font-light leading-relaxed transition-colors ${isActive ? "text-brand-gray" : "text-brand-gray/60"}`}>
                    {path.desc}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Dynamic Form (Sticky) */}
          <div className="w-full lg:w-[55%]" ref={formRef}>
            <div className="sticky top-32 bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 min-h-[600px] flex flex-col relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center h-full my-auto"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-[28px] font-bold text-brand-dark mb-4">Request Received</h3>
                    <p className="text-brand-gray text-[16px] max-w-md">
                      Thank you for your interest. We have routed your enquiry to the appropriate desk and will be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activePath.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col h-full"
                  >
                    <div className="mb-10">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[12px] font-semibold tracking-wider uppercase rounded-full mb-4">
                        Intake Path
                      </div>
                      <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-brand-dark">
                        {activePath.formTitle}
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow">
                      {/* Standard Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-semibold text-brand-dark uppercase tracking-wide">First Name</label>
                          <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-semibold text-brand-dark uppercase tracking-wide">Last Name</label>
                          <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-semibold text-brand-dark uppercase tracking-wide">Work Email</label>
                          <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-semibold text-brand-dark uppercase tracking-wide">Phone (Optional)</label>
                          <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]" />
                        </div>
                      </div>

                      <div className="w-full h-px bg-gray-100 my-2"></div>

                      {/* Dynamic Fields */}
                      {activePath.fields.map((field) => (
                        <div key={field.name} className="flex flex-col gap-2">
                          <label className="text-[13px] font-semibold text-brand-dark uppercase tracking-wide">
                            {field.label} {field.required && <span className="text-primary">*</span>}
                          </label>
                          
                          {field.type === "text" && (
                            <input type="text" required={field.required} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px]" />
                          )}
                          
                          {field.type === "textarea" && (
                            <textarea rows={4} required={field.required} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px] resize-none" />
                          )}
                          
                          {field.type === "select" && (
                            <select required={field.required} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-[15px] appearance-none">
                              <option value="">Select an option...</option>
                              {field.options?.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          )}
                        </div>
                      ))}

                      <button type="submit" className="mt-6 w-full bg-primary hover:bg-primary-dark text-white rounded-xl py-4 font-semibold text-[15px] flex items-center justify-center gap-3 transition-colors shadow-lg shadow-primary/20 group">
                        Submit Enquiry
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ────────────────────────────── */}
      <Footer showCta={false} />
    </div>
  );
}
