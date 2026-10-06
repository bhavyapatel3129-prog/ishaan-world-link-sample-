import React from 'react';
import { PageId } from '../types/navigation';
import { TimberVisual } from '../components/TimberVisual';
import { ShieldCheck, Award, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-6 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-[#EAE3DA] pb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
                <span className="w-6 h-[1.5px] bg-[#8C6239]" />
                <span>Our Heritage & Purpose</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1F1A15] tracking-tight leading-tight">
                Delivering Timber. <br />
                <span className="text-[#8C6239] italic font-normal">Upholding Commitments.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#554C43] leading-relaxed max-w-xl">
                ISHAAN WORLDLINK LLP is a Gandhidham-based timber enterprise backed
                by <strong className="font-semibold text-[#1F1A15]">20+ years of industry experience</strong> and
                a family legacy spanning <strong className="font-semibold text-[#1F1A15]">more than five decades</strong>.
                Built on deep hands-on familiarity with wood and a long-standing reputation for trust.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#221C16] hover:bg-[#3A3026] rounded-md transition-colors cursor-pointer"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TimberVisual
                species="heritage_timber"
                aspectRatio="4/3"
                className="shadow-xl"
                alt="Decades of timber heritage and natural wood grain"
                showBadge
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: ABOUT US & FAMILY LEGACY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
                01. Company History
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#1F1A15]">
                About ISHAAN WORLDLINK LLP
              </h2>
              <p className="text-sm text-[#6E6356]">
                Rooted in the commercial timber hub of Gandhidham, Gujarat, India.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#4F463D] leading-relaxed text-base">
            <p className="text-lg text-[#1F1A15] font-serif leading-relaxed">
              Based in Gandhidham, Gujarat, ISHAAN WORLDLINK LLP is an established
              timber enterprise backed by <strong className="font-semibold">20+ years of industry experience</strong> and
              a family legacy spanning <strong className="font-semibold">more than five decades</strong>.
            </p>

            <p>
              Our family background encompasses hands-on work with wood, timber
              commission agency, and timber trading. Over decades of daily interaction
              with timber yards, sawmills, and industrial buyers, our team developed
              a thorough command over log grading, seasoning, and species selection.
            </p>

            <p>
              Today, this rich foundation allows us to serve clients across India
              with dependable supply lines, reliable grading, and precise execution
              of buyer requirements.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF7F2] rounded-lg border border-[#EDE4D8]">
                <div className="text-2xl font-serif font-bold text-[#8C6239]">50+ Years</div>
                <div className="text-xs font-semibold text-[#1F1A15] mt-1">Family Legacy</div>
                <p className="text-xs text-[#6B6154] mt-1">
                  Hands-on work with wood and multi-decade commercial agency roots.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] rounded-lg border border-[#EDE4D8]">
                <div className="text-2xl font-serif font-bold text-[#8C6239]">20+ Years</div>
                <div className="text-xs font-semibold text-[#1F1A15] mt-1">Industry Experience</div>
                <p className="text-xs text-[#6B6154] mt-1">
                  Active timber trading and nationwide B2B supply relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: OUR TIMBER */}
      <section className="bg-[#FAF7F2] border-y border-[#ECE2D5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
                  02. Timber Portfolio
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#1F1A15]">
                  Our Timber
                </h2>
                <p className="text-sm text-[#6E6356]">
                  A customer-focused approach to timber supply across India.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#4F463D] leading-relaxed text-base">
              <p>
                ISHAAN WORLDLINK LLP supplies a comprehensive timber range across India,
                including:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-lg border border-[#E8DFD3] space-y-2">
                  <h4 className="font-serif font-bold text-[#1F1A15] text-lg">Teak</h4>
                  <p className="text-xs text-[#665D52]">
                    Round Logs, Rough Squares, and Sawn Sizes. Supplied with upcoming customized processing in Gandhidham.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#E8DFD3] space-y-2">
                  <h4 className="font-serif font-bold text-[#1F1A15] text-lg">Softwood</h4>
                  <p className="text-xs text-[#665D52]">
                    Pine, SYP, and Spruce. Suitable for packaging, industrial and decorative applications.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#E8DFD3] space-y-2">
                  <h4 className="font-serif font-bold text-[#1F1A15] text-lg">Hardwood</h4>
                  <p className="text-xs text-[#665D52]">
                    Meranti, Malaysian Sal, and Wana. Selected to meet diverse commercial and application-specific requirements.
                  </p>
                </div>
              </div>

              <p className="pt-2">
                We believe that every customer has distinct technical needs.
                Whether you require raw round logs, four-sided rough squares, or
                kiln-dried planks, we align our sourcing and grading to match your
                exact application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: OUR COMMITMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
                03. Core Promise
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#1F1A15]">
                Our Commitment
              </h2>
              <p className="text-sm font-serif italic text-[#8C6239]">
                “Delivering Timber. Upholding Commitments.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#4F463D] leading-relaxed text-base">
            <p className="text-lg text-[#1F1A15]">
              At ISHAAN WORLDLINK LLP, our business is governed by a singular principle:
              delivering on the commitments we make to our clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-5 rounded-lg border border-[#EDE5DA] bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#359C52]" />
                  <h4 className="text-sm font-semibold text-[#1F1A15]">Quality</h4>
                </div>
                <p className="text-xs text-[#6B6154] leading-relaxed">
                  Rigorous grading, authentic timber species, and compliance with buyer dimensional tolerances.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#EDE5DA] bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#359C52]" />
                  <h4 className="text-sm font-semibold text-[#1F1A15]">Transparency</h4>
                </div>
                <p className="text-xs text-[#6B6154] leading-relaxed">
                  Clear, honest communication regarding species origin, moisture status, and order dispatch status.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#EDE5DA] bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#359C52]" />
                  <h4 className="text-sm font-semibold text-[#1F1A15]">Dependable Service</h4>
                </div>
                <p className="text-xs text-[#6B6154] leading-relaxed">
                  Consistent supply channels, rapid dispatch coordination, and dedicated customer support.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-[#EDE5DA] bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#359C52]" />
                  <h4 className="text-sm font-semibold text-[#1F1A15]">Keeping Our Word</h4>
                </div>
                <p className="text-xs text-[#6B6154] leading-relaxed">
                  Upholding our agreed terms, pricing, and volume commitments with unwavering integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: OUR NEXT CHAPTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#221C16] text-[#F3EFE9] rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#3E342A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7A276]">
                04. Future Roadmap
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Our Next Chapter: <br />
                <span className="text-[#C7A276] italic font-normal">“You Specify. We Process.”</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D4C8B8] leading-relaxed">
                As the market evolves, ISHAAN WORLDLINK LLP is advancing from timber
                trading toward value-added teak processing and manufacturing.
              </p>

              <blockquote className="border-l-2 border-[#C7A276] pl-4 italic font-serif text-white/90 text-sm sm:text-base">
                “From carefully selected teak logs to customized precision sawn sizes,
                ISHAAN WORLDLINK LLP is taking the next step in value-added timber processing.
                Our upcoming teak-processing operations in Gandhidham will focus on
                processing teak according to customer-specific requirements.”
              </blockquote>

              <p className="text-xs text-[#E0B97D] font-mono uppercase tracking-wider">
                Length. Width. Thickness. Quantity. All Tailored to Your Requirement.
              </p>
            </div>

            <div className="lg:col-span-5">
              <TimberVisual
                species="teak_processing"
                aspectRatio="4/3"
                alt="Teak processing facility in Gandhidham coming soon"
                showBadge
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: KANDLA TIMBER ASSOCIATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#EDE5DA] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-[#FAF5ED] border border-[#E5DACD] flex items-center justify-center shrink-0">
              <ShieldCheck size={32} className="text-[#359C52]" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#8C6239] font-semibold">
                Industry Affiliation
              </span>
              <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                Member of the Kandla Timber Association
              </h3>
              <p className="text-xs text-[#6B6154]">
                ISHAAN WORLDLINK LLP is an active member of the Kandla Timber Association in Gandhidham, Gujarat.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-6 py-3 text-xs font-medium text-white bg-[#221C16] hover:bg-[#382F26] rounded-md transition-colors cursor-pointer"
          >
            Contact Our Desk
          </button>
        </div>
      </section>
    </div>
  );
};
