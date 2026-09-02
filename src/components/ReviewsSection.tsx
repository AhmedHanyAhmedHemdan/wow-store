import React from 'react';
import { Star, CheckCircle2, MessageSquareQuote, MapPin, ThumbsUp } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/landingData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews-section" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-amber-400 text-xs font-bold mb-3">
            <MessageSquareQuote className="w-4 h-4" />
            <span>تجارب حقيقية وموثقة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            ماذا يقول عملاؤنا في بغداد والمحافظات؟
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            آراء زبائننا الكرام بعد استلام وفحص المنتجات والتأكد من جودتها العالية.
          </p>
        </div>

        {/* Rating Overview Pill Strip */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 max-w-3xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-around gap-6 text-center shadow-xl">
          <div>
            <div className="text-4xl font-black text-amber-400 mb-1">4.9 / 5</div>
            <div className="flex justify-center text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-400 font-medium">مبني على +1,470 تقييم مؤكد</span>
          </div>

          <div className="h-10 w-px bg-slate-800 hidden sm:block" />

          <div>
            <div className="text-2xl font-black text-emerald-400 mb-1">98.6%</div>
            <span className="text-xs text-slate-300 font-bold block">نسبة رضا الزبائن</span>
            <span className="text-[11px] text-slate-500">وفقاً لاستطلاعات ما بعد الاستلام</span>
          </div>

          <div className="h-10 w-px bg-slate-800 hidden sm:block" />

          <div>
            <div className="text-2xl font-black text-sky-400 mb-1">100%</div>
            <span className="text-xs text-slate-300 font-bold block">فحص قبل الدفع</span>
            <span className="text-[11px] text-slate-500">جميع الطلبات مفحوصة عند الباب</span>
          </div>
        </div>

        {/* Customer Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 text-right flex flex-col justify-between"
            >
              <div>
                {/* User Info Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{review.name}</span>
                        {review.verified && (
                          <span className="text-emerald-400 inline-flex items-center text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3 mr-0.5" /> مشترٍ موثق
                          </span>
                        )}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{review.city} — {review.province}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-1">{review.date}</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 mb-3">
                  "{review.comment}"
                </p>
              </div>

              {/* Tagged Product */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
                <span>المنتج المطلوب: <strong className="text-amber-400/90">{review.productName}</strong></span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <ThumbsUp className="w-3 h-3" /> تجربة ممتازة
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
