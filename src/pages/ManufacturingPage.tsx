import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ASSORTMENT_STYLES } from '../data/catalog';
import { useEnquiry } from '../context/EnquiryContext';
import { GoldCtaBanner } from '../components/GoldCtaBanner';

const TOP_TRUST_ITEMS = [
  'Specialists in Chain Manufacturing',
  'Machine-Made & Kerala Handcrafted',
  'For Jewellery Retailers & Wholesalers',
  'Discuss Availability, Pricing & Quantities',
];

const MACHINE_POINTS = [
  'Wide Range of Chain Styles',
  'Consistent Quality Finish',
  'Variety of Link Types and Patterns',
  'Suitable for Different Assortments',
];

const KERALA_POINTS = [
  'Traditional Craftsmanship',
  'Distinctive Designs',
  'Skilled Handwork',
  'A Unique Addition to Your Collection',
];

const STAGES = [
  {
    num: 'Stage 01',
    title: 'Chain Production',
    desc: 'Machine-made or handcrafted methods are used to create the chain.',
    detail:
      'Depending on the range, calibrated link-forming machinery or skilled Kerala goldsmiths build the chain structure to specification.',
    image: '/images/mfg-stage-1.png',
  },
  {
    num: 'Stage 02',
    title: 'Finishing & Detailing',
    desc: 'Chains are finished and detailed for a refined look.',
    detail:
      'Surface polishing, facet detailing, and traditional burnishing refine the lustre and smooth drape of every link.',
    image: '/images/mfg-stage-2.png',
  },
  {
    num: 'Stage 03',
    title: 'Quality Inspection',
    desc: 'Each chain is checked for finish and consistency.',
    detail:
      'Multi-stage review verifies link joints, clasp integrity, surface finish, and consistency across wholesale lots.',
    image: '/images/mfg-stage-3.png',
  },
  {
    num: 'Stage 04',
    title: 'Ready for Supply',
    desc: 'Finished chains are prepared for jewellery retailers and wholesale buyers.',
    detail:
      'Approved batches are carefully packed and prepared for dispatch to retail showrooms and wholesale partners.',
    image: '/images/mfg-stage-4.png',
  },
];

