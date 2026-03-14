import React, { useState } from "react";
import { motion } from "motion/react";
import { ImageLightbox } from "../components/ImageLightbox";
import { CLUBS } from "../data";

export const GalleryCollage = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allImages = CLUBS.flatMap((club) => club.gallery);

  // Masonry layout spans
  const getRandomSpan = (index: number) => {
    const spans = [
      { col: "col-span-1", row: "row-span-1" },
      { col: "col-span-2", row: "row-span-1" },
      { col: "col-span-1", row: "row-span-2" },
      { col: "col-span-2", row: "row-span-2" },
    ];
    return spans[index % spans.length];
  };

  return (
    <section className="py-20 px-4 bg-black/20">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-serif text-white mb-12 text-center">
          Gallery
        </h2>

        {/* COLLAGE GRID */}

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

      {/* LIGHTBOX */}

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

    </section>
  );
};