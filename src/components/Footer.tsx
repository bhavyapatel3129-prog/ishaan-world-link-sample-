import React from 'react';
import { PageId, NAV_ITEMS } from '../types/navigation';
import { Logo } from './Logo';
import { Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1814] text-[#EFEBE4] border-t border-[#2F2922] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#302821]">
          {/* Column 1: Brand & Positioning */}
          <div className="md:col-span-5 space-y-5">
            <div className="bg-white/95 rounded-lg p-3.5 inline-block">
              <Logo size="md" />
            </div>

            <p className="text-sm leading-relaxed text-[#BDB5AB] max-w-sm">
              Gandhidham-based timber enterprise backed by 20+ years of industry
              experience and a family legacy spanning more than five decades.
              Supplying Teak, Softwood, and Hardwood across India.
            </p>

            <div className="pt-2 flex items-center gap-2.5 text-xs text-[#E0B97D] font-medium tracking-wide">
              <ShieldCheck size={16} className="shrink-0 text-[#E0B97D]" />
              <span>Member of the Kandla Timber Association</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A69B8D]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-[#DDD5CB] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#359C52] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Desk */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A69B8D]">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-sm text-[#CDC4B8]">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-[#359C52] shrink-0 mt-0.5" />
                <span>Gandhidham, Gujarat, India</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={17} className="text-[#359C52] shrink-0 mt-0.5" />
                <a
                  href="mailto:info.ishaanworldlink@gmail.com"
                  className="font-mono text-xs text-[#E5DFD7] hover:text-[#359C52] transition-colors underline-offset-4 hover:underline break-all"
                >
                  info.ishaanworldlink@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wide uppercase text-[#1C1814] bg-[#E3D6C5] hover:bg-white rounded-md transition-colors cursor-pointer"
              >
                <span>Request Specification</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8174]">
          <p className="font-serif italic text-sm text-[#B8AEA2]">
            “Delivering Timber. Upholding Commitments.”
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>© {currentYear} ISHAAN WORLDLINK LLP. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
