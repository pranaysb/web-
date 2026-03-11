import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CLUBS } from '../data';

export const GalleryCollage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const allImages = CLUBS.flatMap(club => club.gallery);

  // Helper to generate random spans for masonry effect
  const getRandomSpan = (index: number) => {
    const spans = [
      { col: 'col-span-1', row: 'row-span-1' },
      { col: 'col-span-2', row: 'row-span-1' },
      { col: 'col-span-1', row: 'row-span-2' },
      { col: 'col-span-2', row: 'row-span-2' },
    ];
    return spans[index % spans.length];
  };

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-white mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px] grid-flow-dense">
          {allImages.map((image, index) => {
            const span = getRandomSpan(index);
            return (
              <motion.div
                key={index}
                className={`${span.col} ${span.row} overflow-hidden rounded-2xl cursor-pointer relative group`}
                whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 2 : -2 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-[100] grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div 
              className="relative w-full max-w-4xl h-full flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white/50 hover:text-white transition-all z-10 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Full view" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
