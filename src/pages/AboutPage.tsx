import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, TrendingUp, Users, Link2, Gem, Handshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { GoldCtaBanner } from '../components/GoldCtaBanner';

const MILESTONES = [
  {
    icon: Sprout,
    title: 'Our Roots',
    desc: 'A family business with deep ties to the jewellery craft tradition of Kondotty, Kerala.',
  },
  {
    icon: TrendingUp,
    title: 'Our Growth',
    desc: 'Evolving with new capabilities while continuing our focus on chain making.',
  },
  {
    icon: Users,
    title: 'Our Future',
    desc: 'The next generation continues to build on our foundation, with a clear focus on jewellery businesses.',
  },
];

const PRINCIPLES = [
  {
    icon: Link2,
    title: 'Focus on Chain Making',
    desc: 'Our business is centered on machine-made and Kerala handcrafted chains for jewellery retailers and wholesale buyers.',
  },
  {
    icon: Gem,
    title: 'Respect for Craft',
    desc: 'We bring different chain-making approaches together, giving buyers a range of styles to explore for their collections.',
  },
  {
    icon: Handshake,
    title: 'Strong Business Relationships',
    desc: 'We work closely with jewellery businesses to understand their requirements and support their growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Service and Dependability',
    desc: 'We aim to offer clear communication, consistent quality and practical support for our wholesale partners.',
  },
];

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedProduct } = useEnquiry();

  return (
    <div className="bg-white">
      {/* HERO MATCHING SCREENSHOT 3 & FIGMA #277:6451 */}
      <section className="relative min-h-[450px] sm:min-h-[503px] overflow-hidden pt-28 pb-16">
        <img
          src="/images/about-hero-165e2a.png"
          alt="PPM Chains jewellery craftsmanship"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"
        />

        <div className="ppm-container relative z-10 flex min-h-[310px] items-center">
          <div className="max-w-[584px] text-white">
            <h1 className="font-serif-display text-[42px] sm:text-[54px] lg:text-[62px] font-bold leading-[1.04] tracking-[-0.02em] text-white">
              A focus on Chains.
              <br />A commitment to craft
            </h1>
            <p className="mt-4 max-w-[560px] text-[15px] sm:text-[16px] leading-relaxed text-white/95">
              PPM Chains specialises in machine-made and Kerala handcrafted chains for jewellery
              retailers and wholesale buyers. We bring together different approaches to chain
              making to serve the needs of jewellery businesses.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-[440px]">
              <Link
                to="/chains"
                className="flex h-12 flex-1 items-center justify-center rounded-full bg-white px-6 text-[15px] font-semibold text-[#244218] transition-colors hover:bg-[#F4F6F3]"
              >
                Explore Chains
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

      {/* WHO WE ARE */}
      <section id="who-we-are" className="bg-white py-12 lg:py-16">
        <div className="ppm-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#555555]">Who We Are</span>
                <h2 className="font-serif-display text-[34px] sm:text-[38px] font-semibold leading-tight text-[#244218]">
                  Chain Making for
                  <br />
                  <span className="text-[#111111]">Jewellery Businesses.</span>
                </h2>
                <div className="section-rule mt-1" />
              </div>

              <div className="space-y-3 text-[14px] font-medium leading-relaxed text-[#555555] max-w-[600px]">
                <p>
                  PPM Chains is a jewellery chain manufacturer and wholesale supplier serving
                  jewellery retailers and businesses. Our range brings together machine-made chains
                  and Kerala handcrafted chains, giving buyers two distinct approaches to explore
                  for their product assortment.
                </p>
                <p>
                  We aim to make it easier for businesses to discover suitable chain designs and
                  discuss product availability, pricing and order requirements with our team.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/chains?range=Machine-made"
                  className="rounded-[12px] bg-[#F4F6F3] px-4 py-3 text-[14px] font-medium text-[#244218] transition-colors hover:bg-[#E4E8E3]"
                >
                  Machine-Made Chains
                </Link>
                <Link
                  to="/chains?range=Kerala+handcrafted"
                  className="rounded-[12px] bg-[#F4F6F3] px-4 py-3 text-[14px] font-medium text-[#244218] transition-colors hover:bg-[#E4E8E3]"
                >
                  Kerala Handcrafted Chains
                </Link>
                <Link
                  to="/enquiry"
                  className="rounded-[12px] bg-[#F4F6F3] px-4 py-3 text-[14px] font-medium text-[#244218] transition-colors hover:bg-[#E4E8E3]"
                >
                  For Retailers &amp; Wholesalers
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[16px]">
                <img
                  src="/images/ppm-showroom.jpg"
                  alt="PPM Chains Showroom"
                  className="h-[270px] sm:h-[310px] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY + TIMELINE */}
      <section className="bg-white py-10 lg:py-14 border-t border-black/6">
        <div className="ppm-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#555555]">Our Story</span>
                <h2 className="font-serif-display text-[34px] sm:text-[38px] font-semibold leading-tight text-[#244218]">
                  A Business Built
                  <br />
                  <span className="text-[#111111]">Around Chain Making.</span>
                </h2>
                <div className="section-rule mt-1" />
              </div>

              <div className="space-y-3 text-[14px] font-medium leading-relaxed text-[#555555]">
                <p>
                  PPM&apos;s story is rooted in Kondotty, Kerala, and in the development of a
                  business focused on jewellery chains. Today, we serve jewellery businesses through
                  our machine-made and Kerala handcrafted chain offerings.
                </p>
                <p>
                  With the next generation involved in the business, we continue to focus on our
                  chain-making specialisation, wholesale relationships and the evolving needs of
                  jewellery buyers.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {MILESTONES.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.title} className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F4F6F3] text-[#244218]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="hidden sm:block h-[1px] flex-1 bg-[#9F8A0C]/55" />
                      </div>
                      <h3 className="text-[16px] font-semibold text-[#244218]">{m.title}</h3>
                      <p className="text-[13px] font-medium leading-relaxed text-[#555555]">
                        {m.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CHAIN RANGES */}
      <section className="bg-white py-10 lg:py-14">
        <div className="ppm-container">
          <div className="mb-7 flex flex-col gap-2">
            <span className="text-[13px] font-medium text-[#555555]">Our Chain Ranges</span>
            <h2 className="font-serif-display text-[34px] sm:text-[38px] font-semibold leading-tight text-[#244218]">
              Two Approaches <span className="text-[#111111]">to Chain Making.</span>
            </h2>
            <p className="max-w-[495px] text-[14px] font-medium text-[#555555]">
              We offer machine-made chains and Kerala handcrafted chains, giving jewellery
              businesses two distinct ranges to explore. Each approach brings its own character,
              styles and possibilities.
            </p>
            <div className="section-rule mt-1" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-5 rounded-[16px] bg-[#F4F6F3] p-5 sm:p-6">
              <div className="sm:col-span-6 flex flex-col items-start gap-4">
                <div>
                  <h3 className="font-serif-display text-[22px] font-bold text-[#244218]">
                    Machine Made Chains
                  </h3>
                  <p className="mt-2 text-[13px] font-medium leading-relaxed text-[#555555]">
                    Explore a wide range of chain designs produced using machinery, with consistent
                    quality and a variety of styles for your assortment.
                  </p>
                </div>
                <Link
                  to="/chains?range=Machine-made"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#244218] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="sm:col-span-6 overflow-hidden rounded-[12px]">
                <img
                  src="/images/about-machine.png"
                  alt="Machine-made jewellery range"
                  className="h-[190px] w-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-5 rounded-[16px] bg-[#F4F6F3] p-5 sm:p-6">
              <div className="sm:col-span-6 flex flex-col items-start gap-4">
                <div>
                  <h3 className="font-serif-display text-[22px] font-bold text-[#244218]">
                    Kerala handcrafted Chains
                  </h3>
                  <p className="mt-2 text-[13px] font-medium leading-relaxed text-[#555555]">
                    Discover chain designs created through traditional Kerala goldsmithing and
                    skilled handwork with distinctive styles and detailing.
                  </p>
                </div>
                <Link
                  to="/chains?range=Kerala+handcrafted"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#244218] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="sm:col-span-6 overflow-hidden rounded-[12px]">
                <img
                  src="/images/about-kerala-6af2b1.png"
                  alt="Kerala handcrafted jewellery range"
                  className="h-[190px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PEOPLE BEHIND PPM */}
      <section className="bg-white py-10 lg:py-14">
        <div className="ppm-container">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6 flex flex-col items-start gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#555555]">
                  The people behind PPM
                </span>
                <h2 className="font-serif-display text-[34px] sm:text-[38px] font-semibold leading-tight text-[#244218]">
                  A family Business <span className="text-[#111111]">with a Shared Vision</span>
                </h2>
                <div className="section-rule mt-1" />
              </div>

              <p className="max-w-[540px] text-[14px] font-medium leading-relaxed text-[#555555]">
                PPM Chains is managed by the second generation of the business, with Benzeer, Nisar
                and Afsal involved in its continuous development. Their involvement reflects the
                company&apos;s family-led background and its ongoing focus on jewellery chain
                manufacturing and wholesale supply.
              </p>

              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#244218] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1d3513]"
              >
                <span>Get in touch with PPM</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[16px] bg-[#F4F6F3]">
                <img
                  src="/images/about-family-4ad5c2.png"
                  alt="Second-generation leadership of PPM Chains"
                  className="h-[240px] sm:h-[270px] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="bg-white py-10 lg:py-16">
        <div className="ppm-container">
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#555555]">What Guides Our Work</span>
              <h2 className="font-serif-display text-[34px] sm:text-[38px] font-semibold text-[#244218]">
                Our <span className="text-[#111111]">Principles</span>
              </h2>
              <div className="section-rule mt-1" />
            </div>
            <p className="max-w-[395px] text-[14px] font-medium leading-relaxed text-[#555555]">
              Our work is guided by a clear focus on chain making, respect for craft and a
              long-term commitment to the jewellery businesses we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="flex flex-col items-center gap-4 rounded-[12px] border border-black/12 bg-white p-5 text-center transition-shadow hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#F4F6F3] text-[#244218]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-semibold text-[#244218]">{p.title}</h3>
                    <p className="text-[13px] font-medium leading-relaxed text-[#555555]">
                      {p.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GOLD HAND CTA BANNER */}
      <GoldCtaBanner />
    </div>
  );
};
