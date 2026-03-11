import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { GalleryCollage } from '../components/GalleryCollage';

export const Gallery = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8">Gallery</h1>
          <p className="text-white/40 text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
            A vibrant cultural tapestry of IIT Bhilai.
          </p>
        </div>
        <GalleryCollage />
      </div>
    </Layout>
  );
};
