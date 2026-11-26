import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from '../data/catalog';
import { useEnquiry } from '../context/EnquiryContext';

interface ProductCardProps {
  product: ProductItem;
  variant?: 'catalog' | 'featured';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'catalog' }) => {
  const navigate = useNavigate();
  const { setSelectedProduct, setQuickViewProduct } = useEnquiry();

  const handleEnquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProduct(product);
    navigate('/enquiry');
  };

  if (variant === 'featured') {
    return (
      <article
        onClick={() => {
          setSelectedProduct(product);
          navigate('/enquiry');
        }}
        className="group cursor-pointer flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1"
      >
        <div className="relative flex h-[258px] items-center justify-center overflow-hidden rounded-[8px] border border-black/8 bg-white p-6 transition-shadow duration-200 group-hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)]">
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-[8px] bg-[#244218]/12 px-2.5 py-1 text-[12px] font-semibold text-[#244218]">
              {product.badge}
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="h-[170px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-[#244218] px-3 py-1 text-[11px] font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Enquire →
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[13px] font-medium text-[#244218]">{product.badge ?? product.range}</span>
          <h4 className="text-[18px] font-bold tracking-[-0.01em] text-[#244218] group-hover:underline">
            {product.name}
          </h4>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => setQuickViewProduct(product)}
      className="group cursor-pointer flex flex-col justify-between rounded-[14px] border border-black/8 bg-white p-3.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex rounded-[8px] bg-[#244218]/12 px-2.5 py-1 text-[13px] font-semibold text-[#244218]">
            {product.badge ?? 'Featured'}
          </span>
          <span className="text-[11px] font-medium text-[#777777]">{product.code}</span>
        </div>

        <div className="my-3 flex h-[150px] items-center justify-center overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[140px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[13px] font-medium text-[#4d4d4d]">{product.range}</span>
          <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#244218]">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-[13px] font-medium leading-snug text-[#666666]">
            {product.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2.5">
        <button
          type="button"
          onClick={handleEnquire}
          className="h-10 flex-1 rounded-full bg-[#244218] px-4 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#1d3513]"
        >
          Enquire
        </button>
      </div>
    </article>
  );
};