export const ManufacturingPage: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useEnquiry();
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <div className="bg-white">
      {/* HERO MATCHING SCREENSHOT 4 & FIGMA #291:3156 */}
      <section className="relative min-h-[520px] sm:min-h-[600px] overflow-hidden pt-28 pb-16">
        <img
          src="/images/mfg-hero-2a5223.png"
          alt="Chain manufacturing at PPM"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
        />

        <div className="ppm-container relative z-10 flex min-h-[380px] items-center">
          <div className="max-w-[708px] text-white">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-white/90">
              CHAIN MANUFACTURING AT PPM
            </span>
            <h1 className="mt-2 font-serif-display text-[40px] sm:text-[54px] lg:text-[62px] font-bold leading-[1.02] tracking-[-0.02em] text-white">
              Two Approaches
              <br />
              to Chain Making.
              <br />
              One Focus on Your Business.
            </h1>
            <p className="mt-4 max-w-[560px] text-[15px] sm:text-[16px] leading-relaxed text-white/95">
              PPM Chains supplies machine-made and Kerala handcrafted chains to jewellery retailers
              and wholesale buyers. Explore our manufacturing approaches and discover the range
              that fits your business requirements.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-[460px]">
              <Link
                to="/chains"
                className="flex h-12 flex-1 items-center justify-center rounded-full bg-white px-6 text-[15px] font-semibold text-[#244218] transition-colors hover:bg-[#F4F6F3]"
              >
                Explore Our Chain Ranges
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  navigate('/enquiry');
                }}
                className="flex h-12 flex-1 items-center justify-center rounded-full border border-white/50 bg-white/15 px-6 text-[15px] font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white hover:text-[#244218]"
              >
                Enquire for Wholesale
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-ITEM TRUST STRIP */}
      <section className="bg-white py-5 border-b border-black/6">
        <div className="ppm-container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TOP_TRUST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#244218]/12 text-[#244218]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="text-[13px] font-semibold text-[#244218]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MANUFACTURING APPROACH + 2 CARDS */}
      <section className="bg-white py-12 lg:py-14">
        <div className="ppm-container">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#555555]">
                  Our manufacturing Approach
                </span>
                <h2 className="font-serif-display text-[34px] sm:text-[38px] font-semibold leading-tight text-[#244218]">
                  Chain Making That Serves{' '}
                  <span className="text-[#111111]">Different Business Needs.</span>
                </h2>
                <div className="section-rule mt-1" />
              </div>

              <div className="space-y-3 text-[14px] font-medium leading-relaxed text-[#555555]">
                <p>
                  PPM Chains focuses on two approaches to chain making: machine-made production and
                  Kerala handcrafted work. Each offers a different way to explore chain designs for
                  your jewellery assortment.
                </p>
                <p>
                  Whether you are reviewing styles for your store or sourcing chains for your
                  business, our team can help you discuss suitable designs, availability, pricing
                  and order quantities.
                </p>
              </div>

              <a
                href="#approaches"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#244218] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
              >
                <span>Explore Our Manufacturing</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-[16px] bg-[#F4F6F3] p-4 sm:p-5">
                <div className="flex flex-col justify-between gap-4 rounded-[12px] bg-white p-3.5">
                  <div>
                    <img
                      src="/images/mfg-card-machine-5888cc.png"
                      alt="Machine-Made Chains"
                      className="h-[130px] w-full rounded-[8px] object-cover"
                    />
                    <h3 className="mt-4 text-[18px] font-semibold text-[#244218]">
                      Machine-Made Chains
                    </h3>
                    <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-[#555555]">
                      Explore chain designs produced using machine-based manufacturing, with
                      consistent quality and a variety of styles for your assortment.
                    </p>
                  </div>
                  <Link
                    to="/chains?range=Machine-made"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#244218] hover:underline"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="flex flex-col justify-between gap-4 rounded-[12px] bg-white p-3.5">
                  <div>
                    <img
                      src="/images/mfg-card-kerala.png"
                      alt="Kerala Handcrafted Chains"
                      className="h-[130px] w-full rounded-[8px] object-cover"
                    />
                    <h3 className="mt-4 text-[18px] font-semibold text-[#244218]">
                      Kerala Handcrafted Chains
                    </h3>
                    <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-[#555555]">
                      Discover chain designs created through traditional Kerala goldsmithing and
                      skilled handwork, with distinctive styles and detailing.
                    </p>
                  </div>
                  <Link
                    to="/chains?range=Kerala+handcrafted"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#244218] hover:underline"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH 01 & APPROACH 02 */}
      <section id="approaches" className="bg-white py-8 lg:py-12">
        <div className="ppm-container flex flex-col gap-12">
          {/* Approach 01: Machine-Made Chains */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5 overflow-hidden rounded-[16px]">
              <img
                src="/images/mfg-approach-machine.png"
                alt="Machine-Made Chains"
                className="h-[260px] sm:h-[290px] w-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-[#555555]">
                  Manufacturing Approach 01
                </span>
                <h2 className="font-serif-display text-[34px] font-semibold text-[#244218]">
                  Machine-Made Chains
                </h2>
                <div className="section-rule mt-1" />
              </div>

              <p className="text-[14px] font-medium leading-relaxed text-[#555555]">
                Our machine-made chains are produced using specialised machinery, allowing for a
                wide range of designs and consistent finishes. This range is well-suited for
                jewellery retailers and wholesale buyers looking for diverse styles for their
                collections.
              </p>

              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-1">
                {MACHINE_POINTS.map((pt) => (
                  <div key={pt} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#244218]/12 text-[#244218]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[12px] font-semibold leading-snug text-[#244218]">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/chains?range=Machine-made"
                className="mt-1 inline-flex h-11 items-center gap-2 rounded-full bg-[#244218] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
              >
                <span>Explore Machine-Made Chains</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Approach 02: Kerala Handcrafted Chains */}
          <div id="handcrafted" className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-[#555555]">
                  Manufacturing Approach 02
                </span>
                <h2 className="font-serif-display text-[34px] font-semibold text-[#244218]">
                  Kerala Handcrafted Chains
                </h2>
                <div className="section-rule mt-1" />
              </div>

              <p className="text-[14px] font-medium leading-relaxed text-[#555555]">
                Our Kerala handcrafted chains are shaped through traditional goldsmithing and
                skilled handwork, reflecting the artistry and experience of Kerala&apos;s
                chain-making tradition. This range offers distinctive designs for jewellery
                businesses seeking unique styles for their assortment.
              </p>

              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-1">
                {KERALA_POINTS.map((pt) => (
                  <div key={pt} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#244218]/12 text-[#244218]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[12px] font-semibold leading-snug text-[#244218]">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/chains?range=Kerala+handcrafted"
                className="mt-1 inline-flex h-11 items-center gap-2 rounded-full bg-[#244218] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
              >
                <span>Explore Handcrafted Chains</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 overflow-hidden rounded-[16px]">
              <img
                src="/images/mfg-approach-kerala.png"
                alt="Kerala Handcrafted Chains"
                className="h-[260px] sm:h-[290px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4-STAGE PROCESS SHOWCASE */}
      <section id="process" className="bg-white py-12 lg:py-16 border-t border-black/6">
        <div className="ppm-container">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4 flex flex-col items-start gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#555555]">
                  Detail in every chain
                </span>
                <h2 className="font-serif-display text-[34px] font-semibold leading-tight text-[#244218]">
                  Explore <span className="text-[#111111]">Handcrafted Chains</span>
                </h2>
                <div className="section-rule mt-1" />
              </div>

              <div className="space-y-3 text-[14px] font-medium leading-relaxed text-[#555555]">
                <p>
                  A chain&apos;s appeal lies in the details — from the construction of its links to
                  its overall finish. At PPM, our chain ranges go through careful production,
                  finishing and inspection processes to ensure they are ready for your business.
                </p>
                <p>
                  Whether you are reviewing styles for your store or sourcing chains for your
                  business, our team can help you discuss suitable designs, availability, pricing
                  and order quantities.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  navigate('/enquiry');
                }}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#244218] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
              >
                <span>Enquire About Manufacturing</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {STAGES.map((st, idx) => {
                  const selected = activeStage === idx;
                  return (
                    <button
                      key={st.num}
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      className={`group flex flex-col text-left rounded-[12px] p-2.5 transition-all duration-200 ${
                        selected
                          ? 'bg-[#F4F6F3] ring-1 ring-[#244218]'
                          : 'bg-white hover:bg-[#F4F6F3]/70'
                      }`}
                    >
                      <div className="w-full overflow-hidden rounded-[8px]">
                        <img
                          src={st.image}
                          alt={st.title}
                          className="h-[115px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <span className="mt-3 text-[13px] font-semibold text-[#323232]">
                        {st.num}
                      </span>
                      <h3 className="mt-1 text-[16px] font-semibold text-[#244218]">{st.title}</h3>
                      <p className="mt-1.5 text-[13px] font-medium leading-snug text-[#555555]">
                        {st.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Detail Bar */}
              <div className="mt-4 rounded-[12px] border border-[#244218]/15 bg-[#F4F6F3] px-5 py-3.5 text-[13px] font-medium text-[#323232]">
                <strong className="text-[#244218]">
                  {STAGES[activeStage].num} — {STAGES[activeStage].title}:
                </strong>{' '}
                {STAGES[activeStage].detail}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAIN DESIGNS FOR YOUR ASSORTMENT (4 BUST CARDS) */}
      <section className="bg-white py-10 lg:py-16 border-t border-black/6">
        <div className="ppm-container">
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#555555]">Explore Our range</span>
              <h2 className="font-serif-display text-[34px] sm:text-[38px] font-semibold text-[#244218]">
                Chain Designs <span className="text-[#111111]">for Your Assortment</span>
              </h2>
              <div className="section-rule mt-1" />
            </div>
            <p className="max-w-[395px] text-[14px] font-medium leading-relaxed text-[#555555]">
              Browse our chain ranges and discover styles to suit your business. When you find a
              design that interests you, get in touch with our team to discuss availability, pricing
              and order quantities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ASSORTMENT_STYLES.map((item) => (
              <Link
                key={item.title}
                to={`/chains?style=${encodeURIComponent(item.style)}`}
                className="group flex flex-col gap-3 rounded-[10px] bg-[#F4F6F3] p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="overflow-hidden rounded-[6px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-1 pb-1">
                  <span className="text-[16px] font-semibold text-[#244218]">{item.title}</span>
                  <ArrowRight className="h-4 w-4 text-[#244218] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD HAND CTA BANNER */}
      <GoldCtaBanner />
    </div>
  );
};
