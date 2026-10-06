import React from 'react';
import { PageId } from '../types/navigation';
import { TimberVisual } from '../components/TimberVisual';
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield, Clock, Layers, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
                <span className="w-6 h-[1.5px] bg-[#8C6239]" />
                <span>Gandhidham, Gujarat</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1F1A15] tracking-tight leading-[1.08] text-balance">
                Delivering Timber. <br />
                <span className="text-[#8C6239] italic font-normal">Upholding Commitments.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#554C43] leading-relaxed max-w-xl">
                ISHAAN WORLDLINK LLP is a Gandhidham-based timber enterprise backed
                by <strong className="font-semibold text-[#1F1A15]">20+ years of industry experience</strong> and
                a family legacy spanning <strong className="font-semibold text-[#1F1A15]">more than five decades</strong>.
                Supplying Teak, Softwood, and Hardwood across India with precision and dependability.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-white bg-[#221C16] hover:bg-[#3A3026] rounded-md transition-all cursor-pointer group shadow-sm"
                >
                  <span>Explore Our Timber</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-[#2B231B] bg-[#F4EFEA] hover:bg-[#EAE2D8] border border-[#E0D5C7] rounded-md transition-all cursor-pointer group"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Trust markers */}
              <div className="pt-4 border-t border-[#EDE5DA] grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2.5 text-xs text-[#52493F]">
                  <Shield size={16} className="text-[#359C52] shrink-0" />
                  <span>Member, Kandla Timber Association</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#52493F]">
                  <Clock size={16} className="text-[#8C6239] shrink-0" />
                  <span>50+ Years Family Legacy</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Timber Visual */}
            <div className="lg:col-span-6">
              <div className="relative">
                <TimberVisual
                  species="teak_hero"
                  aspectRatio="4/3"
                  className="shadow-xl"
                  alt="High grade Teak timber logs and precision sawn lumber at Ishaan Worldlink"
                  showBadge
                />
                {/* Floating caption card */}
                <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white/95 backdrop-blur-md border border-[#EAE2D5] p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="text-[11px] uppercase tracking-wider text-[#8C6239] font-medium">
                    Core Timber Promise
                  </p>
                  <p className="text-xs font-serif italic text-[#261F18] mt-0.5">
                    “Delivering Timber. Upholding Commitments.”
                  </p>
                  <p className="text-[11px] text-[#6E6458] mt-1">
                    Supplying Teak, Softwood & Hardwood across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR TIMBER RANGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#EAE3DA]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239] mb-2">
              Product Categories
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1A15]">
              Our Timber Range
            </h2>
          </div>
          <p className="text-sm text-[#665D53] max-w-md">
            Sourced and curated to meet customer-specific requirements, quality
            specifications, and commercial applications across India.
          </p>
        </div>

        {/* 3 Large Timber Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Teak */}
          <div
            onClick={() => onNavigate('services')}
            className="group cursor-pointer bg-white rounded-xl border border-[#EDE5DA] hover:border-[#8C6239] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden"
          >
            <div>
              <TimberVisual
                species="teak_squares"
                aspectRatio="4/3"
                alt="Teak timber rough squares and sawn sizes"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#8C6239] font-medium tracking-wider uppercase">
                  <span>Primary Offering</span>
                  <span className="text-[11px] text-[#359C52]">Processing Soon</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1F1A15] group-hover:text-[#8C6239] transition-colors">
                  Teak
                </h3>
                <p className="text-xs text-[#61574C] leading-relaxed">
                  Supplied in Round Logs, Rough Squares, and Sawn Sizes. Backed
                  by upcoming customized teak processing in Gandhidham.
                </p>
                <div className="pt-2 text-xs text-[#4F463D] space-y-1">
                  <p>• Round Logs</p>
                  <p>• Rough Squares</p>
                  <p>• Sawn Sizes</p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#F2ECE3] mt-4 flex items-center justify-between text-xs font-medium text-[#8C6239]">
              <span>View Teak Range</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* 2. Softwood */}
          <div
            onClick={() => onNavigate('services')}
            className="group cursor-pointer bg-white rounded-xl border border-[#EDE5DA] hover:border-[#8C6239] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden"
          >
            <div>
              <TimberVisual
                species="pine"
                aspectRatio="4/3"
                alt="Softwood Pine, SYP, and Spruce timber"
              />
              <div className="p-6 space-y-3">
                <div className="text-xs text-[#8C6239] font-medium tracking-wider uppercase">
                  Industrial & Decorative
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1F1A15] group-hover:text-[#8C6239] transition-colors">
                  Softwood
                </h3>
                <p className="text-xs text-[#61574C] leading-relaxed">
                  Suitable for packaging, industrial and decorative applications.
                  Supplied in Logs, Sawn Sizes, KD Planks, and Custom Sizes.
                </p>
                <div className="pt-2 text-xs text-[#4F463D] space-y-1">
                  <p>• Pine</p>
                  <p>• Southern Yellow Pine (SYP)</p>
                  <p>• Spruce</p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#F2ECE3] mt-4 flex items-center justify-between text-xs font-medium text-[#8C6239]">
              <span>View Softwood Range</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* 3. Hardwood */}
          <div
            onClick={() => onNavigate('services')}
            className="group cursor-pointer bg-white rounded-xl border border-[#EDE5DA] hover:border-[#8C6239] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden"
          >
            <div>
              <TimberVisual
                species="meranti"
                aspectRatio="4/3"
                alt="Hardwood Meranti, Malaysian Sal, and Wana timber"
              />
              <div className="p-6 space-y-3">
                <div className="text-xs text-[#8C6239] font-medium tracking-wider uppercase">
                  Commercial Hardwoods
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1F1A15] group-hover:text-[#8C6239] transition-colors">
                  Hardwood
                </h3>
                <p className="text-xs text-[#61574C] leading-relaxed">
                  Selected to meet diverse commercial and application-specific
                  requirements across India. Available in Round Logs & Sawn Sizes.
                </p>
                <div className="pt-2 text-xs text-[#4F463D] space-y-1">
                  <p>• Meranti</p>
                  <p>• Malaysian Sal</p>
                  <p>• Wana</p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#F2ECE3] mt-4 flex items-center justify-between text-xs font-medium text-[#8C6239]">
              <span>View Hardwood Range</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE & FAMILY LEGACY SECTION */}
      <section className="bg-[#F8F5EE] border-y border-[#ECE3D5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Left */}
            <div className="lg:col-span-5">
              <TimberVisual
                species="heritage_timber"
                aspectRatio="4/3"
                className="shadow-md"
                alt="Decades of wood craftsmanship and timber agency heritage"
              />
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
                Heritage & Depth
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1A15] leading-tight">
                Rooted in 20+ Years of Experience, <br />
                <span className="italic font-normal text-[#8C6239]">
                  Shaped by Five Decades of Family Legacy.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#52493E] leading-relaxed">
                ISHAAN WORLDLINK LLP is backed by more than 20 years of active
                industry experience, rooted in a family background spanning more
                than five decades. From hands-on work with wood to timber commission
                agency and full-scale timber trading, our journey has been defined
                by a deep understanding of timber quality, markets, and customer
                commitments.
              </p>

              {/* Milestones / Capabilities grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-5 rounded-lg border border-[#E8DEC\-0] border-[#E8DFD3]">
                  <div className="text-2xl font-serif font-bold text-[#8C6239]">50+</div>
                  <div className="text-xs font-medium text-[#2A231C] mt-1">Years Family Legacy</div>
                  <p className="text-[11px] text-[#70665B] mt-1">
                    Multigenerational involvement in wood and timber trade.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#E8DFD3]">
                  <div className="text-2xl font-serif font-bold text-[#8C6239]">20+</div>
                  <div className="text-xs font-medium text-[#2A231C] mt-1">Years Industry Experience</div>
                  <p className="text-[11px] text-[#70665B] mt-1">
                    Hands-on trading, agency, and nationwide timber supply.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#E8DFD3]">
                  <div className="text-2xl font-serif font-bold text-[#359C52]">KTA</div>
                  <div className="text-xs font-medium text-[#2A231C] mt-1">Association Member</div>
                  <p className="text-[11px] text-[#70665B] mt-1">
                    Proud Member of the Kandla Timber Association.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE NEXT CHAPTER: UPCOMING TEAK PROCESSING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#221B15] text-[#F3EEE7] rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#3D3227] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8C6239]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Coming Soon status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C6239]/20 border border-[#8C6239]/40 text-[#E0B97D] text-xs font-medium tracking-wider uppercase">
                <Sparkles size={13} className="text-[#E0B97D]" />
                <span>Coming Soon — Our Teak Processing Journey</span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A276]">
                  CUT WITH PURPOSE. PROCESSED WITH PRECISION.
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  You Specify. <br />
                  <span className="text-[#C7A276] italic font-normal">We Process.</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#D4C8B8] leading-relaxed max-w-xl">
                From carefully selected teak logs to customized precision sawn sizes,
                ISHAAN WORLDLINK LLP is taking the next step in value-added timber processing.
                Our upcoming teak-processing operations in Gandhidham will focus on
                processing teak according to customer-specific requirements.
              </p>

              <div className="bg-[#2E251D] p-5 rounded-lg border border-[#483B2E] space-y-2">
                <p className="text-xs uppercase tracking-widest text-[#E0B97D] font-semibold">
                  Soon, Your Specification Will Become Our Cut.
                </p>
                <p className="text-sm font-serif italic text-[#EDE5D8]">
                  “Length. Width. Thickness. Quantity. All Tailored to Your Requirement.”
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#1E1812] bg-[#E3D6C5] hover:bg-white rounded-md transition-colors cursor-pointer"
                >
                  <span>Explore Our Timber</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-transparent hover:bg-white/10 border border-[#6B5743] rounded-md transition-colors cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <TimberVisual
                species="teak_processing"
                aspectRatio="4/3"
                className="shadow-2xl border-white/10"
                alt="Teak processing facility with precision cutting guide coming soon in Gandhidham"
              />
              <p className="text-[11px] text-center text-[#A69B8D] mt-3">
                Upcoming facility in Gandhidham, Gujarat • Value-Added Processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMITMENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#EDE5DA] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
              Our Foundation
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1A15]">
              “Delivering Timber. Upholding Commitments.”
            </h2>

            <p className="text-sm sm:text-base text-[#594F43] leading-relaxed">
              In a commodity-driven industry, we believe long-term relationships
              are built on keeping our word. We supply timber with an unwavering
              commitment to quality, transparency, and dependable service—ensuring
              that what was specified is precisely what is delivered.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#ECE2D5] space-y-2">
                <CheckCircle2 size={20} className="text-[#359C52]" />
                <h4 className="text-sm font-semibold text-[#1F1A15]">Quality & Grade</h4>
                <p className="text-xs text-[#6B6154]">
                  Exact dimensional accuracy, authentic wood grades, and careful sourcing.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#ECE2D5] space-y-2">
                <CheckCircle2 size={20} className="text-[#359C52]" />
                <h4 className="text-sm font-semibold text-[#1F1A15]">Transparency</h4>
                <p className="text-xs text-[#6B6154]">
                  Clear communication on species, origins, measurements, and delivery schedules.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#ECE2D5] space-y-2">
                <CheckCircle2 size={20} className="text-[#359C52]" />
                <h4 className="text-sm font-semibold text-[#1F1A15]">Dependable Service</h4>
                <p className="text-xs text-[#6B6154]">
                  Prompt responses, verified deliveries, and upholding commitments across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA: TELL US WHAT YOU NEED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="border border-[#E4DACD] bg-[#F9F6F0] rounded-2xl p-10 sm:p-14 space-y-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
            Direct Supply Inquiries
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1A15]">
            Tell Us What You Need.
          </h2>

          <p className="text-sm sm:text-base text-[#61574C] max-w-xl mx-auto leading-relaxed">
            Whether your requirement calls for Teak, Softwood, Hardwood, or
            customized sawn dimensions, our Gandhidham team is ready to assist.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-white bg-[#221C16] hover:bg-[#382F26] rounded-md transition-all cursor-pointer shadow-md group"
            >
              <span>Make an Enquiry</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
