import { motion, AnimatePresence } from 'motion/react';
import { Layout, Section } from '../components/Layout';
import { HALL_OF_FAME, CouncilMember } from '../data';
import React, { useState } from 'react';
import { cn } from '../utils';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const YearCard = ({ year, members, isActive, onClick }: { year: string, members: CouncilMember[], isActive: boolean, onClick: () => void, key?: React.Key }) => {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "relative cursor-pointer transition-all duration-1000",
        isActive ? "w-[600px] h-[400px] z-20" : "w-[300px] h-[200px] opacity-40 grayscale blur-sm z-10"
      )}
      layout
    >
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <span className="text-indigo-400 text-xs uppercase tracking-[0.8em] mb-4">The Legacy</span>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 group-hover:text-shimmer transition-colors">{year}</h3>
          <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 transition-all" />
        </div>

        {/* Floating Portraits Preview */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex -space-x-4">
          {members.slice(0, 3).map((m, i) => (
            <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0b0f2a] overflow-hidden">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
          {members.length > 3 && (
            <div className="w-12 h-12 rounded-full border-2 border-[#0b0f2a] bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] text-white/50">
              +{members.length - 3}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const HallOfFame = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % HALL_OF_FAME.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + HALL_OF_FAME.length) % HALL_OF_FAME.length);

  const activeYear = HALL_OF_FAME[activeIndex];

  return (
    <Layout>
      <Section className="pt-40 pb-32 px-8 max-w-7xl mx-auto min-h-screen flex flex-col">
        <div className="text-center mb-24">
          <motion.span 
            className="text-indigo-400 text-xs uppercase tracking-[0.8em] mb-6 block opacity-60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
          >
            Hall of Legends
          </motion.span>
          <div className="overflow-hidden">
            <motion.h1 
              className="text-6xl md:text-9xl font-serif leading-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
              Hall of <span className="italic text-shimmer">Fame</span>
            </motion.h1>
          </div>
        </div>

        {/* 3D Carousel Area */}
        <div className="relative flex-1 flex flex-col items-center justify-center gap-20">
          <div className="flex items-center justify-center gap-12 w-full">
            <button onClick={prev} className="p-6 rounded-full border border-white/10 hover:border-indigo-500 hover:text-indigo-400 transition-all">
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="flex items-center justify-center gap-8 overflow-visible">
              {HALL_OF_FAME.map((year, i) => (
                <YearCard 
                  key={year.year} 
                  year={year.year} 
                  members={year.members} 
                  isActive={i === activeIndex} 
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>

            <button onClick={next} className="p-6 rounded-full border border-white/10 hover:border-indigo-500 hover:text-indigo-400 transition-all">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Expanded View of Active Year */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeYear.year}
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl font-serif text-white/50">The Council of {activeYear.year}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {activeYear.members.map((member, i) => (
                  <motion.div
                    key={i}
                    className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 p-10 rounded-[40px] flex items-center gap-8 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-indigo-500 transition-all shrink-0">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-serif text-white group-hover:text-shimmer transition-colors">{member.name}</h4>
                      <span className="text-white/30 text-[10px] uppercase tracking-[0.4em]">{member.role}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
    </Layout>
  );
};
