import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, CheckCircle2, Loader2, X } from 'lucide-react';
import { PRODUCTS, DEFAULT_ATTACHED_PRODUCT } from '../data/catalog';
import { useEnquiry } from '../context/EnquiryContext';

export const EnquiryPage: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useEnquiry();

  const activeProduct = selectedProduct;

  const [enquiryType, setEnquiryType] = useState('Bulk Wholesale Sourcing');
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityRegion, setCityRegion] = useState('');
  const [estimatedVolume, setEstimatedVolume] = useState('');
  const [productRef, setProductRef] = useState(
    activeProduct ? `${activeProduct.name} (${activeProduct.code})` : ''
  );
  const [specs, setSpecs] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setProductRef(`${selectedProduct.name} (${selectedProduct.code})`);
      setEnquiryType(
        selectedProduct.range === 'Machine-made'
          ? 'Machine-Made Chains Wholesale'
          : selectedProduct.range === 'Kerala handcrafted'
          ? 'Kerala Handcrafted Chains Wholesale'
          : 'Bulk Wholesale Sourcing'
      );
    }
  }, [selectedProduct]);

  const handleProductSelectChange = (val: string) => {
    setProductRef(val);
    const found = PRODUCTS.find((p) => `${p.name} (${p.code})` === val);
    setSelectedProduct(found ?? null);
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!businessName.trim()) next.businessName = 'Please enter your business or company name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Please enter a valid business email address.';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!cityRegion.trim()) next.cityRegion = 'Please enter your city and state / region.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 550);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setBusinessName('');
    setEmail('');
    setPhone('');
    setCityRegion('');
    setEstimatedVolume('');
    setSpecs('');
    setErrors({});
  };

  const displayBannerProduct = activeProduct ?? DEFAULT_ATTACHED_PRODUCT;

  return (
    <div className="bg-white">
      {/* HERO BANNER MATCHING SCREENSHOT 1 & FIGMA #293:4609 */}
      <section className="relative min-h-[430px] sm:min-h-[480px] overflow-hidden pt-28 pb-16">
        <img
          src="/images/enquiry-hero-426737.png"
          alt="Start a business enquiry"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(62deg, rgba(0, 0, 0, 0.52) 32%, rgba(36, 66, 24, 0.35) 99%)',
          }}
        />
        <div className="ppm-container relative z-10 flex min-h-[290px] items-center">
          <div className="max-w-[460px] text-white">
            <p className="text-[15px] font-normal tracking-[-0.02em] text-white/95">
              Contact AJC
            </p>
            <h1 className="mt-2 font-serif-display text-[46px] sm:text-[58px] lg:text-[62px] font-bold leading-[0.98] tracking-[-0.02em] text-white">
              Start a Business Enquiry
            </h1>
            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-white/90">
              For retailers, wholesalers, chain stores and corporate partners seeking manufacturing
              and bulk-order solutions.
            </p>
          </div>
        </div>
      </section>

      {/* FORM CARD SECTION MATCHING SCREENSHOT 1 */}
      <section className="bg-white py-12 sm:py-16">
        <div className="ppm-container">
          <div className="mx-auto max-w-[1031px] rounded-[12px] border border-black/12 bg-white p-5 sm:p-8 shadow-[0_6px_28px_rgba(0,0,0,0.04)]">
            {/* Attached Product Banner */}
            {activeProduct ? (
              <div className="mb-6 flex flex-col gap-3 rounded-[12px] bg-[#F4F6F3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-[18px] font-semibold text-[#244218]">
                    {activeProduct.name}
                  </h2>
                  <p className="mt-0.5 text-[13px] font-medium text-[#323232]">
                    Category: <strong>{activeProduct.category}</strong> · Code:{' '}
                    <strong>{activeProduct.code}</strong>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-black/12 bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#323232]">
                    Auto-Attached to Enquiry
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(null);
                      setProductRef('');
                    }}
                    aria-label="Remove attached product"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-black/12 bg-white text-[#555555] hover:bg-black/5"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-6 flex flex-col gap-3 rounded-[12px] bg-[#F4F6F3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-[17px] font-semibold text-[#244218]">
                    General Wholesale &amp; Manufacturing Enquiry
                  </h2>
                  <p className="mt-0.5 text-[13px] font-medium text-[#555555]">
                    Select a specific catalogue design below or describe your custom requirements.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleProductSelectChange(`${displayBannerProduct.name} (${displayBannerProduct.code})`)}
                  className="self-start sm:self-auto rounded-full border border-[#244218]/30 bg-white px-3.5 py-1.5 text-[12px] font-semibold text-[#244218] hover:bg-[#244218] hover:text-white transition-colors"
                >
                  Attach Sample ({displayBannerProduct.code})
                </button>
              </div>
            )}

            {submitted ? (
              <div className="rounded-[12px] border border-[#244218]/20 bg-[#F4F6F3] p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#244218]" />
                <h3 className="mt-3 font-serif-display text-[32px] font-bold text-[#244218]">
                  Business Enquiry Submitted (Demo)
                </h3>
                <p className="mx-auto mt-2 max-w-[560px] text-[14px] leading-relaxed text-[#555555]">
                  Thank you, <strong>{fullName}</strong> ({businessName}). Your{' '}
                  <strong>{enquiryType}</strong>
                  {productRef ? ` for ${productRef}` : ''} has been recorded in this frontend
                  prototype for demonstration purposes. No data was transmitted externally.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-full border border-[#244218] px-6 py-2.5 text-sm font-semibold text-[#244218] hover:bg-[#244218]/8"
                  >
                    Submit Another Enquiry
                  </button>
                  <Link
                    to="/chains"
                    className="rounded-full bg-[#244218] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1d3513]"
                  >
                    Browse Chain Catalogue
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {/* Enquiry Type */}
                <div>
                  <label
                    htmlFor="enq-type"
                    className="mb-2 block text-[14px] font-medium text-[#111111]"
                  >
                    Enquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="enq-type"
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="h-10 w-full appearance-none rounded-[8px] border border-black/15 bg-white px-4 pr-10 text-[14px] font-medium text-[#323232] focus:border-[#244218] focus:outline-none"
                    >
                      <option>Bulk Wholesale Sourcing</option>
                      <option>Machine-Made Chains Wholesale</option>
                      <option>Kerala Handcrafted Chains Wholesale</option>
                      <option>Custom Chain Manufacturing</option>
                      <option>Retail Store Partnership</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
                  </div>
                </div>

                {/* Row 2: Full Name | Business Name */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enq-fullname"
                      className="mb-2 block text-[14px] font-medium text-[#111111]"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="enq-fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((p) => ({ ...p, fullName: '' }));
                      }}
                      placeholder="Your Name"
                      className={`h-10 w-full rounded-[8px] border px-4 text-[14px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
                        errors.fullName ? 'border-red-600' : 'border-black/15 focus:border-[#244218]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enq-company"
                      className="mb-2 block text-[14px] font-medium text-[#111111]"
                    >
                      Business / Company Name
                    </label>
                    <input
                      id="enq-company"
                      type="text"
                      value={businessName}
                      onChange={(e) => {
                        setBusinessName(e.target.value);
                        if (errors.businessName) setErrors((p) => ({ ...p, businessName: '' }));
                      }}
                      placeholder="Your Business or Store Name"
                      className={`h-10 w-full rounded-[8px] border px-4 text-[14px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
                        errors.businessName
                          ? 'border-red-600'
                          : 'border-black/15 focus:border-[#244218]'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-xs text-red-600">{errors.businessName}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Business Email | Contact Phone / WhatsApp */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enq-email"
                      className="mb-2 block text-[14px] font-medium text-[#111111]"
                    >
                      Business Email
                    </label>
                    <input
                      id="enq-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((p) => ({ ...p, email: '' }));
                      }}
                      placeholder="your@company.in"
                      className={`h-10 w-full rounded-[8px] border px-4 text-[14px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
                        errors.email ? 'border-red-600' : 'border-black/15 focus:border-[#244218]'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="enq-phone"
                      className="mb-2 block text-[14px] font-medium text-[#111111]"
                    >
                      Contact Phone / WhatsApp
                    </label>
                    <input
                      id="enq-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((p) => ({ ...p, phone: '' }));
                      }}
                      placeholder="+91 98565 89652"
                      className={`h-10 w-full rounded-[8px] border px-4 text-[14px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
                        errors.phone ? 'border-red-600' : 'border-black/15 focus:border-[#244218]'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 4: City & State / Region | Estimated Volume / Target Units */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enq-city"
                      className="mb-2 block text-[14px] font-medium text-[#111111]"
                    >
                      City &amp; State / Region
                    </label>
                    <input
                      id="enq-city"
                      type="text"
                      value={cityRegion}
                      onChange={(e) => {
                        setCityRegion(e.target.value);
                        if (errors.cityRegion) setErrors((p) => ({ ...p, cityRegion: '' }));
                      }}
                      placeholder="e.g., Malappuram, Kerala"
                      className={`h-10 w-full rounded-[8px] border px-4 text-[14px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
                        errors.cityRegion
                          ? 'border-red-600'
                          : 'border-black/15 focus:border-[#244218]'
                      }`}
                    />
                    {errors.cityRegion && (
                      <p className="mt-1 text-xs text-red-600">{errors.cityRegion}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enq-volume"
                      className="mb-2 block text-[14px] font-medium text-[#111111]"
                    >
                      Estimated Volume / Target Units
                    </label>
                    <div className="relative">
                      <select
                        id="enq-volume"
                        value={estimatedVolume}
                        onChange={(e) => setEstimatedVolume(e.target.value)}
                        className="h-10 w-full appearance-none rounded-[8px] border border-black/15 bg-white px-4 pr-10 text-[14px] font-medium text-[#323232] focus:border-[#244218] focus:outline-none"
                      >
                        <option value="">Select estimated volume</option>
                        <option value="Under 50 units">Under 50 units</option>
                        <option value="50 - 200 units">50 – 200 units</option>
                        <option value="200 - 500 units">200 – 500 units</option>
                        <option value="500+ units">500+ units</option>
                        <option value="Not sure yet">Not sure yet — looking for guidance</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
                    </div>
                  </div>
                </div>

                {/* Product Reference / Catalogue Code */}
                <div>
                  <label
                    htmlFor="enq-product"
                    className="mb-2 block text-[14px] font-medium text-[#111111]"
                  >
                    Product Reference / Catalogue Code
                  </label>
                  <div className="relative">
                    <select
                      id="enq-product"
                      value={productRef}
                      onChange={(e) => handleProductSelectChange(e.target.value)}
                      className="h-10 w-full appearance-none rounded-[8px] border border-black/15 bg-white px-4 pr-10 text-[14px] font-medium text-[#323232] focus:border-[#244218] focus:outline-none"
                    >
                      <option value="">Bulk Wholesale Sourcing (No specific product selected)</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={`${p.name} (${p.code})`}>
                          {p.name} ({p.code}) — {p.range}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
                  </div>
                </div>

                {/* Requirement Details & Specifications */}
                <div>
                  <label
                    htmlFor="enq-specs"
                    className="mb-2 block text-[14px] font-medium text-[#111111]"
                  >
                    Requirement Details &amp; Specifications
                  </label>
                  <textarea
                    id="enq-specs"
                    rows={4}
                    value={specs}
                    onChange={(e) => setSpecs(e.target.value)}
                    placeholder="Share chain styles, preferred lengths, purity, or bulk delivery requirements..."
                    className="w-full rounded-[8px] border border-black/15 p-3.5 text-[14px] font-medium text-[#111111] placeholder:text-[#777777] focus:border-[#244218] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#244218] text-[16px] font-semibold text-white transition-colors hover:bg-[#1d3513] disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting Business Enquiry...</span>
                    </>
                  ) : (
                    <span>Submit Business Enquiry</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
