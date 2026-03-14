import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'motion/react';
import { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { MandalaRing } from './Mandala';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="min-h-screen bg-[#0b0f2a] text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Global Cinematic Background System */}
      <div className="gradient-mesh" />
      <div className="noise-overlay" />

      {/* Ambient Cursor Light */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-10 opacity-30"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(212, 175, 55, 0.05), transparent 80%)`
          )
        }}
      />

      {/* Atmospheric Light Leaks */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-crimson-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Scroll Progress Mandala Indicator */}
      <div className="fixed bottom-8 right-8 w-24 h-24 z-50 flex items-center justify-center pointer-events-none">
        <svg className="w-full h-full -rotate-90 overflow-visible">
          {/* Background Ring */}
          <circle
            cx="48" cy="48" r="40"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-5"
          />
          {/* Progress Ring */}
          <motion.circle
            cx="48" cy="48" r="40"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeDasharray="251.2"
            style={{ pathLength: scrollYProgress }}
            className="drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
          />
        </svg>
        <motion.div
          className="absolute inset-0 p-4 opacity-30"
          style={{ rotate }}
        >
          <MandalaRing className="w-full h-full text-indigo-400" />
        </motion.div>
        <div className="absolute text-[10px] font-mono text-indigo-400 opacity-60">
          <motion.span>
            {/* We can't easily animate text content with motion.span easily without a custom hook, 
                but we can show percentage if needed. For now, just the visual is enough. */}
          </motion.span>
        </div>
      </div>

      <Navbar />

      <main className="relative z-10">
        {children}
      </main>

      <footer className="py-32 px-8 border-t border-white/5 bg-[#0b0f2a]/80 backdrop-blur-2xl relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="flex flex-col gap-6 col-span-1 md:col-span-2">
            <span className="text-white font-serif text-4xl tracking-tight">IIT Bhilai <span className="text-indigo-400 italic">Cultural Council</span></span>
            <p className="text-white/30 text-base leading-relaxed max-w-md tracking-wide">
              The heart of campus life, where creativity meets tradition. We foster an environment of artistic expression, talent discovery, and cultural exchange.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-indigo-400 font-bold">Quick Links</span>
            <div className="flex flex-col gap-4 text-sm text-white/30">
              <Link to="/" className="hover:text-white transition-colors duration-500">Home</Link>
              <Link to="/clubs" className="hover:text-white transition-colors duration-500">The Guilds</Link>
              <Link to="/archive" className="hover:text-white transition-colors duration-500">Events Archive</Link>
              <Link to="/feedback" className="hover:text-white transition-colors duration-500">
                Feedback Form
              </Link>
              <a href="#" className="hover:text-white transition-colors duration-500">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-indigo-400 font-bold">Connect</span>
            <div className="flex flex-col gap-4 text-sm text-white/30">
              <a href="#" className="hover:text-white transition-colors duration-500">Instagram</a>
              <a href="#" className="hover:text-white transition-colors duration-500">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors duration-500">YouTube</a>
              <a href="#" className="hover:text-white transition-colors duration-500">Discord</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-white/20 text-[10px] uppercase tracking-[0.3em]">© 2026 IIT Bhilai Cultural Council. All Rights Reserved.</span>
          <div className="flex gap-12">
            <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const Section = ({ children, className, id }: { children?: ReactNode, className?: string, id?: string }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
