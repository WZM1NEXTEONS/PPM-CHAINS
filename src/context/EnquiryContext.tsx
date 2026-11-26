import React, { createContext, useContext, useState, useCallback } from 'react';
import { ProductItem } from '../data/catalog';

interface EnquiryContextValue {
  selectedProduct: ProductItem | null;
  setSelectedProduct: (product: ProductItem | null) => void;
  quickViewProduct: ProductItem | null;
  setQuickViewProduct: (product: ProductItem | null) => void;
  privacyOpen: boolean;
  setPrivacyOpen: (open: boolean) => void;
  toast: string | null;
  showToast: (message: string) => void;
}

const EnquiryContext = createContext<EnquiryContextValue | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => {
      setToast((prev) => (prev === message ? null : prev));
    }, 2800);
  }, []);

  return (
    <EnquiryContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        quickViewProduct,
        setQuickViewProduct,
        privacyOpen,
        setPrivacyOpen,
        toast,
        showToast,
      }}
    >
      {children}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-xl bg-[#111111] px-5 py-3 text-sm font-medium text-white shadow-xl animate-dropdown"
        >
          {toast}
        </div>
      )}
    </EnquiryContext.Provider>
  );
};

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error('useEnquiry must be used inside EnquiryProvider');
  }
  return ctx;
}
