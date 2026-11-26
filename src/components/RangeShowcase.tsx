import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const RangeShowcase: React.FC = () => {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="ppm-container">
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-[13px] font-medium text-[#1C1C1C]">Explore Our Range</span>
          <h2 className="font-serif-display text-[32px] sm:text-[38px] font-semibold leading-tight text-[#244218]">
            Find the right chains <span className="text-[#111111]">for your business.</span>
          </h2>
          <div className="section-rule mt-1" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Left large card */}
          <div className="group relative min-h-[420px] sm:min-h-[540px] lg:col-span-6 overflow-hidden rounded-[24px]">
            <img
              src="/images/range-wholesale-49d161.png"
              alt="Chains for wholesale buyers"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 text-white">
              <div className="max-w-[350px] flex flex-col gap-4">
                <div>
                  <span className="text-[12px] font-medium uppercase tracking-wider text-white/85">
                    EXPLORE THE RANGE
                  </span>
                  <h3 className="mt-1 font-serif-upright text-[30px] sm:text-[32px] font-semibold leading-tight text-white">
                    Chains for wholesale buyers
                  </h3>
                  <p className="mt-2 text-[14px] font-medium leading-relaxed text-white/90">
                    Browse available chain designs and find styles suited to your customers and
                    assortment.
                  </p>
                </div>
                <div>
                  <Link
                    to="/chains"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[14px] font-semibold text-[#244218] transition-colors duration-200 hover:bg-[#244218] hover:text-white"
                  >
                    <span>Explore All Chains</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right 2 vertical cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            <div className="group relative min-h-[380px] sm:min-h-[540px] overflow-hidden rounded-[24px]">
              <img
                src="/images/range-machine-24095d.png"
                alt="Machine-made chains"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-[22px] font-bold tracking-[-0.02em] text-white">
                      Machine-made chains
                    </h3>
                    <p className="mt-1 text-[14px] font-medium text-white/90">
                      Explore chain designs made using machinery.
                    </p>
                  </div>
                  <div>
                    <Link
                      to="/chains?range=Machine-made"
                      className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[13px] font-semibold text-[#244218] transition-colors duration-200 hover:bg-[#244218] hover:text-white"
                    >
                      <span>Explore All Chains</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative min-h-[380px] sm:min-h-[540px] overflow-hidden rounded-[24px]">
              <img
                src="/images/range-kerala-67113d.png"
                alt="Kerala handcrafted chains"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-[22px] font-bold tracking-[-0.02em] text-white">
                      Kerala handcrafted chains
                    </h3>
                    <p className="mt-1 text-[14px] font-medium text-white/90">
                      Discover traditional chain-making styles.
                    </p>
                  </div>
                  <div>
                    <Link
                      to="/chains?range=Kerala+handcrafted"
                      className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[13px] font-semibold text-[#244218] transition-colors duration-200 hover:bg-[#244218] hover:text-white"
                    >
                      <span>Explore All Chains</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
