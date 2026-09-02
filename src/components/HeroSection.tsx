import React from 'react';
import { ShieldCheck, Truck, Sparkles, CheckCircle2, Star, ArrowDown, Eye, Zap, Flame } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data/landingData';
import { WowStoreLogo } from './WowStoreLogo';

interface HeroSectionProps {
  onSelectProduct: (productId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectProduct }) => {
  const scrollToProduct = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Eyebrow */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-amber-500/40 px-4 py-1.5 rounded-full text-amber-300 text-xs md:text-sm font-bold shadow-lg shadow-amber-500/5">
            <WowStoreLogo size={24} />
            <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>عروض حصرية لفترة محدودة — متجر واو ستور الرسمي في العراق 🇮🇶</span>
          </div>
        </div>

        {/* Hero Headline & Subheadline (CRO Optimized) */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-tight mb-5">
            منتجات حصرية تضمن راحتك وتوفر وقتك
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 mt-2">
              بأعلى جودة وضمان فحص حقيقي حتى باب بيتك
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            في <strong className="text-white font-bold">واو ستور (Wow Store)</strong> نوفر لك المنتجات الأصلية المجربة التي تحل مشاكلك اليومية بكل سهولة.
            <span className="text-emerald-400 font-bold block mt-2 text-base md:text-lg">
              ✨ لا تدفع ديناراً واحداً حتى يصلك المندوب وتفتح الكرتون وتفحص بنفسك!
            </span>
          </p>
        </div>

        {/* Reassurance Value Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm shadow-md">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <Eye className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 font-medium">الأمان التام</div>
              <div className="text-xs sm:text-sm font-bold text-white">افحص قبل الدفع</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm shadow-md">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 font-medium">تغطية شاملة</div>
              <div className="text-xs sm:text-sm font-bold text-white">18 محافظة عراقية</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm shadow-md">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 font-medium">ضمان ذهبي</div>
              <div className="text-xs sm:text-sm font-bold text-white">استبدال 14 يوماً</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-sm shadow-md">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
              <Star className="w-5 h-5 fill-purple-400 text-purple-400" />
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 font-medium">تقييم الزبائن</div>
              <div className="text-xs sm:text-sm font-bold text-white">4.9 / 5 (+1,400 طلب)</div>
            </div>
          </div>
        </div>

        {/* The 2 Exclusive Winning Products Showcase Quick-Selection Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-extrabold bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
              اختر المنتج واطلع على العرض الخاص
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className="group relative bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                {/* Product Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-black px-2.5 py-1 rounded-lg">
                    {product.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400">({product.reviewsCount} تقييم)</span>
                  </div>
                </div>

                {/* Product Image & Info Preview */}
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700 relative">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-1 right-1 bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded">
                      خصم {product.discountPercentage}%
                    </div>
                  </div>

                  <div className="flex-1 text-right">
                    <span className="text-[11px] font-bold text-slate-400">المنتج رقم #{idx + 1}</span>
                    <h3 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-black text-amber-400">
                        {product.discountedPrice.toLocaleString()} د.ع
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 line-through">
                        {product.originalPrice.toLocaleString()} د.ع
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Hook Point */}
                <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80 mb-4 text-right">
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    ⚡ {product.heroSubheadline}
                  </p>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => scrollToProduct(product.id)}
                    className="w-full bg-slate-800 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg"
                  >
                    <span>تفاصيل العرض والشراء المباشر</span>
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
