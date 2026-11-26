import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { PRODUCTS } from '../data/catalog';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Chains', to: '/chains' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'About PPM', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const SiteHeader: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { setSelectedProduct } = useEnquiry();

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [searchOpen]);

  const matchingSuggestions =
    query.trim().length > 0
      ? PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.code.toLowerCase().includes(query.toLowerCase()) ||
            p.range.toLowerCase().includes(query.toLowerCase()) ||
            p.linkStyle.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 4)
      : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    setSearchOpen(false);
    navigate(q ? `/chains?q=${encodeURIComponent(q)}` : '/chains');
  };

  const handleStartEnquiry = () => {
    setSelectedProduct(null);
    navigate('/enquiry');
  };

  return (
    <div ref={searchRef} className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6 pointer-events-none">
      <header className="pointer-events-auto mx-auto flex h-[60px] w-full max-w-[1099px] items-center justify-between rounded-[44px] border border-black/12 bg-white/95 px-3 py-2.5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <Link
          to="/"
          aria-label="PPM Chains Home"
          className="flex shrink-0 items-center pl-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244218] rounded-full"
        >
          <img
            src="/images/ppm-logo-1ab0da.png"
            alt="PPM Chains"
            className="h-9 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1.5 text-[14px] font-medium tracking-[-0.02em] transition-colors duration-200 ${
                  isActive
                    ? 'text-[#244218] font-semibold'
                    : 'text-[#323232] hover:text-[#244218]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-[#244218]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => {
              setSearchOpen((prev) => !prev);
              setMobileOpen(false);
            }}
            aria-label="Search chains"
            aria-expanded={searchOpen}
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#244218] text-[#244218] transition-colors duration-200 hover:bg-[#244218]/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244218]"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </button>

          <button
            type="button"
            onClick={handleStartEnquiry}
            className="hidden sm:inline-flex h-11 items-center gap-2 rounded-[24px] bg-[#244218] px-5 text-[14px] font-medium tracking-[-0.02em] text-white transition-all duration-200 hover:bg-[#1d3513] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244218] focus-visible:ring-offset-2"
          >
            <span>Start an Enquiry</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setSearchOpen(false);
            }}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-[#244218]/30 text-[#244218] transition-colors hover:bg-[#244218]/8"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Search Bar Popover */}
      {searchOpen && (
        <div className="pointer-events-auto mx-auto mt-3 w-full max-w-[560px] rounded-[24px] border border-black/12 bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.14)] animate-dropdown">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
            <Search className="ml-2 h-4 w-4 shrink-0 text-[#555555]" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chain designs, codes or styles..."
              aria-label="Search chain designs"
              className="min-w-0 flex-1 bg-transparent py-1.5 text-sm font-medium text-[#111111] placeholder:text-[#888888] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#244218] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1d3513]"
            >
              Search
            </button>
          </form>

          {matchingSuggestions.length > 0 && (
            <div className="mt-2.5 border-t border-black/8 pt-2">
              <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-[#555555]">
                Matching Chains
              </p>
              <div className="divide-y divide-black/5">
                {matchingSuggestions.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setSearchOpen(false);
                      navigate(`/chains?q=${encodeURIComponent(p.name)}`);
                    }}
                    className="flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left text-sm transition-colors hover:bg-[#F4F6F3]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-9 w-9 rounded-lg bg-[#F4F6F3] object-contain p-0.5"
                      />
                      <div>
                        <div className="font-semibold text-[#111111]">{p.name}</div>
                        <div className="text-xs text-[#555555]">
                          {p.range} · {p.code}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#244218]">View →</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="pointer-events-auto mx-auto mt-3 flex w-full max-w-[1099px] flex-col gap-1 rounded-[24px] border border-black/12 bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.14)] lg:hidden animate-dropdown"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#E4E8E3] text-[#244218] font-semibold'
                    : 'text-[#323232] hover:bg-[#F4F6F3]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={handleStartEnquiry}
            className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#244218] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d3513]"
          >
            <span>Start an Enquiry</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </div>
  );
};
