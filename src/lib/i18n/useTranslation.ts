/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useLanguage } from './LanguageContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  // Helper function to get nested translation keys: 'nav.home' -> translations[language].nav.home
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    
    return value === undefined ? key : value;
  };
  
  return { t };
}; 