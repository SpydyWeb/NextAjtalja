"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { direction } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 