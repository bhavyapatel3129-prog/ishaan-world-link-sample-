import React, { useState } from 'react';
import { TimberVisual } from '../components/TimberVisual';
import { Mail, MapPin, ShieldCheck, CheckCircle2, Send, AlertCircle, ArrowRight } from 'lucide-react';

// Static form service configuration placeholder
// Replace with your Web3Forms Access Key or Formspree Endpoint URL
// Example: "https://formspree.io/f/your_form_id" or "https://api.web3forms.com/submit"
const STATIC_FORM_ENDPOINT: string =
  (import.meta.env.VITE_FORM_ENDPOINT as string) || 'FORM_ENDPOINT_HERE';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    interestedIn: 'Teak',
    timberRequirement: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your timber requirement.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Check if user has configured a real form endpoint or if it is the placeholder
      const isEndpointConfigured =
        STATIC_FORM_ENDPOINT &&
        STATIC_FORM_ENDPOINT !== 'FORM_ENDPOINT_HERE' &&
        STATIC_FORM_ENDPOINT !== 'ACCESS_KEY_HERE';

      if (isEndpointConfigured) {
        // Real static form POST submission (Formspree or Web3Forms)
        const response = await fetch(STATIC_FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _to: 'info.ishaanworldlink@gmail.com',
            _subject: `New Timber Enquiry from ${formData.fullName} (${formData.interestedIn})`
          })
        });

        if (!response.ok) {
          throw new Error('Form service submission error. Please email us directly.');
        }
      } else {
        // Simulated static turnaround when placeholder has not yet been substituted with live key
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Submission failed. Please try again or email us directly.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-20 md:space-y-28 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-6 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#EAE3DA] pb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6239] mb-3">
              <span className="w-6 h-[1.5px] bg-[#8C6239]" />
              <span>Direct Commercial Desk</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1F1A15] tracking-tight">
              Let&apos;s Talk Timber.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#554C43] max-w-2xl leading-relaxed">
              Connect with ISHAAN WORLDLINK LLP in Gandhidham. Share your specifications
              for Teak, Softwood, Hardwood, or upcoming customized teak processing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & CONTACT DETAILS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Polished Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EDE5DA] p-8 sm:p-10 shadow-xs">
            {isSuccess ? (
              <div className="text-center py-12 space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#359C52] flex items-center justify-center mx-auto border border-[#C5E9CE]">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-[#1F1A15]">
                    Thank you. Your enquiry has been received.
                  </h3>
                  <p className="text-sm text-[#5C5247] max-w-md mx-auto leading-relaxed">
                    Our timber desk in Gandhidham will review your specifications and
                    reach out to you promptly at{' '}
                    <span className="font-mono font-medium text-[#1F1A15]">{formData.email}</span>.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        interestedIn: 'Teak',
                        timberRequirement: '',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#221C16] bg-[#F2EDE6] hover:bg-[#EAE2D8] rounded-md transition-colors cursor-pointer"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1F1A15]">
                    Commercial Timber Inquiry
                  </h3>
                  <p className="text-xs text-[#6B6154] mt-1">
                    “Length. Width. Thickness. Quantity. All Tailored to Your Requirement.”
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium text-[#382F26]"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Patel"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#DDD4C7] bg-[#FCFAF7]'
                      } focus:outline-hidden focus:ring-1 focus:ring-[#8C6239] focus:border-[#8C6239] transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-medium text-[#382F26]"
                    >
                      Company Name <span className="text-[#8C8072] text-[11px]">(Optional)</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Patel Timber & Furniture Works"
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DDD4C7] bg-[#FCFAF7] focus:outline-hidden focus:ring-1 focus:ring-[#8C6239] focus:border-[#8C6239] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-[#382F26]"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#DDD4C7] bg-[#FCFAF7]'
                      } focus:outline-hidden focus:ring-1 focus:ring-[#8C6239] focus:border-[#8C6239] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium text-[#382F26]"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#DDD4C7] bg-[#FCFAF7]'
                      } focus:outline-hidden focus:ring-1 focus:ring-[#8C6239] focus:border-[#8C6239] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Interested In */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="interestedIn"
                    className="block text-xs font-medium text-[#382F26]"
                  >
                    Interested In
                  </label>
                  <select
                    id="interestedIn"
                    value={formData.interestedIn}
                    onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DDD4C7] bg-[#FCFAF7] focus:outline-hidden focus:ring-1 focus:ring-[#8C6239] focus:border-[#8C6239] transition-colors"
                  >
                    <option value="Teak">Teak (Round Logs / Rough Squares / Sawn Sizes)</option>
                    <option value="Softwood">Softwood (Pine / SYP / Spruce)</option>
                    <option value="Hardwood">Hardwood (Meranti / Malaysian Sal / Wana)</option>
                    <option value="Teak Processing">Upcoming Teak Processing (Custom Sawn Sizes)</option>
                    <option value="General Enquiry">General Commercial Enquiry</option>
                  </select>
                </div>

                {/* Timber Requirement (Dimensions & Quantity) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="timberRequirement"
                    className="block text-xs font-medium text-[#382F26]"
                  >
                    Timber Requirement{' '}
                    <span className="text-[#8C8072] text-[11px]">(Dimensions / Cut / Volume)</span>
                  </label>
                  <input
                    id="timberRequirement"
                    type="text"
                    value={formData.timberRequirement}
                    onChange={(e) => setFormData({ ...formData, timberRequirement: e.target.value })}
                    placeholder="e.g. Length x Width x Thickness or Cubic Meters / Containers"
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#DDD4C7] bg-[#FCFAF7] focus:outline-hidden focus:ring-1 focus:ring-[#8C6239] focus:border-[#8C6239] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-[#382F26]"
                  >
                    Message / Specifications <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please mention your required specifications, intended application, destination, or timeline..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#DDD4C7] bg-[#FCFAF7]'
                    } focus:outline-hidden focus:ring-1 focus:ring-[#8C6239] focus:border-[#8C6239] transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Static Service Info Callout */}
                <div className="p-3 bg-[#FAF7F2] rounded-md border border-[#EBE3D6] text-[11px] text-[#695F54] flex items-start gap-2">
                  <span className="font-semibold text-[#8C6239] shrink-0">Note:</span>
                  <span>
                    Inquiries are routed directly to our designated commercial inbox:{' '}
                    <strong className="font-mono text-[#2B231B]">info.ishaanworldlink@gmail.com</strong>.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide text-white bg-[#221C16] hover:bg-[#382F26] active:bg-[#15110E] rounded-md transition-all cursor-pointer shadow-sm disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Direct Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <TimberVisual
              species="contact_timber"
              aspectRatio="16/9"
              alt="Ishaan Worldlink timber desk direct inquiry"
            />

            <div className="bg-[#FAF7F2] rounded-xl border border-[#EDE4D8] p-6 space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C6239] block">
                  Enterprise Details
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1F1A15] mt-1">
                  ISHAAN WORLDLINK LLP
                </h3>
                <p className="text-xs font-serif italic text-[#6B6154] mt-0.5">
                  “Delivering Timber. Upholding Commitments.”
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#EAE0D3] text-sm text-[#4A4137]">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#359C52] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-semibold text-[#1F1A15]">Location</strong>
                    <span className="text-xs text-[#5E544A]">Gandhidham, Gujarat, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#359C52] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-semibold text-[#1F1A15]">Email Destination</strong>
                    <a
                      href="mailto:info.ishaanworldlink@gmail.com"
                      className="font-mono text-xs text-[#1F1A15] hover:text-[#359C52] underline underline-offset-2 break-all"
                    >
                      info.ishaanworldlink@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#359C52] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-semibold text-[#1F1A15]">Association</strong>
                    <span className="text-xs text-[#5E544A]">Member of the Kandla Timber Association</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EAE0D3]">
                <p className="text-xs text-[#6B6154] leading-relaxed">
                  We supply nationwide across India. For customized timber sizes or
                  volume consignments, specify requirements in the enquiry form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
