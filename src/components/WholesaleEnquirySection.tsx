import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export const WholesaleEnquirySection: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedProduct, setPrivacyOpen } = useEnquiry();

  const [enquiryType, setEnquiryType] = useState('General Wholesale Enquiry');
  const [role, setRole] = useState('');
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [estimatedVolume, setEstimatedVolume] = useState("I'm not sure yet");
  const [notes, setNotes] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!businessName.trim()) next.businessName = 'Please enter your business or store name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Please enter a valid business email address.';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!agreed) next.agreed = 'Please agree to the privacy notice to continue.';
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
    setNotes('');
    setErrors({});
  };

  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="ppm-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left editorial intro */}
          <div className="flex flex-col items-start gap-6 lg:col-span-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-serif-display text-[40px] sm:text-[48px] lg:text-[52px] font-bold leading-[1.06] text-[#244218]">
                Looking for a Chain Manufacturing Partner?
              </h2>
              <p className="max-w-[490px] text-[14px] font-medium leading-relaxed text-[#244218]/90">
                Share the chain styles, quantities or business requirements you have in mind. Our
                team can help you take the next step.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5 text-[14px] font-medium text-[#323232]">
              <li className="flex items-center gap-3">
                <span className="h-[1.5px] w-5 shrink-0 bg-[#244218]" />
                <span>Tell us which chain designs interest you</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-[1.5px] w-5 shrink-0 bg-[#244218]" />
                <span>An approximate quantity is fine, or tell us you&apos;re not sure yet</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-[1.5px] w-5 shrink-0 bg-[#244218]" />
                <span>Add any other requirements in your own words</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                setSelectedProduct(null);
                navigate('/enquiry');
              }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#244218] px-6 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#1d3513] active:scale-[0.98]"
            >
              Discuss your Wholesale Requirements
            </button>
          </div>

          {/* Right wholesale enquiry form card */}
          <div className="lg:col-span-6">
            <div className="rounded-[12px] border border-black/12 bg-white p-6 sm:p-7 shadow-[0_8px_28px_rgba(0,0,0,0.04)]">
              <h3 className="font-serif-display text-[32px] sm:text-[36px] font-semibold leading-tight text-[#244218]">
                Wholesale enquiry
              </h3>
              <p className="mt-1.5 text-[14px] font-medium text-[#555555]">
                Share a few details and our team will get back to you with the right information or
                connect you with the appropriate team.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-[#244218]/20 bg-[#F4F6F3] p-6 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-[#244218]" />
                  <h4 className="mt-3 text-lg font-semibold text-[#111111]">
                    Wholesale Enquiry Recorded (Demo)
                  </h4>
                  <p className="mt-1.5 text-sm text-[#555555]">
                    Thank you, {fullName}. This submission is simulated for prototype demonstration—no
                    external request was sent.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-full border border-[#244218] px-5 py-2 text-xs font-semibold text-[#244218] hover:bg-[#244218]/8"
                    >
                      Submit Another Enquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/chains')}
                      className="rounded-full bg-[#244218] px-5 py-2 text-xs font-semibold text-white hover:bg-[#1d3513]"
                    >
                      Continue Browsing Chains
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-5 flex flex-col gap-3.5">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="wh-type"
                        className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                      >
                        Enquiry Type
                      </label>
                      <div className="relative">
                        <select
                          id="wh-type"
                          value={enquiryType}
                          onChange={(e) => setEnquiryType(e.target.value)}
                          className="h-10 w-full appearance-none rounded-[8px] border border-black/15 bg-white px-3.5 pr-9 text-[13px] font-medium text-[#555555] focus:border-[#244218] focus:outline-none"
                        >
                          <option>General Wholesale Enquiry</option>
                          <option>Machine-Made Chains</option>
                          <option>Kerala Handcrafted Chains</option>
                          <option>Custom Chain Manufacturing</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="wh-role"
                        className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                      >
                        I am a
                      </label>
                      <div className="relative">
                        <select
                          id="wh-role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="h-10 w-full appearance-none rounded-[8px] border border-black/15 bg-white px-3.5 pr-9 text-[13px] font-medium text-[#555555] focus:border-[#244218] focus:outline-none"
                        >
                          <option value="">Select here</option>
                          <option value="Jewellery Retailer">Jewellery Retailer</option>
                          <option value="Wholesale Buyer">Wholesale Buyer</option>
                          <option value="Chain Store / Brand">Chain Store / Brand</option>
                          <option value="Corporate / Distributor">Corporate / Distributor</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="wh-name"
                        className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                      >
                        Full Name
                      </label>
                      <input
                        id="wh-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors((p) => ({ ...p, fullName: '' }));
                        }}
                        placeholder="Enter your full name"
                        className={`h-10 w-full rounded-[8px] border px-3.5 text-[13px] font-medium text-[#111111] placeholder:text-[#888888] focus:outline-none ${
                          errors.fullName
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-black/15 focus:border-[#244218]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="wh-business"
                        className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                      >
                        Business Name
                      </label>
                      <input
                        id="wh-business"
                        type="text"
                        value={businessName}
                        onChange={(e) => {
                          setBusinessName(e.target.value);
                          if (errors.businessName) setErrors((p) => ({ ...p, businessName: '' }));
                        }}
                        placeholder="Your Business or store name"
                        className={`h-10 w-full rounded-[8px] border px-3.5 text-[13px] font-medium text-[#111111] placeholder:text-[#888888] focus:outline-none ${
                          errors.businessName
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-black/15 focus:border-[#244218]'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-xs text-red-600">{errors.businessName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="wh-email"
                        className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                      >
                        Business Email
                      </label>
                      <input
                        id="wh-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((p) => ({ ...p, email: '' }));
                        }}
                        placeholder="your@company.in"
                        className={`h-10 w-full rounded-[8px] border px-3.5 text-[13px] font-medium text-[#111111] placeholder:text-[#888888] focus:outline-none ${
                          errors.email
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-black/15 focus:border-[#244218]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="wh-phone"
                        className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                      >
                        Phone/WhatsApp
                      </label>
                      <div
                        className={`flex h-10 w-full items-center rounded-[8px] border px-3 ${
                          errors.phone
                            ? 'border-red-600 focus-within:border-red-600'
                            : 'border-black/15 focus-within:border-[#244218]'
                        }`}
                      >
                        <span className="pr-2.5 text-[13px] font-medium text-[#555555]">+91</span>
                        <span className="mr-2.5 h-5 w-px bg-black/12" />
                        <input
                          id="wh-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors((p) => ({ ...p, phone: '' }));
                          }}
                          placeholder="98565 89652"
                          className="min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#111111] placeholder:text-[#888888] focus:outline-none"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="wh-volume"
                      className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                    >
                      Estimated order requirement
                    </label>
                    <div className="relative">
                      <select
                        id="wh-volume"
                        value={estimatedVolume}
                        onChange={(e) => setEstimatedVolume(e.target.value)}
                        className="h-10 w-full appearance-none rounded-[8px] border border-black/15 bg-white px-3.5 pr-9 text-[13px] font-medium text-[#555555] focus:border-[#244218] focus:outline-none"
                      >
                        <option>I&apos;m not sure yet</option>
                        <option>Under 50 units</option>
                        <option>50 – 200 units</option>
                        <option>200 – 500 units</option>
                        <option>500+ units</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="wh-notes"
                      className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                    >
                      Additional requirements
                    </label>
                    <textarea
                      id="wh-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Describe preferred chain styles, purity, lengths or timeline..."
                      className="w-full rounded-[8px] border border-black/15 p-3 text-[13px] font-medium text-[#111111] placeholder:text-[#888888] focus:border-[#244218] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-2.5 text-[13px] text-[#555555]">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => {
                          setAgreed(e.target.checked);
                          if (errors.agreed) setErrors((p) => ({ ...p, agreed: '' }));
                        }}
                        className="mt-0.5 h-4 w-4 rounded border-black/25 accent-[#244218]"
                      />
                      <span>
                        I agree to the collection and use of my information to respond to this
                        enquiry. Read our{' '}
                        <button
                          type="button"
                          onClick={() => setPrivacyOpen(true)}
                          className="font-semibold text-[#244218] underline"
                        >
                          Privacy policy
                        </button>
                      </span>
                    </label>
                    {errors.agreed && (
                      <p className="mt-1 text-xs text-red-600">{errors.agreed}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#244218] text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#1d3513] disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <span>Submit Enquiry</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
