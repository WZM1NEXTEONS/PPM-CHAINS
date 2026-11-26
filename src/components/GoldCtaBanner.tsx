import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEnquiry } from '../context/EnquiryContext';

export const GoldCtaBanner: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useEnquiry();

  return (
    <section className="relative min-h-[380px] sm:min-h-[426px] overflow-hidden border-b border-white/6">
      <img
        src="/images/gold-hand-cta-32e6f9.png"
        alt="Hand holding fine gold chains"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#dfd15f]/85 via-[#dfd15f]/45 to-transparent sm:from-[#dfd15f]/70 sm:via-[#dfd15f]/20"
      />
      <div className="ppm-container relative z-10 flex min-h-[380px] sm:min-h-[426px] items-center py-12">
        <div className="flex max-w-[424px] flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-semibold tracking-[-0.02em] text-[#17390A]">
              FOR JEWELLERY BUSINESSES
            </span>
            <h2 className="font-serif-display text-[36px] sm:text-[40px] font-bold leading-[1.05] text-[#244218]">
              Looking for the Right Chains for your Business?
            </h2>
            <p className="text-[14px] font-medium leading-relaxed text-[#0F0F0F]">
              Explore our machine-made and Kerala handcrafted chain ranges, then tell us what your
              business needs. Our team can help you enquire about suitable designs, availability and
              wholesale requirements.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setSelectedProduct(null);
                navigate('/enquiry');
              }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-semibold text-[#244218] shadow-sm transition-all duration-200 hover:bg-[#244218] hover:text-white"
            >
              Enquire for Wholesale
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
