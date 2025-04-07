"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useTranslation } from '@/lib/i18n/useTranslation';

// Dynamically import the Globe component with no SSR
const Globe = dynamic(
  () => import('./Globe/Globe').then((mod) => mod.World),
  { ssr: false }
);

// Sample data for the Globe component
const globeData = [
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.0060,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: '#4169E1'
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.2,
    color: '#4682B4'
  },
  {
    order: 3,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.25,
    color: '#6495ED'
  },
  {
    order: 4,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.35,
    color: '#1E90FF'
  },
  {
    order: 5,
    startLat: 19.0760,
    startLng: 72.8777,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.15,
    color: '#87CEEB'
  }
];

const HeroSection: React.FC = () => {
  const { direction } = useLanguage();
  const { t } = useTranslation();

  return (
    <section className="relative h-[500px] flex items-center bg-white" dir={direction}>
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Insurance Hero Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40 backdrop-blur-[2px]"></div>
      </div> */}
      
      {/* Content */}
      <div className="px-10 mx-10 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#10326F] mb-4">
                {t('hero.title')}
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl text-gray-800 mb-8">
                {t('hero.subtitle')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#services" 
                className="bg-[#10326F] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors text-center"
              >
                {t('hero.exploreServices')}
              </a>
              <a 
                href="/contact" 
                className="bg-transparent hover:bg-[#00aeaa] hover:text-white text-[#00aeaa] border-3 border-[#00aeaa] px-8 py-3 rounded-full font-medium font-bold transition-colors text-center"
              >
                {t('hero.getQuote')}
              </a>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="w-[700px] h-[700px] mx-auto" style={{ maxWidth: '100%', aspectRatio: '1/1' }}>
              <Globe 
                globeConfig={{
                  globeColor: "#162A64",
                  ambientLight: "#ffffff",
                  directionalLeftLight: "#ffffff",
                  directionalTopLight: "#ffffff",
                  pointLight: "#ffffff",
                  atmosphereColor: "#6495ED",
                  atmosphereAltitude: 0.10,
                  emissive: "#0A1E5F",
                  emissiveIntensity: 0.3,
                  shininess: 1,
                  showAtmosphere: true,
                  polygonColor: "rgba(255,255,255,0.7)"
                }}
                data={globeData}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 