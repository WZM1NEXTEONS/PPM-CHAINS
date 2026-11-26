import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { COMPANY_INFO } from '../data/site';

export const PrivacyNoticeModal: React.FC = () => {
  const { privacyOpen, setPrivacyOpen } = useEnquiry();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPrivacyOpen(false);
    };
    if (privacyOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [privacyOpen, setPrivacyOpen]);

  if (!privacyOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/55 p-4"
      onClick={() => setPrivacyOpen(false)}
    >
      <div
        className="relative w-full max-w-[520px] rounded-[20px] bg-white p-6 sm:p-7 shadow-2xl animate-dropdown"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setPrivacyOpen(false)}
          aria-label="Close privacy notice"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F6F3] text-[#323232] hover:bg-[#E4E8E3]"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2.5 text-[#244218]">
          <ShieldCheck className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Prototype Notice</span>
        </div>
        <h3
          id="privacy-modal-title"
          className="mt-2 font-serif-display text-[28px] font-bold text-[#244218]"
        >
          Enquiry &amp; Privacy Notice
        </h3>
        <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#555555]">
          <p>
            This interactive prototype for {COMPANY_INFO.brandName} ({COMPANY_INFO.legalName})
            simulates wholesale and business enquiry flows on the frontend for design review.
          </p>
          <p>
            Information entered into contact or enquiry forms is validated locally in your browser
            and is not transmitted to external servers or stored in a backend database.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setPrivacyOpen(false)}
          className="mt-5 h-10 w-full rounded-full bg-[#244218] text-sm font-semibold text-white hover:bg-[#1d3513]"
        >
          Close
        </button>
      </div>
    </div>
  );
};
