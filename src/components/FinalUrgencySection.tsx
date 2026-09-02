import React from 'react';
import { Flame, ShoppingBag, ExternalLink, ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/landingData';

interface FinalUrgencySectionProps {
  onOpenOrderModal: (productId?: string) => void;
}

export const FinalUrgencySection: React.FC<FinalUrgencySectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-amber-500/5 mix-blend-overlay pointer-events-none" />
      <div className="absolute -top-24 right-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl text-center">
          
          {/* Urgency Pill */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-6">
            <Flame className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>كمية العرض المتبقية لليوم محدودة جداً!</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            لا تفوت فرصة التوفير واطلب الآن
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 mt-2">
              وادفع نقدًا عند الباب بعد الفحص والتجربة
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            اختر منتجك المفضل الآن واستفد من خصومات اليوم الحصرية وتوصيل سريع لباب بيتك في جميع محافظات العراق الـ 18.
          </p>

          {/* Dual Product Direct CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 text-right flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded">
                      المنتج #{idx + 1}
                    </span>
                    <span className="text-xs text-red-400 font-bold">
                      متبقي {product.stockLeft} قطع
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-black text-amber-400">
                      {product.discountedPrice.toLocaleString()} د.ع
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      {product.originalPrice.toLocaleString()} د.ع
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={product.taagerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>اطلب المنتج #{idx + 1} مباشرة</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenOrderModal(product.id)}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold py-2 px-3 rounded-lg transition-colors"
                  >
                    أو املأ استمارة الطلب السريع
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Footer Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-semibold border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ضمان الفحص قبل الدفع</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>شحن لـ 18 محافظة عراقية</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>ضمان استبدال فوري 14 يوم</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
