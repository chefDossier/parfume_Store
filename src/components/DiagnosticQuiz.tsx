"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw, Check } from 'lucide-react';

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: { value: string; label: string; description: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    title: "Which atmosphere defines you best?",
    subtitle: "The ambiance in which your mind naturally escapes.",
    options: [
      { value: "boise", label: "A forest at dawn", description: "Scents of damp bark, cedar, and fresh moss." },
      { value: "floral", label: "A secret spring garden", description: "Petals of antique roses, night jasmine, and subtle sweetness." },
      { value: "oriental", label: "A hushed lounge with dim lights", description: "Notes of leather, precious amber, and distant spices." },
      { value: "frais", label: "An escape on the Mediterranean coast", description: "Sea breeze, bursts of bergamot, and crisp citrus." }
    ]
  },
  {
    id: 2,
    title: "What is your ideal intensity?",
    subtitle: "The sillage you wish to leave behind.",
    options: [
      { value: "discret", label: "Intimate & Subtle", description: "A skin scent perceptible only to those very close." },
      { value: "modere", label: "Present & Elegant", description: "A remarkable signature as you pass by, with restraint and distinction." },
      { value: "intense", label: "Opulent & Magnetic", description: "A concentrated perfume extract with an assertive, unforgettable character." }
    ]
  }
];

const recommendations: Record<string, { name: string; family: string; desc: string; notes: string }> = {
  "boise": { name: "Ambre Impérial", family: "Woody Spicy", desc: "The strength of cedar paired with the warmth of ambrette for a mysterious aura.", notes: "Cedar, Ambrette, Pink Pepper" },
  "floral": { name: "Sillage d'Or", family: "Floral Amber", desc: "A heart of jasmine wrapped in subtle vanilla, luminous and carnal.", notes: "Egyptian Jasmine, Black Vanilla, Musk" },
  "oriental": { name: "Nuit Nomade", family: "Oriental Leather", desc: "A rich sillage blending the character of leather with the sensuality of sacred spices.", notes: "Russian Leather, Incense, Saffron" },
  "frais": { name: "Brume Solaire", family: "Musky Citrus", desc: "An explosive freshness of bergamot softened by a base of pure musk.", notes: "Bergamot, Orange Blossom, White Musk" }
};

