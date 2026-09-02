import React, { useState } from 'react';
import { ShoppingBag, Sparkles, ChevronUp, Zap } from 'lucide-react';
import { PRODUCTS } from '../data/landingData';

interface FloatingMobileBarProps {
  onOpenOrderModal: (productId?: string) => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenOrderModal }) => {
  const [selectedProd, setSelectedProd] = useState<string>(PRODUCTS[0].id);
  const current = PRODUCTS.find(p => p.id === selectedProd) || PRODUCTS[0];

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 shadow-2xl">
      <div className="flex items-center gap-2">
        
        {/* Product switch pills */}
        <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-0.5 shrink-0">
          {PRODUCTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedProd(p.id)}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-black transition-all ${
                selectedProd === p.id
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              منتج #{idx + 1}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onOpenOrderModal(current.id)}
          className="flex-1 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-between gap-1 active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="truncate">اطلب الآن (دفع عند الباب)</span>
          </div>
          <span className="bg-slate-950/20 text-slate-950 text-[11px] font-black px-1.5 py-0.5 rounded shrink-0">
            {current.discountedPrice.toLocaleString()} د.ع
          </span>
        </button>

      </div>
    </div>
  );
};
