import React, { useState, useEffect } from 'react';
import { PageId } from './types/navigation';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getPageFromUrl = (): PageId => {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

    if (path.includes('service') || hash.includes('service')) return 'services';
    if (path.includes('about') || hash.includes('about')) return 'about';
    if (path.includes('contact') || hash.includes('contact')) return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromUrl);

  const getPathForPage = (page: PageId): string => {
    switch (page) {
      case 'services':
        return '/our-services';
      case 'about':
        return '/about-us';
      case 'contact':
        return '/contact';
      case 'home':
      default:
        return '/';
    }
  };

  const getTitleForPage = (page: PageId): string => {
    switch (page) {
      case 'services':
        return 'Our Timber | Teak, Softwood & Hardwood — ISHAAN WORLDLINK LLP';
      case 'about':
        return 'About Us | Decades of Heritage & Experience — ISHAAN WORLDLINK LLP';
      case 'contact':
        return 'Contact Us | Timber Specifications & Enquiries — ISHAAN WORLDLINK LLP';
      case 'home':
      default:
        return 'ISHAAN WORLDLINK LLP | Premium Timber Trading & Teak Processing';
    }
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = getPathForPage(page);

    try {
      window.history.pushState({ page }, '', targetPath);
    } catch {
      window.location.hash = page;
    }

    document.title = getTitleForPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
      document.title = getTitleForPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    // Initial page title sync
    document.title = getTitleForPage(currentPage);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-[#1E1A16] font-sans selection:bg-[#E3CBB3] selection:text-[#1F1914]">
      {/* 4-Item Premium Header with Official Logo */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Minimal Unified Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