const DiagnosticQuiz = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelectOption = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 500);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
  };

  const handleDiscoverClick = (result: { name: string; family: string }) => {
    const phoneNumber = "237670000000";
    const message = encodeURIComponent(
      `Bonjour, j'ai effectué le diagnostic Sidess Luxury et j'aimerais obtenir plus d'informations sur ma recommandation : ${result.name} (${result.family})`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const result = recommendations[answers[1]] || recommendations["boise"];

  const stageVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const optionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="diagnostic" className="w-full py-32 px-6 md:px-12 border-t border-neutral-100 relative overflow-hidden">
      
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none flex justify-between max-w-7xl mx-auto px-12 opacity-20">
        <div className="w-[1px] h-full bg-neutral-300" />
        <div className="w-[1px] h-full bg-neutral-300" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          
          {currentStep === 0 && (
            <motion.div
              key="intro"
              variants={stageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center space-y-12 max-w-2xl mx-auto py-12"
            >
              <div className="flex items-center justify-center gap-3 text-neutral-400 select-none">
                <Sparkles size={11} className="text-[#C5A059] animate-pulse shrink-0" />
                <span className="text-[10px] uppercase tracking-[0.35em] font-medium font-sans text-neutral-500">
                  Sidess Luxury Olfactory Diagnostic
                </span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-neutral-900 font-serif tracking-tight leading-tight">
                  Reveal your <span className="italic font-normal">invisible signature</span>.
                </h2>
                <div className="w-12 h-[1px] bg-[#C5A059]/40 mx-auto my-6" />
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  A perfume is an intimate mirror. Through this short ambiance questionnaire, define your key sensory landscapes and let us materialize your perfect sillage.
                </p>
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-neutral-950 text-white rounded-full text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#C5A059] transition-colors duration-500 shadow-lg"
              >
                <span>Start Diagnostic</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          )}

          {currentStep > 0 && currentStep <= questions.length && (() => {
            const currentQuestion = questions[currentStep - 1];
            return (
              <motion.div
                key={`question-${currentStep}`}
                variants={stageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-12"
              >
                <div className="flex items-center justify-between border-b border-neutral-200/60 pb-6">
                  <button 
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="flex items-center gap-2 text-[11px] tracking-widest text-neutral-400 hover:text-[#C5A059] transition-colors font-medium uppercase"
                  >
                    <ArrowLeft size={12} /> Back
                  </button>
                  <div className="text-[11px] tracking-[0.2em] font-mono font-light text-neutral-400">
                    <span className="text-neutral-900 font-medium font-sans">0{currentStep}</span> / 0{questions.length}
                  </div>
                </div>

                <div className="space-y-2 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-light text-neutral-900 font-serif tracking-tight">
                    {currentQuestion.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light tracking-wide">{currentQuestion.subtitle}</p>
                </div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  variants={gridContainerVariants}
                >
                  {currentQuestion.options.map((opt) => {
                    const isSelected = answers[currentQuestion.id] === opt.value;
                    return (
                      <motion.button
                        key={opt.value}
                        variants={optionVariants}
                        onClick={() => handleSelectOption(currentQuestion.id, opt.value)}
                        className={`w-full text-left p-6 md:p-8 rounded-[24px_8px_24px_8px] border transition-all duration-500 relative overflow-hidden group flex flex-col justify-between h-40 ${
                          isSelected 
                            ? 'border-[#C5A059] bg-[#fdfaf5]/50' 
                            : 'border-neutral-200 bg-white/40 hover:border-neutral-400 hover:bg-white'
                        }`}
                      >
                        <div className={`absolute top-0 left-0 w-[3px] h-full transition-transform duration-500 origin-bottom ${
                          isSelected ? 'bg-[#C5A059] scale-y-100' : 'bg-neutral-300 scale-y-0 group-hover:scale-y-100'
                        }`} />

                        <div className="flex items-start justify-between w-full gap-4">
                          <p className={`text-xs font-bold uppercase tracking-[0.15em] font-sans transition-colors duration-300 ${isSelected ? 'text-[#C5A059]' : 'text-neutral-800'}`}>
                            {opt.label}
                          </p>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isSelected ? 'border-[#C5A059] bg-[#C5A059] text-white' : 'border-neutral-300 bg-transparent'
                          }`}>
                            {isSelected && <Check size={8} />}
                          </div>
                        </div>

                        <p className="text-[11px] text-neutral-400 font-light leading-relaxed font-sans max-w-[95%]">
                          {opt.description}
                        </p>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })()}

          {currentStep > questions.length && (
            <motion.div
              key="result"
              variants={stageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6"
            >
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-[240px] h-[320px] bg-neutral-100 rounded-[40px_15px_40px_15px] overflow-hidden border border-neutral-200/40 shadow-xl">
                  <img 
                    src="/parfume/black_per.jpg" 
                    alt={result.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-neutral-950/5" />
                </div>
                <div className="absolute bottom-4 right-4 w-[240px] h-[320px] border border-[#C5A059]/30 rounded-[40px_15px_40px_15px] pointer-events-none -z-10" />
              </div>

              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-semibold block">Your Perfect Accord</span>
                  <h3 className="text-3xl md:text-4xl font-light text-neutral-900 font-serif tracking-tight">{result.name}</h3>
                  <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase font-sans">{result.family}</p>
                </div>

                <div className="w-full h-[1px] bg-neutral-200" />

                <div className="space-y-4">
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    {result.desc}
                  </p>
                  
                  <div className="bg-white/50 border border-neutral-100 p-4 rounded-xl space-y-1 w-fit">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium block">Key notes detected</span>
                    <span className="text-xs text-neutral-800 font-serif italic">{result.notes}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full">
                  <button
                    onClick={() => handleDiscoverClick(result)}
                    className="w-full sm:w-auto px-8 py-4 bg-neutral-950 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-md hover:bg-[#C5A059] transition-colors duration-500 text-center"
                  >
                    Discover the scent
                  </button>
                  
                  <button
                    onClick={handleRestart}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-neutral-200 text-neutral-400 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-neutral-800 transition-all duration-300"
                  >
                    <RefreshCw size={12} />
                    <span>Restart Analysis</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DiagnosticQuiz;