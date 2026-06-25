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
    title: "Quelle atmosphère vous définit le mieux ?",
    subtitle: "L'ambiance dans laquelle votre esprit s'évade naturellement.",
    options: [
      { value: "boise", label: "Une forêt au lever du jour", description: "Odeurs d'écorce humide, de cèdre et de mousse fraîche." },
      { value: "floral", label: "Un jardin secret au printemps", description: "Pétales de roses anciennes, jasmin de nuit et douceur fine." },
      { value: "oriental", label: "Un salon feutré aux lueurs tamisées", description: "Notes de cuir, d'ambre précieux et d'épices lointaines." },
      { value: "frais", label: "Une escapade sur les côtes méditerranéennes", description: "Brise marine, éclats de bergamote et agrumes vifs." }
    ]
  },
  {
    id: 2,
    title: "Quelle est votre intensité idéale ?",
    subtitle: "Le sillage que vous souhaitez laisser derrière vous.",
    options: [
      { value: "discret", label: "Intime & Subtil", description: "Un parfum de peau que l'on ne sent que si l'on s'approche de très près." },
      { value: "modere", label: "Présent & Élégant", description: "Une signature remarquable au passage, tout en retenue et distinction." },
      { value: "intense", label: "Opulent & Magnétique", description: "Un extrait de parfum concentré, au caractère affirmé et inoubliable." }
    ]
  }
];

const recommendations: Record<string, { name: string; family: string; desc: string; notes: string }> = {
  "boise": { name: "Ambre Impérial", family: "Boisé Épicé", desc: "La force du cèdre mariée à la chaleur des ambrettes pour une aura mystérieuse.", notes: "Cèdre, Ambrette, Baies Roses" },
  "floral": { name: "Sillage d'Or", family: "Floral Ambré", desc: "Un cœur de jasmin enveloppé d'une vanille subtile, lumineux et charnel.", notes: "Jasmin d'Egypte, Vanille Noire, Musc" },
  "oriental": { name: "Nuit Nomade", family: "Cuir Oriental", desc: "Un sillage riche mêlant le caractère du cuir à la sensualité des épices sacrées.", notes: "Cuir de Russie, Encens, Safran" },
  "frais": { name: "Brume Solaire", family: "Agrumes Musqués", desc: "Une fraîcheur fusante de bergamote adoucie par un fond de musc pur.", notes: "Bergamote, Fleur d'Oranger, Musc Blanc" }
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
    <section id="diagnostic" className="w-full bg-[#fcfbfa] py-32 px-6 md:px-12 border-t border-neutral-100 relative overflow-hidden">
      
      {/* Lignes de repère géométriques discrètes en arrière-plan */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none flex justify-between max-w-7xl mx-auto px-12 opacity-20">
        <div className="w-[1px] h-full bg-neutral-300" />
        <div className="w-[1px] h-full bg-neutral-300" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          
          {/* --- ÉTAPE 0 : INTRODUCTION ÉPURÉE ET HAUTE COUTURE --- */}
          {currentStep === 0 && (
            <motion.div
              key="intro"
              variants={stageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center space-y-12 max-w-2xl mx-auto py-12"
            >
              {/* Titre de section réinventé : Identité de marque affirmée et intemporelle */}
              <div className="flex items-center justify-center gap-3 text-neutral-400 select-none">
                <Sparkles size={11} className="text-[#e21e26] animate-pulse shrink-0" />
                <span className="text-[10px] uppercase tracking-[0.35em] font-medium font-sans text-neutral-500">
                  Le Diagnostic Olfactif Luxury Shop
                </span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-neutral-900 font-serif tracking-tight leading-tight">
                  Révélez votre <span className="italic font-normal">signature</span> invisible.
                </h2>
                <div className="w-12 h-[1px] bg-[#e21e26]/40 mx-auto my-6" />
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  L'écriture d'un parfum est un miroir intime. À travers ce court questionnaire d'ambiance, définissez vos paysages sensoriels clés et laissez-nous matérialiser votre sillage parfait.
                </p>
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-neutral-950 text-white rounded-full text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#e21e26] transition-colors duration-500 shadow-lg"
              >
                <span>Initier le diagnostic</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          )}

          {/* --- ÉTAPES DYNAMIQUES --- */}
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
                    className="flex items-center gap-2 text-[11px] tracking-widest text-neutral-400 hover:text-[#e21e26] transition-colors font-medium uppercase"
                  >
                    <ArrowLeft size={12} /> Retour
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
                            ? 'border-[#e21e26] bg-[#fef2f2]/30' 
                            : 'border-neutral-200 bg-white/40 hover:border-neutral-400 hover:bg-white'
                        }`}
                      >
                        <div className={`absolute top-0 left-0 w-[3px] h-full transition-transform duration-500 origin-bottom ${
                          isSelected ? 'bg-[#e21e26] scale-y-100' : 'bg-neutral-300 scale-y-0 group-hover:scale-y-100'
                        }`} />

                        <div className="flex items-start justify-between w-full gap-4">
                          <p className={`text-xs font-bold uppercase tracking-[0.15em] font-sans transition-colors duration-300 ${isSelected ? 'text-[#e21e26]' : 'text-neutral-800'}`}>
                            {opt.label}
                          </p>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isSelected ? 'border-[#e21e26] bg-[#e21e26] text-white' : 'border-neutral-300 bg-transparent'
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

          {/* --- ÉTAPE FINALE --- */}
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
                <div className="absolute bottom-4 right-4 w-[240px] h-[320px] border border-[#e21e26]/30 rounded-[40px_15px_40px_15px] pointer-events-none -z-10" />
              </div>

              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#e21e26] font-semibold block">Votre Accord Parfait</span>
                  <h3 className="text-3xl md:text-4xl font-light text-neutral-900 font-serif tracking-tight">{result.name}</h3>
                  <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase font-sans">{result.family}</p>
                </div>

                <div className="w-full h-[1px] bg-neutral-200" />

                <div className="space-y-4">
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    {result.desc}
                  </p>
                  
                  <div className="bg-white/50 border border-neutral-100 p-4 rounded-xl space-y-1 w-fit">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium block">Notes clés décelées</span>
                    <span className="text-xs text-neutral-800 font-serif italic">{result.notes}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full">
                  <a
                    href="#collections"
                    className="w-full sm:w-auto px-8 py-4 bg-neutral-950 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-md hover:bg-[#e21e26] transition-colors duration-500 text-center"
                  >
                    Découvrir l'extrait
                  </a>
                  
                  <button
                    onClick={handleRestart}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-neutral-200 text-neutral-400 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-neutral-800 transition-all duration-300"
                  >
                    <RefreshCw size={12} />
                    <span>Recommencer l'analyse</span>
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