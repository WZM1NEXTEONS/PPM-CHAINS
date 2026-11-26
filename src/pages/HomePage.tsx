import React, { useState, useMemo, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Cpu,
  Building2,
  Users,
  ShieldCheck,
  PencilRuler,
  Hammer,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { PRODUCTS, ChainRange } from '../data/catalog';
import { HOME_FAQS } from '../data/site';
import { useEnquiry } from '../context/EnquiryContext';
import { ProductCard } from '../components/ProductCard';
import { RangeShowcase } from '../components/RangeShowcase';
import { PhotoCtaBanner } from '../components/PhotoCtaBanner';
import { WholesaleEnquirySection } from '../components/WholesaleEnquirySection';

const HERO_SLIDES = [
  {
    eyebrow: 'CHAIN MANUFACTURER & WHOLESALE SUPPLIER',
    title: 'Chain Designs for Jewellery Businesses.',
    desc: "Explore PPM's machine-made and Kerala handcrafted chain ranges for jewellery retailers and wholesale buyers. Enquire about designs, availability and order quantities.",
  },
  {
    eyebrow: 'PRECISION MACHINE-MADE & ARTISAN CRAFT',
    title: 'Consistent Quality for Wholesale Counters.',
    desc: 'From everyday uniform links to traditional Kerala goldsmithing, discover collections crafted for retail showrooms and wholesale partners.',
  },
  {
    eyebrow: 'MALAPPURAM INTEGRATED FACILITY',
    title: 'Built Around Long-Term Jewellery Supply.',
    desc: 'Partner with our second-generation manufacturing team for reliable chain sourcing, multi-stage inspection and custom bulk requirements.',
  },
];

const TRENDING_SPOTLIGHTS = [
  {
    id: 'spot-trending',
    tag: 'Trending',
    title: 'Chains',
    image: '/images/trend-chain-5adcbd.png',
    isPhoto: false,
    productCode: 'PPM-MM-101',
  },
  {
    id: 'spot-bestseller',
    tag: 'Bestseller',
    title: 'Chains',
    image: '/images/trend-chain-5adcbd.png',
    isPhoto: false,
    productCode: 'PPM-MM-102',
  },
  {
    id: 'spot-premium',
    tag: 'Premium',
    title: 'Chains',
    image: '/images/trend-beads.png',
    isPhoto: false,
    productCode: 'PPM-KH-203',
  },
  {
    id: 'spot-classic',
    tag: 'Classic Link',
    title: 'Chains',
    image: '/images/chain-classic-link.png',
    isPhoto: true,
    productCode: 'PPM-MM-103',
  },
  {
    id: 'spot-rope',
    tag: 'Handcrafted',
    title: 'Rope Chains',
    image: '/images/chain-rope.png',
    isPhoto: true,
    productCode: 'PPM-KH-201',
  },
  {
    id: 'spot-box',
    tag: 'Precision',
    title: 'Box Chains',
    image: '/images/chain-box.png',
    isPhoto: true,
    productCode: 'PPM-MM-104',
  },
];

const STATS = [
  {
    icon: Cpu,
    title: 'In-house CAD & Design',
    desc: 'Design and development capabilities',
  },
  {
    icon: Building2,
    title: '15,000 sq ft Facility',
    desc: 'Manufacturing facility in Malappuram',
  },
  {
    icon: Users,
    title: '~100 Skilled Employees',
    desc: 'A team supporting jewellery production',
  },
  {
    icon: ShieldCheck,
    title: 'Multi-stage Quality Inspection',
    desc: 'Quality checks throughout production',
  },
];

const CRAFT_STEPS = [
  {
    num: '01',
    title: 'Design and preparation',
    desc: 'Chain designs are planned and prepared ahead of production.',
    icon: PencilRuler,
  },
  {
    num: '02',
    title: 'Chain making',
    desc: 'Links are formed and joined by machine or by hand, depending on the range.',
    icon: Hammer,
  },
  {
    num: '03',
    title: 'Finishing and detailing',
    desc: 'Chains are finished and detailed once they are made.',
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'Quality checks',
    desc: 'Finished chains are reviewed before they are supplied.',
    icon: CheckCircle2,
  },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useEnquiry();

  const [heroIdx, setHeroIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [rangeFilter, setRangeFilter] = useState<'All' | ChainRange>('All');
  const [openFaq, setOpenFaq] = useState<number>(1);
  const spotlightScrollRef = useRef<HTMLDivElement>(null);

  const scrollSpotlights = (dir: 'left' | 'right') => {
    const el = spotlightScrollRef.current;
    if (!el) return;
    const step = 404;
    el.scrollBy({ left: dir === 'right' ? step : -step, behavior: 'smooth' });
  };

  const handleSpotlightEnquire = (productCode: string) => {
    const found = PRODUCTS.find((p) => p.code === productCode) ?? null;
    setSelectedProduct(found);
    navigate('/enquiry');
  };

  const filteredCatalog = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesRange = rangeFilter === 'All' || item.range === rangeFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.linkStyle.toLowerCase().includes(q);
      return matchesRange && matchesSearch;
    }).slice(0, 8);
  }, [rangeFilter, searchQuery]);

  const activeSlide = HERO_SLIDES[heroIdx];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#244218] pt-28 pb-32 sm:pt-32 sm:pb-36 lg:min-h-[790px] lg:pt-36">
        {/* Decorative golden circle & concentric rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-20 h-[440px] w-[440px] sm:h-[540px] sm:w-[540px] rounded-full bg-[#B2A550]/85"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[5%] top-12 h-[540px] w-[540px] rounded-full border border-[#B2A550]/45"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[1%] top-4 h-[540px] w-[540px] rounded-full border border-[#B2A550]/30"
        />

        {/* Hero portrait image on right */}
        <div className="pointer-events-none absolute right-[-12%] sm:right-[-4%] lg:right-[3%] top-16 h-[560px] sm:h-[680px] lg:h-[750px] w-auto opacity-45 sm:opacity-85 lg:opacity-100">
          <img
            src="/images/home-hero-portrait-80a352.png"
            alt="Model wearing gold jewellery chains"
            className="h-full w-auto object-contain object-bottom"
          />
        </div>

        {/* Bottom gradient fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#244218] to-transparent"
        />

        <div className="ppm-container relative z-10 flex items-center justify-between">
          <div className="max-w-[584px] py-8 sm:py-12">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-[#DFCE64]">
              {activeSlide.eyebrow}
            </p>
            <h1 className="mt-3 font-serif-display text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.03] tracking-[-0.02em] text-white">
              {activeSlide.title}
            </h1>
            <p className="mt-4 max-w-[540px] text-[15px] sm:text-[16px] leading-relaxed text-white/90">
              {activeSlide.desc}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-[512px]">
              <Link
                to="/chains"
                className="flex h-13 flex-1 items-center justify-center rounded-full bg-white px-6 text-[15px] font-semibold text-[#244218] transition-all duration-200 hover:bg-[#F4F6F3] active:scale-[0.98]"
              >
                Explore Chains
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  navigate('/enquiry');
                }}
                className="flex h-13 flex-1 items-center justify-center rounded-full border border-white/50 bg-white/12 px-6 text-[15px] font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:bg-white hover:text-[#244218]"
              >
                Enquire for Wholesale
              </button>
            </div>
          </div>

          {/* Right vertical slide indicators */}
          <div className="hidden lg:flex flex-col gap-2" aria-label="Hero highlights">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setHeroIdx(idx)}
                aria-label={`Show highlight ${idx + 1}`}
                className={`w-3 rounded-full transition-all duration-200 ${heroIdx === idx
                  ? 'h-9 bg-white/80'
                  : 'h-4 bg-white/25 hover:bg-white/45'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SCROLLABLE TRENDING / BESTSELLER / PREMIUM CARDS */}
      <section className="relative z-20 -mt-20 pb-4">
        <div className="ppm-container relative">
          <div
            ref={spotlightScrollRef}
            className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-1"
          >
            {TRENDING_SPOTLIGHTS.map((card) => (
              <article
                key={card.id}
                onClick={() => handleSpotlightEnquire(card.productCode)}
                className="group relative h-[268px] w-[84vw] max-w-[384px] sm:w-[360px] lg:w-[384px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[28px] bg-[#F1F1F1] p-5 card-shadow-trending transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative z-10 flex flex-col text-[#62513B]">
                  <span className="text-[14px] font-medium">{card.tag}</span>
                  <strong className="text-[24px] font-bold leading-tight">{card.title}</strong>
                </div>

                <img
                  src={card.image}
                  alt={`${card.tag} ${card.title}`}
                  className={
                    card.isPhoto
                      ? 'pointer-events-none absolute right-4 top-4 h-[180px] w-[170px] rounded-[18px] object-cover transition-transform duration-500 group-hover:scale-105'
                      : 'pointer-events-none absolute right-2 top-0 h-[215px] w-auto object-contain transition-transform duration-500 group-hover:scale-105'
                  }
                />

                <div className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-2.5">
                  <div className="flex h-11 flex-1 items-center rounded-full bg-[#244218] px-5 text-[14px] font-semibold text-white transition-colors group-hover:bg-[#1d3513]">
                    <span>Enquire Now</span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#244218] text-white transition-colors group-hover:bg-[#1d3513]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Horizontal scroll controls */}
          <div className="-mt-4 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollSpotlights('left')}
              aria-label="Scroll featured chains left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/12 bg-white text-[#244218] shadow-xs transition-colors hover:bg-[#244218] hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollSpotlights('right')}
              aria-label="Scroll featured chains right"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/12 bg-white text-[#244218] shadow-xs transition-colors hover:bg-[#244218] hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#F4F6F3] py-6 border-y border-black/5">
        <div className="ppm-container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-black/10">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className={`flex items-center gap-3 ${idx > 0 ? 'lg:pl-6' : ''}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#244218]/10 text-[#244218]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold tracking-[-0.02em] text-[#244218]">
                      {stat.title}
                    </div>
                    <div className="text-[13px] font-medium text-[#555555]">{stat.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TWO APPROACHES TO CHAIN MAKING */}
      <section className="bg-white py-12 lg:py-14">
        <div className="ppm-container">
          <div className="mb-8 flex flex-col gap-2">
            <span className="text-[13px] font-medium text-[#1C1C1C]">Two ranges</span>
            <h2 className="font-serif-display text-[32px] sm:text-[36px] font-semibold leading-tight text-[#244218]">
              Two Approaches <span className="text-[#111111]">to Chain Making</span>
            </h2>
            <div className="section-rule mt-1" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="group relative flex min-h-[300px] sm:min-h-[327px] items-center overflow-hidden rounded-[24px] p-7">
              <img
                src="/images/approach-machine-686a5f.png"
                alt="Machine-made chains"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/60 to-transparent sm:from-white/80 sm:via-white/40"
              />
              <div className="relative z-10 max-w-[275px] flex flex-col gap-4">
                <div>
                  <h3 className="text-[24px] font-semibold text-[#244218]">Machine-made chains</h3>
                  <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#244218]">
                    Explore chain designs produced through machine based manufacturing for your
                    wholesale range.
                  </p>
                </div>
                <div>
                  <Link
                    to="/chains?range=Machine-made"
                    className="inline-flex h-10 items-center rounded-full border border-[#244218]/20 bg-white px-4 text-[13px] font-semibold text-[#244218] transition-colors duration-200 hover:bg-[#244218] hover:text-white"
                  >
                    Explore machine-made chains
                  </Link>
                </div>
              </div>
            </article>

            <article className="group relative flex min-h-[300px] sm:min-h-[327px] items-center overflow-hidden rounded-[24px] p-7">
              <img
                src="/images/approach-kerala-7e8e52.png"
                alt="Kerala handcrafted chains"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/60 to-transparent sm:from-white/80 sm:via-white/40"
              />
              <div className="relative z-10 max-w-[290px] flex flex-col gap-4">
                <div>
                  <h3 className="text-[24px] font-semibold text-[#244218]">
                    Kerala handcrafted chains
                  </h3>
                  <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#244218]">
                    Discover handcrafted chain designs that bring traditional Kerala jewellery
                    craftsmanship to your collection.
                  </p>
                </div>
                <div>
                  <Link
                    to="/chains?range=Kerala+handcrafted"
                    className="inline-flex h-10 items-center rounded-full border border-[#244218]/20 bg-white px-4 text-[13px] font-semibold text-[#244218] transition-colors duration-200 hover:bg-[#244218] hover:text-white"
                  >
                    Explore handcrafted chains
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EXPLORE OUR CHAIN DESIGNS (CATALOGUE PREVIEW) */}
      <section id="catalogue" className="bg-white py-10 lg:py-14">
        <div className="ppm-container">
          <div className="mb-6 flex flex-col gap-2">
            <span className="text-[13px] font-medium text-[#1C1C1C]">Chain catalogue</span>
            <h2 className="font-serif-display text-[32px] sm:text-[36px] font-semibold leading-tight text-[#244218]">
              Explore Our <span className="text-[#111111]">Chain Designs</span>
            </h2>
            <div className="section-rule mt-1" />
          </div>

          {/* Search & Category Pills matching Screenshot 5 */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1 max-w-full lg:max-w-[540px]">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or code"
                aria-label="Search chain designs by name or code"
                className="h-11 w-full rounded-full border border-black/12 bg-white pl-10 pr-4 text-[14px] font-medium text-[#111111] placeholder:text-[#666666] focus:border-[#244218] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {(
                [
                  { label: 'All Chains', value: 'All' },
                  { label: 'Machine-made Chains', value: 'Machine-made' },
                  { label: 'Kerala handcrafted Chains', value: 'Kerala handcrafted' },
                ] as const
              ).map((tab) => {
                const active = rangeFilter === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setRangeFilter(tab.value)}
                    className={`h-10 rounded-full border px-4 text-[13px] font-medium transition-colors duration-200 ${active
                      ? 'border-[#244218]/30 bg-[#E4E8E3] font-semibold text-[#244218]'
                      : 'border-black/12 bg-white text-[#555555] hover:border-[#244218]/40 hover:text-[#244218]'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredCatalog.length === 0 ? (
            <div className="rounded-[16px] border border-black/10 bg-[#F4F6F3] p-10 text-center">
              <p className="text-base font-semibold text-[#111111]">
                No chain designs matched &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setRangeFilter('All');
                }}
                className="mt-4 rounded-full bg-[#244218] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1d3513]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredCatalog.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <Link
              to="/chains"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[#244218] px-6 text-[14px] font-semibold text-[#244218] transition-colors hover:bg-[#244218] hover:text-white"
            >
              <span>View Full Chain Catalogue</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* THE CRAFT BEHIND EVERY CHAIN (DARK OLIVE SECTION) */}
      <section className="relative overflow-hidden bg-[#244218] py-12 lg:py-14 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-24 h-[290px] w-[290px] rounded-full bg-[#DFCE64]/35 blur-[70px]"
        />
        <div className="ppm-container relative z-10">
          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <span className="text-[13px] font-medium text-[#DFCE64]">Manufacturing</span>
              <h2 className="mt-1 font-serif-display text-[36px] sm:text-[42px] font-semibold leading-tight text-white">
                The Craft Behind Every Chain
              </h2>
            </div>
            <p className="max-w-[430px] text-[15px] font-medium leading-relaxed text-white/90">
              Discover how PPM&apos;s machine-made and Kerala handcrafted chain ranges are produced,
              finished and checked.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {CRAFT_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="flex flex-col gap-4 border-t border-white/15 p-5 sm:border-r sm:last:border-r-0"
                >
                  <Icon className="h-5 w-5 text-white/90" />
                  <div className="flex flex-col gap-2">
                    <span className="text-[13px] font-semibold text-[#DFCE64]">{step.num}</span>
                    <h3 className="font-serif-display text-[24px] font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-[14px] font-medium leading-relaxed text-white/85">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              to="/manufacturing"
              className="inline-flex h-11 items-center rounded-full bg-white px-6 text-[14px] font-semibold text-[#244218] transition-colors hover:bg-[#F4F6F3]"
            >
              Explore Manufacturing Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* FIND THE RIGHT CHAINS FOR YOUR BUSINESS */}
      <RangeShowcase />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-white py-12 lg:py-16">
        <div className="ppm-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 flex flex-col items-start gap-6">
              <div>
                <span className="text-[14px] font-medium text-[#244218]">
                  Everything you need to know
                </span>
                <h2 className="mt-2 font-serif-display text-[36px] sm:text-[42px] font-semibold leading-tight text-[#244218]">
                  Frequently Asked Questions
                </h2>
              </div>

              <Link
                to="/contact"
                className="inline-flex h-13 w-full max-w-[360px] items-center justify-center rounded-full bg-[#244218] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
              >
                Let&apos;s discuss
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[12px] border border-black/12 bg-white p-5 sm:p-6">
                <div className="divide-y divide-black/10">
                  {HOME_FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={faq.q} className="py-4 first:pt-1 last:pb-1">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 text-left"
                        >
                          <span className="text-[15px] font-semibold text-[#111111]">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-[#244218] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                        {isOpen && (
                          <p className="mt-2.5 text-[14px] leading-relaxed text-[#555555]">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHIC CTA BANNER */}
      <PhotoCtaBanner />

      {/* WHOLESALE ENQUIRY SPLIT SECTION */}
      <WholesaleEnquirySection />
    </div>
  );
};
