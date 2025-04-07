"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useTranslation } from '@/lib/i18n/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, direction, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" dir={direction}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://ajtportal.aljaziratakaful.com.sa/assets/images/ajt/logo.svg"
              alt="Insurance Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-8"
          >
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{t('nav.home')}</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{t('nav.about')}</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{t('nav.services')}</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">{t('nav.contact')}</Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">EN</span>
              <button 
                onClick={toggleLanguage}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
              >
                <span className="sr-only">Toggle language</span>
                <span 
                  className={`${
                    language === 'ar' ? 'translate-x-6' : 'translate-x-1'
                  } absolute left-0 z-10 shadow inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
                />
                <span 
                  className={`${
                    language === 'ar' ? 'bg-blue-600' : 'bg-gray-200'
                  } absolute inset-0 rounded-full transition-colors duration-200 ease-in-out`}
                />
              </button>
              <span className="text-sm text-gray-600">AR</span>
            </div>
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              {t('common.login')}
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-600">EN</span>
            <button 
              onClick={toggleLanguage}
              className="relative inline-flex h-5 w-10 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle language</span>
              <span 
                className={`${
                  language === 'ar' ? 'translate-x-5' : 'translate-x-1'
                } inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
              />
              <span 
                className={`${
                  language === 'ar' ? 'bg-blue-600' : 'bg-gray-200'
                } absolute inset-0 rounded-full transition-colors duration-200 ease-in-out`}
              />
            </button>
            <span className="text-xs text-gray-600">AR</span>
          </div>
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-blue-600 py-2 font-medium">{t('nav.home')}</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 py-2 font-medium">{t('nav.about')}</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 py-2 font-medium">{t('nav.services')}</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium">{t('nav.contact')}</Link>
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium text-center"
            >
              {t('common.login')}
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 