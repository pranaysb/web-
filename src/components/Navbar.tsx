import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils';
import { useState } from 'react';
import logo from "../assets/logos/logo.png";

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Clubs', path: '/clubs' },
  { name: 'Societies', path: '/societies' },
  { name: 'Archive', path: '/archive' },
  { name: 'Hall of Fame', path: '/hall-of-fame' },
  { name: 'Feedback Form', path: '/feedback' },
  { name: 'Gallery', path: '/gallery' },
];

export const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent backdrop-blur-sm bg-black/5"
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Link to="/" className="group flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden flex items-center justify-center bg-white/[0.03] backdrop-blur-xl">
          <img
            src={logo}
            alt="IIT Bhilai Cultural Council"
            className="w-full h-full object-contain p-1"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-serif tracking-widest text-sm uppercase opacity-90">IIT Bhilai</span>
          <span className="text-indigo-400 font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 group-hover:opacity-80 transition-opacity duration-700">Cultural Council</span>
        </div>
      </Link>

      <div className="flex gap-10 mr-24 whitespace-nowrap">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "text-[10px] uppercase tracking-[0.4em] transition-all duration-700 relative py-2",
              location.pathname === item.path ? "text-indigo-400" : "text-white/80 hover:text-white"
            )}
          >
            {item.name}
            {location.pathname === item.path && (
              <motion.div
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        {/* <button className="px-8 py-3 border border-white/10 text-white/40 text-[10px] uppercase tracking-[0.3em] hover:border-indigo-500 hover:text-indigo-400 transition-all duration-700 rounded-full bg-white/[0.02] backdrop-blur-xl">
          Join the Guild
        </button> */}
      </div>
    </motion.nav>
  );
};
