import React, { useState } from 'react';
import { X, Sparkles, Target, Layers, FileText, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { CRO_STRATEGY_GUIDE } from '../data/landingData';
import { WowStoreLogo } from './WowStoreLogo';

interface StrategyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyGuideModal: React.FC<StrategyGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-right my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-400 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>خطة التوجيه الاستراتيجي والتحويل (CRO & Copywriting Masterplan)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              الهيكل البيعي والنصوص الإعلانية المكتوبة لمتجر Wow Store
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              دليل تفصيلي بقسم بقسم، النصوص الموجهة للسوق العراقي، توجيهات التصميم، وتوصيات أزرار الدعوة لاتخاذ إجراء (CTAs).
            </p>
          </div>
          <div className="shrink-0 hidden sm:block">
            <WowStoreLogo size={48} />
          </div>
        </div>

        <div className="space-y-6">
          
          {/* Section 1: Hero */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-amber-400 font-black text-sm mb-3">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs font-mono">1</span>
              <h4>{CRO_STRATEGY_GUIDE.hero.sectionName}</h4>
            </div>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-400 block mb-1">النص البيعي الدقيق:</span>
                <p className="p-3 bg-slate-900 rounded-xl text-slate-200 leading-relaxed border border-slate-800">
                  {CRO_STRATEGY_GUIDE.hero.copy}
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">اقتراحات التصميم والـ CRO:</span>
                <p className="text-slate-300 leading-relaxed">{CRO_STRATEGY_GUIDE.hero.design}</p>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">توصيات الـ CTA:</span>
                <p className="text-amber-300 font-semibold">{CRO_STRATEGY_GUIDE.hero.cta}</p>
              </div>
            </div>
          </div>

          {/* Section 2: Product 1 */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-amber-400 font-black text-sm">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs font-mono">2</span>
                <h4>{CRO_STRATEGY_GUIDE.product1.sectionName}</h4>
              </div>
              <a
                href={CRO_STRATEGY_GUIDE.product1.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>رابط المنتج على تاجر</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-400 block mb-1">النص البيعي الدقيق:</span>
                <p className="p-3 bg-slate-900 rounded-xl text-slate-200 leading-relaxed border border-slate-800">
                  {CRO_STRATEGY_GUIDE.product1.copy}
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">اقتراحات التصميم والـ CRO:</span>
                <p className="text-slate-300 leading-relaxed">{CRO_STRATEGY_GUIDE.product1.design}</p>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">توصيات الـ CTA:</span>
                <p className="text-amber-300 font-semibold">{CRO_STRATEGY_GUIDE.product1.cta}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Product 2 */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-amber-400 font-black text-sm">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs font-mono">3</span>
                <h4>{CRO_STRATEGY_GUIDE.product2.sectionName}</h4>
              </div>
              <a
                href={CRO_STRATEGY_GUIDE.product2.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-sky-400 hover:underline flex items-center gap-1"
              >
                <span>رابط المنتج على تاجر</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-400 block mb-1">النص البيعي الدقيق:</span>
                <p className="p-3 bg-slate-900 rounded-xl text-slate-200 leading-relaxed border border-slate-800">
                  {CRO_STRATEGY_GUIDE.product2.copy}
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">اقتراحات التصميم والـ CRO:</span>
                <p className="text-slate-300 leading-relaxed">{CRO_STRATEGY_GUIDE.product2.design}</p>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">توصيات الـ CTA:</span>
                <p className="text-sky-300 font-semibold">{CRO_STRATEGY_GUIDE.product2.cta}</p>
              </div>
            </div>
          </div>

          {/* Section 4: Trust & Conversion elements */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-amber-400 font-black text-sm mb-3">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs font-mono">4</span>
              <h4>{CRO_STRATEGY_GUIDE.trustAndFaq.sectionName}</h4>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-400 block mb-1">المحتوى وعناصر الأمان:</span>
                <p className="p-3 bg-slate-900 rounded-xl text-slate-200 leading-relaxed border border-slate-800">
                  {CRO_STRATEGY_GUIDE.trustAndFaq.copy}
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">اقتراحات التصميم والـ CRO:</span>
                <p className="text-slate-300 leading-relaxed">{CRO_STRATEGY_GUIDE.trustAndFaq.design}</p>
              </div>

              <div>
                <span className="font-bold text-slate-400 block mb-1">توصيات الـ CTA:</span>
                <p className="text-emerald-300 font-semibold">{CRO_STRATEGY_GUIDE.trustAndFaq.cta}</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
          >
            إغلاق ومتابعة المعاينة الحية للمتجر
          </button>
        </div>

      </div>
    </div>
  );
};
