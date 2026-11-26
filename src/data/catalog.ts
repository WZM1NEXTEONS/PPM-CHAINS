export type ChainRange = 'Machine-made' | 'Kerala handcrafted';

export type LinkStyle =
  | 'Classic Link'
  | 'Rope Chain'
  | 'Beaded Chain'
  | 'Box Chain'
  | 'Pendant Chain'
  | 'Heritage Ring';

export interface ProductItem {
  id: string;
  code: string;
  name: string;
  category: string;
  range: ChainRange;
  linkStyle: LinkStyle;
  badge?: 'Bestseller' | 'Trending' | 'Premium' | 'New';
  description: string;
  image: string;
  startingPrice: string;
  specs: {
    purity: string;
    finish: string;
    moqNote: string;
  };
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'ppm-sc-01',
    code: 'PPM-MM-101',
    name: 'Sample Chain 01',
    category: 'Machine-made',
    range: 'Machine-made',
    linkStyle: 'Classic Link',
    badge: 'Bestseller',
    description:
      'A uniform link chain made by machine. Suited to retailers building a consistent everyday range.',
    image: '/images/chain-pendant-12858f.png',
    startingPrice: '₹1,070.00',
    specs: {
      purity: '22K / 18K options',
      finish: 'High-polish uniform link',
      moqNote: 'Wholesale lot enquiry',
    },
  },
  {
    id: 'ppm-mm-102',
    code: 'PPM-MM-102',
    name: 'Mexi Amro Necklace',
    category: 'Machine-made',
    range: 'Machine-made',
    linkStyle: 'Pendant Chain',
    badge: 'Bestseller',
    description:
      'Precision-formed everyday link chain crafted for consistent weight, smooth drape, and showroom durability.',
    image: '/images/chain-pendant-12858f.png',
    startingPrice: '₹1,070.00',
    specs: {
      purity: '22K / 18K options',
      finish: 'Diamond-cut lustre',
      moqNote: 'Wholesale lot enquiry',
    },
  },
  {
    id: 'ppm-mm-103',
    code: 'PPM-MM-103',
    name: 'Classic Link Chain',
    category: 'Machine-made',
    range: 'Machine-made',
    linkStyle: 'Classic Link',
    badge: 'Trending',
    description:
      'Clean interlocking oval links engineered on precision machinery for versatile daily-wear retail counters.',
    image: '/images/chain-classic-link.png',
    startingPrice: '₹1,140.00',
    specs: {
      purity: '22K / 18K options',
      finish: 'Mirror polish',
      moqNote: 'Wholesale lot enquiry',
    },
  },
  {
    id: 'ppm-mm-104',
    code: 'PPM-MM-104',
    name: 'Venetian Box Chain',
    category: 'Machine-made',
    range: 'Machine-made',
    linkStyle: 'Box Chain',
    badge: 'Bestseller',
    description:
      'Square-profile box links offering crisp geometric alignment and dependable tensile strength for pendants.',
    image: '/images/chain-box.png',
    startingPrice: '₹1,220.00',
    specs: {
      purity: '22K / 18K options',
      finish: 'Smooth satin-bright',
      moqNote: 'Wholesale lot enquiry',
    },
  },
  {
    id: 'ppm-kh-201',
    code: 'PPM-KH-201',
    name: 'Kerala Heritage Rope Chain',
    category: 'Kerala handcrafted',
    range: 'Kerala handcrafted',
    linkStyle: 'Rope Chain',
    badge: 'Premium',
    description:
      'Hand-twisted spiral links finished by Kerala goldsmiths, bringing rich depth and traditional texture.',
    image: '/images/chain-rope.png',
    startingPrice: '₹1,480.00',
    specs: {
      purity: '22K traditional gold',
      finish: 'Artisan hand-burnished',
      moqNote: 'Made to wholesale order',
    },
  },
  {
    id: 'ppm-kh-202',
    code: 'PPM-KH-202',
    name: 'Malabar Beaded Chain',
    category: 'Kerala handcrafted',
    range: 'Kerala handcrafted',
    linkStyle: 'Beaded Chain',
    badge: 'Premium',
    description:
      'Distinctive beaded chain detailing crafted through traditional Kerala handwork for festive retail assortments.',
    image: '/images/chain-beaded.png',
    startingPrice: '₹1,540.00',
    specs: {
      purity: '22K traditional gold',
      finish: 'Hand-detailed beadwork',
      moqNote: 'Made to wholesale order',
    },
  },
  {
    id: 'ppm-kh-203',
    code: 'PPM-KH-203',
    name: 'Beads & Filigree Drop Chain',
    category: 'Kerala handcrafted',
    range: 'Kerala handcrafted',
    linkStyle: 'Beaded Chain',
    badge: 'Trending',
    description:
      'Fine hand-assembled bead rhythm paired with signature Kerala filigree accents for bridal and occasion displays.',
    image: '/images/trend-beads.png',
    startingPrice: '₹1,620.00',
    specs: {
      purity: '22K traditional gold',
      finish: 'Traditional Kerala finish',
      moqNote: 'Made to wholesale order',
    },
  },
  {
    id: 'ppm-kh-204',
    code: 'PPM-KH-204',
    name: 'Heritage Intaglio Signet Ring',
    category: 'Rings',
    range: 'Kerala handcrafted',
    linkStyle: 'Heritage Ring',
    badge: 'New',
    description:
      'Featured bespoke showcase piece pairing traditional engraving with modern investment casting precision.',
    image: '/images/trend-chain-5adcbd.png',
    startingPrice: '₹1,850.00',
    specs: {
      purity: '22K / 18K options',
      finish: 'Hand-engraved signet',
      moqNote: 'Custom & wholesale order',
    },
  },
  {
    id: 'ppm-mm-105',
    code: 'PPM-MM-105',
    name: 'Precision Curb Link 02',
    category: 'Machine-made',
    range: 'Machine-made',
    linkStyle: 'Classic Link',
    badge: 'Bestseller',
    description:
      'Flat-bevelled curb links designed for uniform shine and effortless pairing across everyday retail collections.',
    image: '/images/chain-classic-link.png',
    startingPrice: '₹1,090.00',
    specs: {
      purity: '22K / 18K options',
      finish: 'Faceted machine polish',
      moqNote: 'Wholesale lot enquiry',
    },
  },
  {
    id: 'ppm-mm-106',
    code: 'PPM-MM-106',
    name: 'Fine Milano Box 03',
    category: 'Machine-made',
    range: 'Machine-made',
    linkStyle: 'Box Chain',
    badge: 'New',
    description:
      'Lightweight precision box chain tailored for multi-SKU showroom stockists seeking consistent gauge tolerances.',
    image: '/images/chain-box.png',
    startingPrice: '₹1,180.00',
    specs: {
      purity: '22K / 18K options',
      finish: 'Bright uniform polish',
      moqNote: 'Wholesale lot enquiry',
    },
  },
  {
    id: 'ppm-kh-205',
    code: 'PPM-KH-205',
    name: 'Kondotty Handwoven Rope',
    category: 'Kerala handcrafted',
    range: 'Kerala handcrafted',
    linkStyle: 'Rope Chain',
    badge: 'Premium',
    description:
      'Hand-joined rope chain reflecting Kondotty goldsmithing heritage with supple flexibility and rich presence.',
    image: '/images/chain-rope.png',
    startingPrice: '₹1,720.00',
    specs: {
      purity: '22K traditional gold',
      finish: 'Artisan hand-finished',
      moqNote: 'Made to wholesale order',
    },
  },
  {
    id: 'ppm-kh-206',
    code: 'PPM-KH-206',
    name: 'Artisan Temple Bead Chain',
    category: 'Kerala handcrafted',
    range: 'Kerala handcrafted',
    linkStyle: 'Pendant Chain',
    badge: 'Bestseller',
    description:
      'Traditional handcrafted chain built to complement heritage lockets and South Indian retail jewellery collections.',
    image: '/images/chain-beaded.png',
    startingPrice: '₹1,590.00',
    specs: {
      purity: '22K traditional gold',
      finish: 'Handcrafted antique-bright',
      moqNote: 'Made to wholesale order',
    },
  },
];

export const DEFAULT_ATTACHED_PRODUCT: ProductItem =
  PRODUCTS.find((p) => p.code === 'PPM-KH-204') ?? PRODUCTS[0];

export const ASSORTMENT_STYLES = [
  {
    title: 'Classic Link',
    image: '/images/chain-classic-link.png',
    style: 'Classic Link' as LinkStyle,
  },
  {
    title: 'Rope Chain',
    image: '/images/chain-rope.png',
    style: 'Rope Chain' as LinkStyle,
  },
  {
    title: 'Beaded Chain',
    image: '/images/chain-beaded.png',
    style: 'Beaded Chain' as LinkStyle,
  },
  {
    title: 'Box Chain',
    image: '/images/chain-box.png',
    style: 'Box Chain' as LinkStyle,
  },
];
