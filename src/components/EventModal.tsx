import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Calendar, MapPin, Info, Star } from "lucide-react";
import { Event } from "../data";

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export const EventModal = ({ event, onClose }: EventModalProps) => {

  /* ---------------- IMAGE SLIDER STATE ---------------- */

  const [currentImage, setCurrentImage] = useState(0);

  const images =
    event.images && event.images.length > 0
      ? event.images
      : [event.image];

  /* ---------------- ESC + SCROLL LOCK ---------------- */

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prev || "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const modal = (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[92%] max-w-[650px] max-h-[90vh] flex flex-col bg-[#0b0f2a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 180, damping: 25 }}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition"
        >
          <X className="w-5 h-5 text-white/70" />
        </button>

        {/* ---------------- IMAGE SLIDER ---------------- */}

        <div className="h-[220px] w-full shrink-0 relative overflow-hidden">

          <img
            src={images[currentImage]}
            alt={event.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f2a] via-transparent to-transparent" />

          {images.length > 1 && (
            <>
              {/* Left Button */}
              <button
                onClick={() =>
                  setCurrentImage(
                    (currentImage - 1 + images.length) % images.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-lg hover:bg-black/70 transition"
              >
                ‹
              </button>

              {/* Right Button */}
              <button
                onClick={() =>
                  setCurrentImage(
                    (currentImage + 1) % images.length
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-lg hover:bg-black/70 transition"
              >
                ›
              </button>
            </>
          )}

        </div>

        {/* ---------------- CONTENT ---------------- */}

        <div className="p-8 flex-1 overflow-y-auto flex flex-col gap-6">

          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 bg-indigo-600 text-white text-[9px] uppercase tracking-[0.2em] rounded-full">
              {event.type}
            </span>

            {event.category && (
              <span className="px-3 py-1 bg-white/10 border border-white/10 text-white/80 text-[9px] uppercase tracking-[0.2em] rounded-full">
                {event.category}
              </span>
            )}
          </div>

          <h2 className="text-3xl font-serif text-white">
            {event.title}
          </h2>

          <div className="flex items-center gap-6 text-white/40 text-xs uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <Calendar className="w-3 h-3" /> {event.date}
            </span>

            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> IIT Bhilai
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] flex items-center gap-2">
              <Info className="w-3 h-3 text-indigo-400" /> Description
            </span>

            <p className="text-white/70 text-sm leading-relaxed">
              {event.fullDescription || event.description}
            </p>
          </div>

          {event.highlights && (
            <div className="flex flex-col gap-3">

              <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] flex items-center gap-2">
                <Star className="w-3 h-3 text-indigo-400" /> Highlights
              </span>

              {event.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-lg p-3"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />

                  <span className="text-white/70 text-sm">
                    {highlight}
                  </span>
                </div>
              ))}

            </div>
          )}

          <button className="mt-4 w-full py-3 bg-white text-black text-[10px] uppercase tracking-[0.35em] rounded-full hover:bg-indigo-400 transition">
            Register Now
          </button>

        </div>

      </motion.div>
    </motion.div>
  );

  return createPortal(modal, document.body);
};