import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export const SiteFooter: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useEnquiry();

  const handleEnquiry = () => {
    setSelectedProduct(null);
    navigate('/enquiry');
  };

  return (
    <footer className="relative overflow-hidden bg-[#244218] border-b border-white/6 text-white">
      {/* Subtle golden aura bottom-right matching Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-[-10%] h-[340px] w-[1100px] rounded-full opacity-55 blur-[90px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 221, 82, 0.52) 0%, rgba(36, 66, 24, 0) 72%)',
        }}
      />

      <div className="ppm-container relative z-10 py-12 lg:py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left brand & CTA column */}
          <div className="flex w-full max-w-[515px] flex-col gap-4">
            <Link to="/" className="text-[20px] font-semibold tracking-tight text-white">
              PPM Chains
            </Link>
            <p className="text-[14px] leading-relaxed text-white/85">
              Jewellery chain manufacturer and wholesale supplier. Machine-made and Kerala
              handcrafted chains for jewellery retailers and wholesale buyers.
            </p>
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleEnquiry}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-full border border-white bg-[#F2F2F2] px-5 text-[12px] font-semibold text-[#111111] transition-colors duration-200 hover:bg-white"
              >
                <span>Start a Business Enquiry</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <Link
                to="/contact"
                className="flex h-10 w-full items-center justify-center gap-2 rounded-full border border-white/35 px-5 text-[12px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                <span>Contact Office</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right 3 navigation columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-12">
            <div className="flex min-w-[140px] flex-col gap-4">
              <h4 className="text-[12px] font-semibold text-[#DFCE64]">Chains</h4>
              <ul className="flex flex-col gap-2.5 text-[14px] text-white/85">
                <li>
                  <Link
                    to="/chains?range=Machine-made"
                    className="transition-colors hover:text-white"
                  >
                    Machine made
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chains?range=Kerala+handcrafted"
                    className="transition-colors hover:text-white"
                  >
                    Kerala handcrafted
                  </Link>
                </li>
                <li>
                  <Link to="/chains" className="transition-colors hover:text-white">
                    All chains
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex min-w-[140px] flex-col gap-4">
              <h4 className="text-[12px] font-semibold text-[#DFCE64]">Company</h4>
              <ul className="flex flex-col gap-2.5 text-[14px] text-white/85">
                <li>
                  <Link to="/manufacturing" className="transition-colors hover:text-white">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="transition-colors hover:text-white">
                    About PPM
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleEnquiry}
                    className="text-left transition-colors hover:text-white"
                  >
                    Wholesale enquiry
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 flex min-w-[150px] flex-col gap-4">
              <h4 className="text-[12px] font-semibold text-[#DFCE64]">Contact</h4>
              <ul className="flex flex-col gap-2.5 text-[14px] text-white/85">
                <li>
                  <Link to="/about" className="transition-colors hover:text-white">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="/manufacturing#approaches" className="transition-colors hover:text-white">
                    Design &amp; CAD
                  </Link>
                </li>
                <li>
                  <Link to="/manufacturing#process" className="transition-colors hover:text-white">
                    Manufacturing Process
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition-colors hover:text-white">
                    Custom Jewellery
                  </Link>
                </li>
                <li>
                  <Link to="/manufacturing#handcrafted" className="transition-colors hover:text-white">
                    Craftsmanship
                  </Link>
                </li>
                <li>
                  <Link to="/manufacturing#process" className="transition-colors hover:text-white">
                    Quality
                  </Link>
                </li>
                <li>
                  <Link to="/contact#facility" className="transition-colors hover:text-white">
                    Facilities
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
