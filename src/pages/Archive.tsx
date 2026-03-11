import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Layout, Section } from '../components/Layout';
import { ALL_EVENTS, Event } from '../data';
import { cn } from '../utils';
import { Calendar, Search, ArrowRight, Trophy, Music, Palette, Mic2, Zap, X, MapPin, Clock, Info, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: Zap },
  { id: 'upcoming', label: 'Upcoming', icon: Calendar },
  { id: 'inter-iit', label: 'Inter IIT', icon: Trophy },
  { id: 'meraz', label: 'Meraz', icon: Music },
  { id: 'anveshan', label: 'Anveshan', icon: Palette },
  { id: 'other', label: 'Other', icon: Mic2 },
];

const EventModal = ({ event, onClose }: { event: Event, onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        onClick={onClose}
      />
      
      <motion.div 
        className="relative w-full max-w-6xl bg-[#0b0f2a] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[90vh]"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-4 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white/50 hover:text-white transition-all hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left: Image & Quick Info */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f2a] via-transparent to-transparent" />
          
          <div className="absolute bottom-12 left-12 right-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <span className="px-4 py-2 bg-indigo-600 text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
                {event.type}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full border border-white/10">
                {event.category}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-serif text-white mb-4"
            >
              {event.title}
            </motion.h2>
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-12 md:p-20 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-indigo-400" /> Date
                </span>
                <span className="text-white text-lg font-serif">{event.date}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-indigo-400" /> Venue
                </span>
                <span className="text-white text-lg font-serif">Open Air Theatre</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-white/50 text-xs uppercase tracking-[0.4em] flex items-center gap-3">
                <Info className="w-4 h-4 text-indigo-400" /> About the Event
              </h3>
              <p className="text-white/40 text-lg leading-relaxed font-sans">
                {event.fullDescription || event.description}
              </p>
            </div>

            {event.highlights && (
              <div className="flex flex-col gap-6">
                <h3 className="text-white/50 text-xs uppercase tracking-[0.4em] flex items-center gap-3">
                  <Star className="w-4 h-4 text-indigo-400" /> Highlights
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {event.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span className="text-white/60 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-white text-black text-xs uppercase tracking-[0.4em] font-bold rounded-full hover:bg-indigo-400 transition-colors"
            >
              Register for Event
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Archive = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const filteredEvents = ALL_EVENTS.filter(e => {
    const matchesFilter = filter === 'all' || e.type === filter;
    const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase()) || 
                         e.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Layout>
      <Section className="pt-40 pb-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 mb-32">
          <motion.span 
            className="text-indigo-400 text-xs uppercase tracking-[0.8em] opacity-60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            The Archive
          </motion.span>
          <div className="overflow-hidden">
            <motion.h1 
              className="text-6xl md:text-9xl font-serif leading-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
              Cultural <span className="italic text-shimmer">Legacy</span>
            </motion.h1>
          </div>
          <motion.p 
            className="text-white/30 text-lg max-w-2xl leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            A comprehensive record of every performance, exhibition, and battle that has shaped the cultural landscape of IIT Bhilai.
          </motion.p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col gap-12 mb-24">
          <div className="flex flex-wrap gap-4 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 text-[10px] uppercase tracking-[0.3em] rounded-full transition-all duration-500 group relative overflow-hidden border",
                  filter === cat.id 
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.3)]" 
                    : "text-white/30 hover:text-white border-white/10 hover:border-white/20 bg-white/[0.02]"
                )}
              >
                <cat.icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", filter === cat.id ? "text-white" : "text-indigo-400")} />
                {cat.label}
                {filter === cat.id && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-indigo-600 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
            <input
              type="text"
              placeholder="Search by event name, description or club..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-6 pl-16 pr-8 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all duration-500 backdrop-blur-xl"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredEvents.map((event, i) => {
            const yOffset = useTransform(scrollYProgress, [0, 1], [0, (i % 3 + 1) * -100]);
            
            return (
              <motion.div
                key={event.id}
                className="group relative bg-white/[0.02] border border-white/5 overflow-hidden rounded-[40px] backdrop-blur-sm cursor-pointer"
                style={{ y: yOffset }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, y: -20 }}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f2a] via-transparent to-transparent" />
                  <div className={cn(
                    "absolute top-8 right-8 px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full shadow-xl border border-white/10 backdrop-blur-md",
                    event.type === 'upcoming' ? "bg-indigo-600/80 text-white" : "bg-white/10 text-white/60"
                  )}>
                    {event.type}
                  </div>
                </div>
                <div className="p-12">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-indigo-400 text-[10px] uppercase tracking-[0.3em] font-medium">{event.date}</span>
                    {event.year && <span className="text-white/20 text-[10px] font-serif italic tracking-widest">{event.year}</span>}
                  </div>
                  <h3 className="text-3xl font-serif mb-6 group-hover:text-shimmer transition-colors leading-tight">{event.title}</h3>
                  <p className="text-white/30 text-sm mb-10 leading-relaxed line-clamp-2 tracking-wide">{event.description}</p>
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/20 group-hover:text-indigo-400 transition-colors">
                    <Calendar className="w-4 h-4" /> {event.type === 'upcoming' ? 'Register Now' : 'View Highlights'}
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
                {/* Light Sweep */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
              </motion.div>
            );
          })}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="py-40 text-center">
            <span className="text-white/20 text-xs uppercase tracking-[0.4em]">No events found matching your criteria</span>
          </div>
        )}
      </Section>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}
      </AnimatePresence>
    </Layout>
  );
};
