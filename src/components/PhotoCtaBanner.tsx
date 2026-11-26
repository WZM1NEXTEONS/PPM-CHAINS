import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEnquiry } from '../context/EnquiryContext';

export const PhotoCtaBanner: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useEnquiry();

  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] overflow-hidden border-b border-white/6">
      <img
        src="/images/home-cta-banner-4ac2a1.png"
        alt="Jewellery craftsmanship portrait"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20"
      />
      <div className="ppm-container relative z-10 flex min-h-[420px] sm:min-h-[480px] items-center py-14">
        <div className="flex max-w-[526px] flex-col gap-6 text-white">
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-semibold tracking-wide text-white/90">
              GET TO KNOW PPM
            </span>
            <h2 className="font-serif-display text-[36px] sm:text-[42px] font-bold leading-[1.08] text-white">
              Looking for a chain manufacturing partner?
            </h2>
            <p className="text-[15px] font-medium leading-relaxed text-white/90">
              Tell us which chain styles you&apos;re interested in and your approximate order
              quantity. Our team can follow up to discuss your wholesale requirements.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setSelectedProduct(null);
                navigate('/enquiry');
              }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[15px] font-semibold text-[#244218] transition-all duration-200 hover:bg-[#244218] hover:text-white"
            >
              Discuss Your Wholesale Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
