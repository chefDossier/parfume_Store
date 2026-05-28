    "use client";

    import React, { useState, useEffect } from 'react';
    import { motion, Variants, AnimatePresence } from 'framer-motion';
    import { ArrowRight, Sparkles } from 'lucide-react';

    const specialEditions = [
    {
        id: 1,
        text: "Édition Spéciale : Ambre Impérial - Flacon d'Or Numéroté",
        image: "/parfume/black_per.jpg"
    },
    {
        id: 2,
        text: "Collection Privée : Nuit Nomade - Extrait Absolu de Cuir",
        image: "/parfume/black_per.jpg"
    },
    {
        id: 3,
        text: "Série Rare : Sillage d'Or - Infusion Exclusive 2026",
        image: "/parfume/black_per.jpg"
    }
    ];

    const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % specialEditions.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const containerSign: Variants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    return (
        <section className="relative min-h-screen w-full bg-[#fcfbfa] flex items-center overflow-hidden pt-24 md:pt-16">
        
        {/* Arrière-plan : Lignes de structure */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute top-0 left-1/3 w-[1px] h-full bg-neutral-200/60" />
            <div className="absolute top-0 left-2/3 w-[1px] h-full bg-neutral-200/60" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-12">
            
            {/* --- BLOC GAUCHE --- */}
            <motion.div 
            className="lg:col-span-7 space-y-8 flex flex-col justify-center text-left"
            variants={containerSign}
            initial="hidden"
            animate="visible"
            >
            {/* --- BANDEAU ÉDITION SPÉCIALE DYNAMIQUE --- */}
            <motion.div 
                variants={fadeInUp}
                className="relative w-full max-w-md h-20 rounded-full overflow-hidden border border-neutral-200/30 shadow-md flex items-center px-6"
            >
                <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                    key={`bg-${currentIndex}`}
                    src={specialEditions[currentIndex].image}
                    alt="Atmosphère Parfum"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover filter blur-[1px]"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-neutral-950/45 mix-blend-multiply" />
                </div>

                <div className="relative z-10 flex items-center gap-3 w-full text-white select-none">
                <Sparkles size={13} className="text-[#e21e26] shrink-0 animate-pulse" />
                <div className="overflow-hidden w-full h-4 relative">
                    <AnimatePresence mode="wait">
                    <motion.p
                        key={`text-${currentIndex}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-semibold truncate text-neutral-100"
                    >
                        {specialEditions[currentIndex].text}
                    </motion.p>
                    </AnimatePresence>
                </div>
                </div>
            </motion.div>

            <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl xl:text-7xl font-light text-neutral-900 tracking-tight leading-[1.1] font-serif"
            >
                L'empreinte d'une <br />
                <span className="italic font-normal text-neutral-800">émotion</span> invisible.
            </motion.h1>

            <motion.p 
                variants={fadeInUp}
                className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-xl font-light"
            >
                Plus qu’un sillage, une architecture sensorielle. Maison Aura façonne des extraits de parfum rares où les essences précieuses entrent en résonance avec votre histoire.
            </motion.p>

            <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 pt-4"
            >
                <a 
                href="#collections"
                className="group relative px-8 py-4 bg-neutral-950 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] overflow-hidden flex items-center gap-3 shadow-lg hover:bg-[#e21e26] transition-colors duration-500"
                >
                <span>Découvrir l'univers</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a 
                href="#diagnostic"
                className="px-8 py-4 bg-[#e21e26] text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-md hover:bg-[#b8141a] transition-all duration-300 text-center border-0"
                >
                Diagnostic olfactif
                </a>
            </motion.div>
            </motion.div>

            {/* --- BLOC DROITE (Visuel d'Art & Dégradé d'Évaporation) --- */}
            <motion.div 
            className="lg:col-span-5 relative flex justify-center items-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
            {/* Halo d'ambiance asymétrique arrière-plan (Noir & Rouge) */}
            <div className="absolute -inset-4 z-0 pointer-events-none filter blur-3xl opacity-30 mix-blend-multiply bg-radial from-[#e21e26] via-neutral-950 to-transparent rounded-full" />

            {/* Conteneur principal de l'image artistique */}
            <div 
                className="relative w-[290px] h-[390px] md:w-[360px] md:h-[480px] overflow-hidden z-10 transition-transform duration-700 ease-out"
                style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)'
                }}
            >
                <img 
                src="/parfume/black_per.jpg" 
                alt="Flacon d'exception Maison Aura" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 select-none"
                />
                {/* Ombre douce intégrée pour donner de la profondeur à la surface du verre */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-neutral-950/10 pointer-events-none" />
            </div>

            {/* Cartouche Note de Tête - Parfaitement responsive et contrasté */}
            <div className="absolute bottom-10 left-4 sm:bottom-12 sm:-left-8 lg:-left-12 lg:bottom-24 z-20 bg-neutral-950/80 sm:bg-white/80 backdrop-blur-md border border-neutral-800/10 sm:border-neutral-100 py-3.5 px-5 rounded-xl shadow-xl max-w-[220px]">
                <p className="text-[9px] uppercase tracking-[0.22em] text-neutral-400 sm:text-neutral-400 font-semibold mb-0.5">
                Note de tête
                </p>
                <p className="text-xs font-serif text-white sm:text-neutral-900 leading-tight">
                Bergamote & Écorce d'Ambre
                </p>
            </div>
            </motion.div>

        </div>
        </section>
    );
    };

    export default Hero;