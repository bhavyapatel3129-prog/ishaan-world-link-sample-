import React, { useState } from 'react';
import { PageId } from '../types/navigation';
import { TimberVisual } from '../components/TimberVisual';
import { ArrowRight, ArrowUpRight, Sparkles, Check, Info } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedTeakTab, setSelectedTeakTab] = useState<'all' | 'logs' | 'squares' | 'sawn'>('all');

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-6 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#EAE3DA] pb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239] mb-3">
              <span className="w-6 h-[1.5px] bg-[#8C6239]" />
              <span>Comprehensive Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1F1A15] tracking-tight">
              Our Timber
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#554C43] max-w-2xl leading-relaxed">
              Supplying a diverse and dependable range of <strong className="font-semibold text-[#1F1A15]">Teak</strong>,{' '}
              <strong className="font-semibold text-[#1F1A15]">Softwood</strong>, and{' '}
              <strong className="font-semibold text-[#1F1A15]">Hardwood</strong> across India, tailored
              to meet rigorous commercial and application-specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1 — TEAK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Teak Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EDE5DA]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239] mb-1">
                01. Core Offering
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1A15]">
                Teak Timber
              </h2>
            </div>
            <p className="text-sm text-[#61574C] max-w-lg">
              Currently supplied in multiple forms, with customized teak processing coming soon.
              Prized for its warm golden-brown heartwood, authentic grain, and enduring durability.
            </p>
          </div>

          {/* Teak Interactive Showcase Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#F4EFE9] rounded-lg max-w-md">
            <button
              onClick={() => setSelectedTeakTab('all')}
              className={`flex-1 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
                selectedTeakTab === 'all'
                  ? 'bg-white text-[#1F1A15] shadow-xs'
                  : 'text-[#695F54] hover:text-[#1F1A15]'
              }`}
            >
              All Forms
            </button>
            <button
              onClick={() => setSelectedTeakTab('logs')}
              className={`flex-1 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
                selectedTeakTab === 'logs'
                  ? 'bg-white text-[#1F1A15] shadow-xs'
                  : 'text-[#695F54] hover:text-[#1F1A15]'
              }`}
            >
              Round Logs
            </button>
            <button
              onClick={() => setSelectedTeakTab('squares')}
              className={`flex-1 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
                selectedTeakTab === 'squares'
                  ? 'bg-white text-[#1F1A15] shadow-xs'
                  : 'text-[#695F54] hover:text-[#1F1A15]'
              }`}
            >
              Rough Squares
            </button>
            <button
              onClick={() => setSelectedTeakTab('sawn')}
              className={`flex-1 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
                selectedTeakTab === 'sawn'
                  ? 'bg-white text-[#1F1A15] shadow-xs'
                  : 'text-[#695F54] hover:text-[#1F1A15]'
              }`}
            >
              Sawn Sizes
            </button>
          </div>

          {/* Teak 3 Product Forms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Form 1: Round Logs */}
            {(selectedTeakTab === 'all' || selectedTeakTab === 'logs') && (
              <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
                <div>
                  <TimberVisual
                    species="teak_logs"
                    aspectRatio="4/3"
                    alt="Teak Round Logs with natural bark and annual growth rings"
                    showBadge
                  />
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C6239]">
                      Form 01
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                      Round Logs
                    </h3>
                    <p className="text-xs text-[#5E544A] leading-relaxed">
                      Sourced raw cylindrical teak logs showcasing natural bark,
                      clear sapwood boundary, and rich golden-brown core heartwood.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 text-xs text-[#8C6239] font-medium">
                  Currently Supplied
                </div>
              </div>
            )}

            {/* Form 2: Rough Squares */}
            {(selectedTeakTab === 'all' || selectedTeakTab === 'squares') && (
              <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
                <div>
                  <TimberVisual
                    species="teak_squares"
                    aspectRatio="4/3"
                    alt="Teak Rough Squares four side sawn block timber"
                    showBadge
                  />
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C6239]">
                      Form 02
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                      Rough Squares
                    </h3>
                    <p className="text-xs text-[#5E544A] leading-relaxed">
                      Squared teak blocks dressed on four sides, providing clean
                      handling and optimized conversion for primary processors.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 text-xs text-[#8C6239] font-medium">
                  Currently Supplied
                </div>
              </div>
            )}

            {/* Form 3: Sawn Sizes */}
            {(selectedTeakTab === 'all' || selectedTeakTab === 'sawn') && (
              <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
                <div>
                  <TimberVisual
                    species="teak_sawn"
                    aspectRatio="4/3"
                    alt="Teak Sawn Sizes precision cut planks"
                    showBadge
                  />
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C6239]">
                      Form 03
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                      Sawn Sizes
                    </h3>
                    <p className="text-xs text-[#5E544A] leading-relaxed">
                      Straight cut teak boards and planks cut to dimensional
                      specifications, revealing natural undulating teak grain.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 text-xs text-[#8C6239] font-medium">
                  Currently Supplied
                </div>
              </div>
            )}
          </div>

          {/* UPCOMING TEAK PROCESSING CARD (Clear "Coming Soon" status) */}
          <div className="bg-[#211B15] text-[#F5EFE8] rounded-xl p-8 sm:p-10 border border-[#3E3225]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C6239]/20 border border-[#8C6239]/40 text-[#E0B97D] text-xs font-medium uppercase tracking-wider">
                  <Sparkles size={13} />
                  <span>Coming Soon — Our Teak Processing Journey</span>
                </div>

                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A276]">
                  CUT WITH PURPOSE. PROCESSED WITH PRECISION.
                </p>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  You Specify. We Process.
                </h3>

                <p className="text-sm text-[#D4C8B8] leading-relaxed">
                  “From carefully selected teak logs to customized precision sawn sizes,
                  ISHAAN WORLDLINK LLP is taking the next step in value-added timber processing.”
                </p>

                <p className="text-sm text-[#D4C8B8] leading-relaxed">
                  “Our upcoming teak-processing operations in Gandhidham will focus on
                  processing teak according to customer-specific requirements.”
                </p>

                <div className="pt-2 border-t border-[#382C1E]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#E0B97D]">
                    Soon, Your Specification Will Become Our Cut.
                  </p>
                  <p className="text-base font-serif italic text-white mt-1">
                    “Length. Width. Thickness. Quantity. All Tailored to Your Requirement.”
                  </p>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#1F1812] bg-[#E3D6C5] hover:bg-white rounded-md transition-colors cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4">
                <TimberVisual
                  species="teak_processing"
                  aspectRatio="4/3"
                  alt="Precision teak cutting coming soon at Gandhidham facility"
                  showBadge
                />
                <p className="text-[11px] text-center text-[#9E9182] mt-2">
                  Upcoming Gandhidham Facility • Precision Value Addition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2 — SOFTWOOD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Softwood Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EDE5DA]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239] mb-1">
                02. Clean & Industrial
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1A15]">
                Softwood Range
              </h2>
            </div>
            <div className="max-w-md space-y-1">
              <p className="text-sm font-medium text-[#1F1A15]">
                “Suitable for packaging, industrial and decorative applications.”
              </p>
              <p className="text-xs text-[#6B6156]">
                Characterized by light, pale timber imagery, natural grain, and industrial versatility.
              </p>
            </div>
          </div>

          {/* Visually Differentiated Softwood Species */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pine */}
            <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <TimberVisual
                  species="pine"
                  aspectRatio="4/3"
                  alt="Pale Pine timber planks and round logs with natural blonde grain"
                  showBadge
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8C6239]">
                    <span className="font-semibold uppercase tracking-wider">Pine</span>
                    <span className="text-[#554C43]">Pale Softwood</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                    Pine Timber
                  </h3>
                  <p className="text-xs text-[#5E544A] leading-relaxed">
                    Pale blonde wood characterized by clean sawn, plank, and log
                    presentation with subtle natural grain lines.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#F2ECE3] text-[11px] text-[#786C5F]">
                Industrial, packaging & architectural usage
              </div>
            </div>

            {/* Southern Yellow Pine (SYP) */}
            <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <TimberVisual
                  species="syp"
                  aspectRatio="4/3"
                  alt="Southern Yellow Pine timber with distinctive warm yellow amber grain"
                  showBadge
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8C6239]">
                    <span className="font-semibold uppercase tracking-wider">SYP</span>
                    <span className="text-[#554C43]">Southern Yellow Pine</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                    Southern Yellow Pine
                  </h3>
                  <p className="text-xs text-[#5E544A] leading-relaxed">
                    Distinct warm pale to yellow-amber timber appearance with
                    authentic pronounced natural grain lines and clean boards.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#F2ECE3] text-[11px] text-[#786C5F]">
                Heavy-duty packaging & structural framing
              </div>
            </div>

            {/* Spruce */}
            <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <TimberVisual
                  species="spruce"
                  aspectRatio="4/3"
                  alt="Light coloured spruce timber with fine straight natural grain"
                  showBadge
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8C6239]">
                    <span className="font-semibold uppercase tracking-wider">Spruce</span>
                    <span className="text-[#554C43]">Fine-Grained</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                    Spruce Timber
                  </h3>
                  <p className="text-xs text-[#5E544A] leading-relaxed">
                    Light-coloured spruce with delicate straight grain, clean
                    sawn surfaces, and uniform texture.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#F2ECE3] text-[11px] text-[#786C5F]">
                Decorative, joinery & general carpentry
              </div>
            </div>
          </div>

          {/* Softwood Available Forms Grid */}
          <div className="bg-[#FAF7F2] rounded-xl p-8 border border-[#ECE2D5] space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8C6239]">
              Available Softwood Forms & Processing Options
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white p-4 rounded-lg border border-[#EDE5DA]">
                <span className="text-xs font-semibold text-[#1F1A15] block">Round Logs</span>
                <span className="text-[11px] text-[#73685C]">Direct imported natural round logs</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#EDE5DA]">
                <span className="text-xs font-semibold text-[#1F1A15] block">Sawn Sizes</span>
                <span className="text-[11px] text-[#73685C]">Standard dimensional sawn timber</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#EDE5DA]">
                <span className="text-xs font-semibold text-[#1F1A15] block">Imported KD Planks</span>
                <span className="text-[11px] text-[#73685C]">Kiln-Dried moisture stabilized</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#EDE5DA]">
                <span className="text-xs font-semibold text-[#1F1A15] block">Planed Timber</span>
                <span className="text-[11px] text-[#73685C]">Locally Heat-Treated & Planed</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#EDE5DA]">
                <span className="text-xs font-semibold text-[#1F1A15] block">Customized Sizes</span>
                <span className="text-[11px] text-[#73685C]">Tailored to buyer dimensions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 3 — HARDWOOD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Hardwood Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EDE5DA]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239] mb-1">
                03. Dense & Substantial
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1A15]">
                Hardwood Range
              </h2>
            </div>
            <div className="max-w-md space-y-1">
              <p className="text-sm font-medium text-[#1F1A15]">
                “Selected to meet diverse commercial and application-specific requirements.”
              </p>
              <p className="text-xs text-[#6B6156]">
                Denser, richer, and more substantial timber character with heavy load capability.
              </p>
            </div>
          </div>

          {/* Visually Differentiated Hardwood Species */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meranti */}
            <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <TimberVisual
                  species="meranti"
                  aspectRatio="4/3"
                  alt="Authentic Meranti timber planks with reddish brown to pinkish brown grain"
                  showBadge
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8C6239]">
                    <span className="font-semibold uppercase tracking-wider">Meranti</span>
                    <span className="text-[#554C43]">Reddish Hardwood</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                    Meranti Timber
                  </h3>
                  <p className="text-xs text-[#5E544A] leading-relaxed">
                    Authentic Meranti timber featuring a distinctive reddish-brown
                    to pinkish-brown appearance and visible natural porous grain.
                  </p>
                  <div className="pt-2 text-xs text-[#73685C]">
                    Available in: Round Logs & Sawn Sizes
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#F2ECE3] text-[11px] text-[#786C5F]">
                Commercial joinery, mouldings & structural work
              </div>
            </div>

            {/* Malaysian Sal */}
            <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <TimberVisual
                  species="malaysian_sal"
                  aspectRatio="4/3"
                  alt="Malaysian Sal substantial hardwood with coarse looking dark warm grain"
                  showBadge
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8C6239]">
                    <span className="font-semibold uppercase tracking-wider">Malaysian Sal</span>
                    <span className="text-[#554C43]">Dense Hardwood</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                    Malaysian Sal Timber
                  </h3>
                  <p className="text-xs text-[#5E544A] leading-relaxed">
                    Substantial hardwood with a natural coarse-looking grain,
                    heavy fiber structure, and darker, warm timber character.
                  </p>
                  <div className="pt-2 text-xs text-[#73685C]">
                    Available in: Round Logs & Sawn Sizes
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#F2ECE3] text-[11px] text-[#786C5F]">
                Heavy construction, frames & durable structural members
              </div>
            </div>

            {/* Wana */}
            <div className="bg-white rounded-xl border border-[#EDE5DA] overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <TimberVisual
                  species="wana"
                  aspectRatio="4/3"
                  alt="Authentic Wana timber round logs presentation with accurate label"
                  showBadge
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8C6239]">
                    <span className="font-semibold uppercase tracking-wider">Wana</span>
                    <span className="text-[#554C43]">Hardwood Logs & Sawn</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                    Wana Timber
                  </h3>
                  <p className="text-xs text-[#5E544A] leading-relaxed">
                    Carefully presented and accurately labelled Wana timber,
                    supplied in natural round logs and commercial sawn sizes.
                  </p>
                  <div className="pt-2 text-xs text-[#73685C]">
                    Available in: Round Logs & Sawn Sizes
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#F2ECE3] text-[11px] text-[#786C5F]">
                Selected for commercial application requirements
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4 — ENQUIRY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E5DACD] p-10 sm:p-14 text-center space-y-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239]">
            Custom Sizing & Nationwide Supply
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1A15]">
            Have a Specific Timber Requirement?
          </h2>

          <div className="inline-block py-2 px-4 rounded-md bg-white border border-[#E0D5C7] text-xs sm:text-sm font-serif italic text-[#4A3F33]">
            “Length. Width. Thickness. Quantity. All Tailored to Your Requirement.”
          </div>

          <p className="text-sm sm:text-base text-[#61574C] max-w-xl mx-auto leading-relaxed">
            Specify your dimensions, species, and delivery timeline. Our Gandhidham
            desk will provide prompt specification matching and reliable dispatch.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide text-white bg-[#221C16] hover:bg-[#382F26] rounded-md transition-all cursor-pointer shadow-md"
            >
              <span>Enquire Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
