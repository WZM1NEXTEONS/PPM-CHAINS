import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { EnquiryProvider } from './context/EnquiryContext';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { PrivacyNoticeModal } from './components/PrivacyNoticeModal';
import { HomePage } from './pages/HomePage';
import { ChainsPage } from './pages/ChainsPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { AboutPage } from './pages/AboutPage';
import { ManufacturingPage } from './pages/ManufacturingPage';

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <EnquiryProvider>
        <ScrollManager />
        <div className="flex min-h-screen flex-col bg-white text-[#111111]">
          <SiteHeader />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chains" element={<ChainsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/enquiry" element={<EnquiryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/manufacturing" element={<ManufacturingPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
        <ProductQuickViewModal />
        <PrivacyNoticeModal />
      </EnquiryProvider>
    </BrowserRouter>
  );
}

export default App;
