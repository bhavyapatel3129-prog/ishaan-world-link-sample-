import React, { useState, useEffect } from 'react';
import { PageId, NAV_ITEMS } from '../types/navigation';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when mobile drawer open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EAE3DA]/80 py-3.5'
            : 'bg-white border-b border-[#F0EAE2] py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#359C52] rounded-md transition-opacity hover:opacity-90"
            aria-label="Ishaan Worldlink LLP - Return to Homepage"
          >
            <Logo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Strictly the 4 requested items) */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 text-[14.5px] tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#1F1B16] font-semibold'
                      : 'text-[#5C554E] hover:text-[#1F1B16] font-normal'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 inset-x-0 h-[2px] bg-[#359C52] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[13.5px] font-medium tracking-wide text-white bg-[#221C16] hover:bg-[#382F26] active:bg-[#15110E] transition-all rounded-md cursor-pointer shadow-xs group"
            >
              <span>Enquire Now</span>
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#221C16] rounded-md"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2D2620] hover:bg-[#F5EFEB] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#ECE5DC]">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#5A5046] hover:bg-[#F5EFEB] rounded-md"
                  aria-label="Close navigation drawer"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-2 mt-6" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between px-4 py-3.5 text-base rounded-lg text-left transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#F5F2EB] text-[#1E1A16] font-semibold border-l-4 border-[#359C52]'
                          : 'text-[#4A423B] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#359C52]" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-[#ECE5DC] space-y-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white bg-[#221C16] hover:bg-[#382F26] rounded-md transition-colors"
              >
                <span>Make an Enquiry</span>
                <ArrowUpRight size={16} />
              </button>

              <div className="text-xs text-[#70665B] space-y-1">
                <p className="font-medium text-[#2F2923]">Gandhidham, Gujarat, India</p>
                <p className="font-mono text-[11px] text-[#554C43]">info.ishaanworldlink@gmail.com</p>
                <p className="text-[11px] text-[#8C8072]">Member, Kandla Timber Association</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
