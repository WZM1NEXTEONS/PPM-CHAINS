import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, Check } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export const ProductQuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, setSelectedProduct } = useEnquiry();
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setQuickViewProduct(null);
    };
    if (quickViewProduct) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [quickViewProduct, setQuickViewProduct]);

  if (!quickViewProduct) return null;

  const handleEnquire = () => {
    setSelectedProduct(quickViewProduct);
    setQuickViewProduct(null);
    navigate('/enquiry');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
      onClick={() => setQuickViewProduct(null)}
    >
      <div
        className="relative w-full max-w-[680px] overflow-hidden rounded-[20px] bg-white shadow-2xl animate-dropdown"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close product preview"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F6F3] text-[#323232] transition-colors hover:bg-[#E4E8E3]"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex items-center justify-center bg-[#F4F6F3] p-8">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="max-h-[240px] w-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="flex items-center gap-2">
                {quickViewProduct.badge && (
                  <span className="rounded-[8px] bg-[#244218]/12 px-2.5 py-1 text-xs font-semibold text-[#244218]">
                    {quickViewProduct.badge}
                  </span>
                )}
                <span className="text-xs font-medium text-[#555555]">{quickViewProduct.code}</span>
              </div>

              <p className="mt-3 text-xs font-medium text-[#555555]">{quickViewProduct.range}</p>
              <h3
                id="quick-view-title"
                className="mt-0.5 font-serif-display text-[28px] font-bold leading-tight text-[#244218]"
              >
                {quickViewProduct.name}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-[#555555]">
                {quickViewProduct.description}
              </p>

              <ul className="mt-4 space-y-1.5 border-t border-black/8 pt-4 text-xs text-[#323232]">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#244218]" />
                  <span>
                    <strong>Purity:</strong> {quickViewProduct.specs.purity}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#244218]" />
                  <span>
                    <strong>Finish:</strong> {quickViewProduct.specs.finish}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#244218]" />
                  <span>
                    <strong>Wholesale Supply:</strong> {quickViewProduct.specs.moqNote}
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleEnquire}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#244218] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d3513]"
              >
                <span>Enquire for This Design</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-[11px] text-[#555555]">
                Product code {quickViewProduct.code} will be prefilled in your enquiry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
