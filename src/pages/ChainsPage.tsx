import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Sparkles,
  Hammer,
  Store,
  PackageCheck,
} from 'lucide-react';
import { PRODUCTS, ChainRange, LinkStyle } from '../data/catalog';
import { ProductCard } from '../components/ProductCard';
import { RangeShowcase } from '../components/RangeShowcase';
import { PhotoCtaBanner } from '../components/PhotoCtaBanner';
import { WholesaleEnquirySection } from '../components/WholesaleEnquirySection';

const HERO_PILLARS = [
  { icon: Sparkles, text: 'Wide range of chain designs' },
  { icon: Hammer, text: 'Machine-Made & Kerala Handcrafted' },
  { icon: Store, text: 'For Jewellery Retailers & Wholesalers' },
  { icon: PackageCheck, text: 'Enquire About Availability & Quantities' },
];

export const ChainsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialRange = (searchParams.get('range') as 'All' | ChainRange) || 'All';
  const initialStyle = (searchParams.get('style') as 'All' | LinkStyle) || 'All';
  const initialTag = searchParams.get('tag') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [rangeFilter, setRangeFilter] = useState<'All' | ChainRange>(
    initialRange === 'Machine-made' || initialRange === 'Kerala handcrafted' ? initialRange : 'All'
  );
  const [styleFilter, setStyleFilter] = useState<'All' | LinkStyle>(initialStyle);
  const [tagFilter, setTagFilter] = useState<string>(initialTag);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'code-asc'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  useEffect(() => {
    const r = searchParams.get('range');
    const s = searchParams.get('style');
    const t = searchParams.get('tag');
    const q = searchParams.get('q');
    setRangeFilter(
      r === 'Machine-made' || r === 'Kerala handcrafted' ? r : 'All'
    );
    setStyleFilter((s as LinkStyle) || 'All');
    setTagFilter(t || 'All');
    setSearchQuery(q || '');
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      if (rangeFilter !== 'All' && p.range !== rangeFilter) return false;
      if (styleFilter !== 'All' && p.linkStyle !== styleFilter) return false;
      if (tagFilter !== 'All' && p.badge !== tagFilter) return false;
      if (
        q &&
        !p.name.toLowerCase().includes(q) &&
        !p.code.toLowerCase().includes(q) &&
        !p.description.toLowerCase().includes(q) &&
        !p.range.toLowerCase().includes(q) &&
        !p.linkStyle.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });

    if (sortBy === 'name-asc') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === 'code-asc') {
      return [...list].sort((a, b) => a.code.localeCompare(b.code));
    }
    return list;
  }, [rangeFilter, styleFilter, tagFilter, searchQuery, sortBy]);

  const hasActiveFilters =
    rangeFilter !== 'All' ||
    styleFilter !== 'All' ||
    tagFilter !== 'All' ||
    searchQuery.trim().length > 0;

  const resetAll = () => {
    setRangeFilter('All');
    setStyleFilter('All');
    setTagFilter('All');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const machineFeatured = PRODUCTS.filter((p) => p.range === 'Machine-made').slice(0, 2);
  const keralaFeatured = PRODUCTS.filter((p) => p.range === 'Kerala handcrafted').slice(0, 2);
  const twoRangesFeatured = [PRODUCTS[1], PRODUCTS[4]];

  return (
    <div className="bg-[#F4F6F3]">
      {/* HERO SECTION MATCHING SCREENSHOT 2 & FIGMA #245:6203 */}
      <section className="bg-[#DCE1DA] pt-24 pb-6">
        <div className="ppm-container">
          <div className="relative overflow-hidden rounded-[32px] bg-[#244218] px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[445px]">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Left column */}
              <div className="lg:col-span-4 flex flex-col gap-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="text-right leading-tight">
                    <span className="block text-[16px] font-bold">10+</span>
                    <span className="block text-[11px] text-white/80">years of experience</span>
                  </div>
                  <div className="flex items-center -space-x-2">
                    <span className="h-9 w-9 rounded-full bg-white" />
                    <span className="h-9 w-9 rounded-full bg-white/45" />
                    <span className="h-9 w-9 rounded-full bg-white/20" />
                  </div>
                </div>

                <p className="max-w-[270px] text-[15px] leading-relaxed text-white/90">
                  Explore PPM&apos;s machine-made and Kerala handcrafted chain ranges for jewellery
                  retailers and wholesale buyers.
                </p>

                <div>
                  <a
                    href="#catalogue-browser"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/12 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white hover:text-[#244218]"
                  >
                    Explore Chain Designs
                  </a>
                </div>
              </div>

              {/* Center display heading + pendant chain */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <h1 className="font-serif-playfair text-[38px] sm:text-[50px] lg:text-[60px] font-medium leading-[1.12] tracking-[-0.02em] text-white">
                  Chain Designs for Jewellery Businesses
                </h1>
                <img
                  src="/images/chain-pendant-12858f.png"
                  alt="Featured chain showcase"
                  className="-mb-10 mt-2 h-[210px] sm:h-[250px] w-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Right copy */}
              <div className="lg:col-span-3 flex items-center lg:justify-end">
                <p className="max-w-[280px] text-[14px] sm:text-[15px] leading-relaxed text-white/90">
                  Find designs for your assortment and enquire about availability, pricing and order
                  quantities.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillar Row */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.text} className="flex items-center gap-3 px-2 py-1.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#244218]/12 text-[#244218]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] font-semibold leading-snug text-[#244218]">
                    {pillar.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE CATALOGUE SEARCH, FILTER & SORT SECTION */}
      <section id="catalogue-browser" className="bg-white py-12 border-b border-black/6">
        <div className="ppm-container">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[13px] font-medium text-[#1C1C1C]">Interactive Catalogue</span>
              <h2 className="font-serif-display text-[32px] sm:text-[36px] font-semibold text-[#244218]">
                Browse &amp; Filter <span className="text-[#111111]">All Chain Designs</span>
              </h2>
              <div className="section-rule mt-2" />
            </div>
            <p className="text-[14px] font-medium text-[#555555]">
              Showing {Math.min(visibleCount, filteredProducts.length)} of {filteredProducts.length}{' '}
              designs
            </p>
          </div>

          {/* Controls */}
          <div className="mb-5 flex flex-col gap-3 rounded-[16px] border border-black/10 bg-[#F4F6F3] p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555555]" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search chains by name, code (e.g. PPM-MM-101) or style..."
                  aria-label="Search product catalogue"
                  className="h-10 w-full rounded-full border border-black/12 bg-white pl-10 pr-4 text-[13px] font-medium text-[#111111] placeholder:text-[#777777] focus:border-[#244218] focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#555555] mr-1">
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  <span>Filter:</span>
                </div>

                <select
                  aria-label="Filter by link style"
                  value={styleFilter}
                  onChange={(e) => setStyleFilter(e.target.value as 'All' | LinkStyle)}
                  className="h-10 rounded-full border border-black/12 bg-white px-3.5 text-[13px] font-medium text-[#323232] focus:border-[#244218] focus:outline-none"
                >
                  <option value="All">All Link Styles</option>
                  <option value="Classic Link">Classic Link</option>
                  <option value="Rope Chain">Rope Chain</option>
                  <option value="Beaded Chain">Beaded Chain</option>
                  <option value="Box Chain">Box Chain</option>
                  <option value="Pendant Chain">Pendant Chain</option>
                  <option value="Heritage Ring">Heritage Ring</option>
                </select>

                <select
                  aria-label="Sort chains"
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as 'featured' | 'name-asc' | 'code-asc')
                  }
                  className="h-10 rounded-full border border-black/12 bg-white px-3.5 text-[13px] font-medium text-[#323232] focus:border-[#244218] focus:outline-none"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="name-asc">Sort: Name (A–Z)</option>
                  <option value="code-asc">Sort: Catalogue Code</option>
                </select>
              </div>
            </div>

            {/* Range Tabs & Active Filter Chips */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { label: 'All Chains', value: 'All' },
                    { label: 'Machine-made Chains', value: 'Machine-made' },
                    { label: 'Kerala handcrafted Chains', value: 'Kerala handcrafted' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setRangeFilter(tab.value)}
                    className={`h-9 rounded-full border px-4 text-[13px] font-medium transition-colors ${
                      rangeFilter === tab.value
                        ? 'border-[#244218] bg-[#244218] text-white'
                        : 'border-black/12 bg-white text-[#323232] hover:border-[#244218]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2">
                  {rangeFilter !== 'All' && (
                    <button
                      type="button"
                      onClick={() => setRangeFilter('All')}
                      className="inline-flex items-center gap-1 rounded-full bg-[#E4E8E3] px-3 py-1 text-xs font-semibold text-[#244218]"
                    >
                      <span>{rangeFilter}</span>
                      <X className="h-3 w-3" />
                    </button>
                  )}
                  {styleFilter !== 'All' && (
                    <button
                      type="button"
                      onClick={() => setStyleFilter('All')}
                      className="inline-flex items-center gap-1 rounded-full bg-[#E4E8E3] px-3 py-1 text-xs font-semibold text-[#244218]"
                    >
                      <span>{styleFilter}</span>
                      <X className="h-3 w-3" />
                    </button>
                  )}
                  {tagFilter !== 'All' && (
                    <button
                      type="button"
                      onClick={() => setTagFilter('All')}
                      className="inline-flex items-center gap-1 rounded-full bg-[#E4E8E3] px-3 py-1 text-xs font-semibold text-[#244218]"
                    >
                      <span>{tagFilter}</span>
                      <X className="h-3 w-3" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={resetAll}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#244218] hover:underline"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Reset all</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Product Grid or Empty State */}
          {filteredProducts.length === 0 ? (
            <div className="rounded-[16px] border border-black/10 bg-[#F4F6F3] p-12 text-center">
              <h3 className="font-serif-display text-[28px] font-semibold text-[#244218]">
                No matching chain designs found
              </h3>
              <p className="mt-2 text-sm text-[#555555]">
                Try clearing one of your active filters or search terms to view the full catalogue.
              </p>
              <button
                type="button"
                onClick={resetAll}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#244218] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1d3513]"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Show All Chains</span>
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {visibleCount < filteredProducts.length && (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((c) => c + 4)}
                    className="h-11 rounded-full border border-[#244218] px-7 text-sm font-semibold text-[#244218] transition-colors hover:bg-[#244218] hover:text-white"
                  >
                    Load More Designs ({filteredProducts.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* FEATURED COLLECTIONS BAND 1 — Machine-Made Chains */}
      <section className="bg-[#F4F6F3] py-12 border-b border-black/6">
        <div className="ppm-container">
          <div className="mb-6 flex flex-col gap-2">
            <span className="text-[13px] font-medium text-[#1C1C1C]">Machine-Made Chains</span>
            <h2 className="font-serif-display text-[32px] sm:text-[36px] font-semibold uppercase tracking-wide text-[#244218]">
              FEATURED <span className="text-[#111111]">COLLECTIONS</span>
            </h2>
            <div className="section-rule mt-1" />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-6 overflow-hidden rounded-[12px]">
              <img
                src="/images/approach-machine-686a5f.png"
                alt="Machine-made chains editorial showcase"
                className="h-[310px] w-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {machineFeatured.map((p) => (
                <ProductCard key={`feat-mm-${p.id}`} product={p} variant="featured" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS BAND 2 — Kerala Handcrafted Chains (cards left, dark portrait right) */}
      <section className="bg-[#F4F6F3] py-12 border-b border-black/6">
        <div className="ppm-container">
          <div className="mb-6 flex flex-col gap-2">
            <span className="text-[13px] font-medium text-[#1C1C1C]">
              Kerala handcrafted Chains
            </span>
            <h2 className="font-serif-display text-[32px] sm:text-[36px] font-semibold uppercase tracking-wide text-[#244218]">
              FEATURED <span className="text-[#111111]">COLLECTIONS</span>
            </h2>
            <div className="section-rule mt-1" />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-6 grid grid-cols-1 gap-4 sm:grid-cols-2 order-2 lg:order-1">
              {keralaFeatured.map((p) => (
                <ProductCard key={`feat-kh-${p.id}`} product={p} variant="featured" />
              ))}
            </div>
            <div className="relative lg:col-span-6 overflow-hidden rounded-[12px] bg-[#244218] order-1 lg:order-2 min-h-[310px]">
              <img
                src="/images/cat-featured-3-716d69.png"
                alt="Warm sculptural jewellery portrait"
                className="h-[310px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FROM DESIGNS TO FINISHING */}
      <section className="bg-white py-12 border-b border-black/6">
        <div className="ppm-container">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6 overflow-hidden rounded-[16px]">
              <img
                src="/images/cat-craft-bench-4a95aa.png"
                alt="Jewellery artisan workbench"
                className="h-[420px] sm:h-[520px] w-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col items-start gap-6 lg:pl-6">
              <div>
                <h2 className="font-serif-display text-[36px] sm:text-[42px] font-bold leading-tight text-[#244218]">
                  From Designs to Finishing
                </h2>
                <div className="mt-5 flex items-center justify-center rounded-[12px] bg-[#F4F6F3] p-6">
                  <img
                    src="/images/cat-craft-necklace-3909de.png"
                    alt="Finished jewellery chain"
                    className="h-[220px] w-auto object-contain"
                  />
                </div>
                <p className="mt-5 text-[14px] font-medium leading-relaxed text-[#555555]">
                  Discover how PPM&apos;s machine-made and Kerala handcrafted chain ranges are
                  produced, finished and checked before supply.
                </p>
              </div>
              <Link
                to="/manufacturing"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#244218] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
              >
                <span>Explore Our Manufacturing →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS BAND 3 — Two ranges */}
      <section className="bg-[#F4F6F3] py-12 border-b border-black/6">
        <div className="ppm-container">
          <div className="mb-6 flex flex-col gap-2">
            <span className="text-[13px] font-medium text-[#1C1C1C]">Two ranges</span>
            <h2 className="font-serif-display text-[32px] sm:text-[36px] font-semibold uppercase tracking-wide text-[#244218]">
              FEATURED <span className="text-[#111111]">COLLECTIONS</span>
            </h2>
            <div className="section-rule mt-1" />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-6 overflow-hidden rounded-[12px]">
              <img
                src="/images/cat-featured-2-39c184.png"
                alt="Handcrafted chain styles showcase"
                className="h-[310px] w-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {twoRangesFeatured.map((p) => (
                <ProductCard key={`feat-two-${p.id}`} product={p} variant="featured" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIND THE RIGHT CHAINS FOR YOUR BUSINESS */}
      <RangeShowcase />

      {/* PHOTO CTA BANNER */}
      <PhotoCtaBanner />

      {/* WHOLESALE ENQUIRY FORM SECTION */}
      <WholesaleEnquirySection />
    </div>
  );
};
