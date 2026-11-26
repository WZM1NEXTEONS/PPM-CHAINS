import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  MapPin,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/site';
import { useEnquiry } from '../context/EnquiryContext';

const ENQUIRY_ROUTES = [
  {
    id: 'Product & Wholesale Enquiry',
    title: 'Product & Wholesale Enquiries',
    desc: 'For jewellery retailers and wholesale buyers enquiring about chain designs, product availability, pricing and order quantities.',
  },
  {
    id: 'Manufacturing & Custom Requirements',
    title: 'Manufacturing & Custom Requirements',
    desc: 'For businesses discussing specific chain designs, custom requirements or manufacturing possibilities.',
  },
  {
    id: 'General Enquiries',
    title: 'General Enquiries',
    desc: 'For questions about PPM Chains, our business or other matters.',
  },
];

export const ContactPage: React.FC = () => {
  const { setPrivacyOpen } = useEnquiry();

  const [enquiryType, setEnquiryType] = useState('Product & Wholesale Enquiry');
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectTopic = (topicId: string) => {
    setEnquiryType(topicId);
    const formEl = document.getElementById('contact-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!businessName.trim()) next.businessName = 'Please enter your business or store name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Please enter a valid business email.';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!message.trim()) next.message = 'Please enter your message.';
    if (!agreed) next.agreed = 'Please agree to the privacy notice.';
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
    }, 500);
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION MATCHING FIGMA #276:5963 */}
      <section className="relative overflow-hidden bg-[#244218]/22 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
        />
        <img
          src="/images/contact-hero-14e6ec.png"
          alt=""
          className="pointer-events-none absolute right-0 top-6 h-[420px] sm:h-[480px] w-auto object-contain opacity-30 sm:opacity-85 lg:opacity-100"
        />

        <div className="ppm-container relative z-10">
          <div className="max-w-[600px] py-4">
            <span className="text-[15px] font-medium tracking-[-0.02em] text-[#111111]">
              Contact AJC
            </span>
            <h1 className="mt-2 font-serif-display text-[44px] sm:text-[56px] lg:text-[62px] font-bold leading-[1.04] tracking-[-0.02em] text-[#244218]">
              Let&apos;s Start a <span className="text-[#111111]">Conversation</span>
            </h1>
            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#111111]/85">
              Whether you&apos;re a jewellery retailer exploring our chain ranges or looking for a
              manufacturing partner, we&apos;re here to help you discuss suitable designs,
              availability and wholesale requirements.
            </p>
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP — 3 TOPIC CARDS */}
      <section className="bg-white py-10">
        <div className="ppm-container">
          <div className="mb-7 flex flex-col gap-2">
            <span className="text-[13px] font-medium text-[#555555]">How can we help?</span>
            <h2 className="font-serif-display text-[32px] sm:text-[36px] font-semibold text-[#244218]">
              Let&apos;s Start with <span className="text-[#111111]">Your Requirements.</span>
            </h2>
            <p className="max-w-[505px] text-[14px] font-medium text-[#555555]">
              Choose the option closest to your needs so we can understand your enquiry and direct
              it to the right team.
            </p>
            <div className="section-rule mt-1" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {ENQUIRY_ROUTES.map((card) => {
              const selected = enquiryType === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => selectTopic(card.id)}
                  className={`flex flex-col justify-between rounded-[12px] border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                    selected
                      ? 'border-[#244218] bg-[#E4E8E3]/55 shadow-sm'
                      : 'border-black/12 bg-[#F4F6F3] hover:border-[#244218]/45'
                  }`}
                >
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-[18px] font-semibold text-[#244218]">{card.title}</h3>
                    <p className="text-[14px] font-medium leading-relaxed text-[#555555]">
                      {card.desc}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#244218]">
                    <span>{selected ? 'Selected below' : 'Select this enquiry type'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN 2-COLUMN BODY: CONTACT FORM + OFFICE & FACILITY CARD */}
      <section id="contact-form" className="bg-white pt-4 pb-16">
        <div className="ppm-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left: Contact Message Card */}
            <div className="lg:col-span-6">
              <div className="rounded-[12px] border border-black/10 bg-[#F4F6F3] p-6 sm:p-7">
                <h2 className="font-serif-display text-[32px] sm:text-[36px] font-semibold text-[#244218]">
                  Send Us <span className="text-[#111111]">a message</span>
                </h2>
                <p className="mt-2 text-[14px] font-medium text-[#555555]">
                  Share a few details and our team will get back to you with the right information
                  or connect you with the appropriate team.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-xl border border-[#244218]/20 bg-white p-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-[#244218]" />
                    <h3 className="mt-3 text-lg font-semibold text-[#111111]">
                      Message Sent (Prototype Simulation)
                    </h3>
                    <p className="mt-1.5 text-sm text-[#555555]">
                      Thank you, {fullName}. Your {enquiryType.toLowerCase()} message has been
                      validated and simulated locally for client review.
                    </p>
                    <div className="mt-5 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setMessage('');
                        }}
                        className="rounded-full border border-[#244218] px-5 py-2 text-xs font-semibold text-[#244218] hover:bg-[#244218]/8"
                      >
                        Send Another Message
                      </button>
                      <Link
                        to="/enquiry"
                        className="rounded-full bg-[#244218] px-5 py-2 text-xs font-semibold text-white hover:bg-[#1d3513]"
                      >
                        Start Product Enquiry →
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-5 flex flex-col gap-3.5">
                    <div>
                      <label
                        htmlFor="c-type"
                        className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                      >
                        Enquiry Type
                      </label>
                      <div className="relative">
                        <select
                          id="c-type"
                          value={enquiryType}
                          onChange={(e) => setEnquiryType(e.target.value)}
                          className="h-10 w-full appearance-none rounded-[8px] border border-black/15 bg-white px-3.5 pr-9 text-[13px] font-medium text-[#555555] focus:border-[#244218] focus:outline-none"
                        >
                          <option value="Product & Wholesale Enquiry">
                            Product &amp; Wholesale Enquiry
                          </option>
                          <option value="Manufacturing & Custom Requirements">
                            Manufacturing &amp; Custom Requirements
                          </option>
                          <option value="General Enquiries">General Enquiries</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="c-name"
                          className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                        >
                          Full Name
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors((p) => ({ ...p, fullName: '' }));
                          }}
                          placeholder="Enter your full name"
                          className={`h-10 w-full rounded-[8px] border bg-white px-3.5 text-[13px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
                            errors.fullName ? 'border-red-600' : 'border-black/15 focus:border-[#244218]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="c-business"
                          className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                        >
                          Business Name
                        </label>
                        <input
                          id="c-business"
                          type="text"
                          value={businessName}
                          onChange={(e) => {
                            setBusinessName(e.target.value);
                            if (errors.businessName)
                              setErrors((p) => ({ ...p, businessName: '' }));
                          }}
                          placeholder="Your Business or store name"
                          className={`h-10 w-full rounded-[8px] border bg-white px-3.5 text-[13px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
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

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="c-email"
                          className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                        >
                          Business Email
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((p) => ({ ...p, email: '' }));
                          }}
                          placeholder="your@company.in"
                          className={`h-10 w-full rounded-[8px] border bg-white px-3.5 text-[13px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
                            errors.email ? 'border-red-600' : 'border-black/15 focus:border-[#244218]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="c-phone"
                          className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                        >
                          Phone/Whatsapp
                        </label>
                        <div
                          className={`flex h-10 w-full items-center rounded-[8px] border bg-white px-3 ${
                            errors.phone
                              ? 'border-red-600'
                              : 'border-black/15 focus-within:border-[#244218]'
                          }`}
                        >
                          <span className="pr-2.5 text-[13px] font-medium text-[#555555]">+91</span>
                          <span className="mr-2.5 h-5 w-px bg-black/12" />
                          <input
                            id="c-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              if (errors.phone) setErrors((p) => ({ ...p, phone: '' }));
                            }}
                            placeholder="98565 89652"
                            className="min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none"
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="c-message"
                        className="mb-1.5 block text-[13px] font-medium text-[#111111]"
                      >
                        Message
                      </label>
                      <textarea
                        id="c-message"
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors((p) => ({ ...p, message: '' }));
                        }}
                        placeholder="How can our team help you?"
                        className={`w-full rounded-[8px] border bg-white p-3.5 text-[13px] font-medium text-[#111111] placeholder:text-[#777777] focus:outline-none ${
                          errors.message ? 'border-red-600' : 'border-black/15 focus:border-[#244218]'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                      )}
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
                      className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#244218] text-[15px] font-semibold text-white transition-colors hover:bg-[#1d3513] disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <span>Submit Enquiry</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Office & Manufacturing Facility Card */}
            <div id="facility" className="lg:col-span-6">
              <div className="flex h-full flex-col justify-between rounded-[12px] border border-black/10 bg-white p-6 sm:p-7">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="font-serif-display text-[32px] font-semibold text-[#62513B]">
                      Our office &amp; <span className="text-[#111111]">Manufacturing Facility</span>
                    </h2>
                    <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#555555]">
                      We operate from our integrated manufacturing facility in Malappuram, Kerala,
                      with in-house design, CAD, vacuum investment casting and finishing
                      capabilities.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-[12px]">
                    <img
                      src="/images/contact-facility.png"
                      alt="AJC Jewel Manufacturers Limited integrated facility"
                      className="h-[236px] w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-[16px] font-bold text-[#111111]">
                        {COMPANY_INFO.legalName}
                      </h3>
                      <address className="mt-1.5 not-italic text-[14px] font-medium leading-relaxed text-[#555555]">
                        {COMPANY_INFO.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>

                    <a
                      href={COMPANY_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-[#244218] px-4 text-[13px] font-medium text-[#244218] transition-colors hover:bg-[#244218] hover:text-white"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Get Directions →</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Phone & WhatsApp Cards */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:+91${COMPANY_INFO.phone}`}
                    className="flex items-center gap-3 rounded-[12px] bg-[#F4F6F3] p-3.5 transition-colors hover:bg-[#E4E8E3]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#244218]">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[15px] font-bold text-[#111111]">
                        {COMPANY_INFO.phone}
                      </div>
                      <div className="text-[12px] font-medium text-[#555555]">
                        {COMPANY_INFO.hours}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/91${COMPANY_INFO.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[12px] bg-[#F4F6F3] p-3.5 transition-colors hover:bg-[#E4E8E3]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#244218]">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[15px] font-bold text-[#111111]">
                        {COMPANY_INFO.phone}
                      </div>
                      <div className="text-[12px] font-medium text-[#555555]">
                        {COMPANY_INFO.responseNote}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
