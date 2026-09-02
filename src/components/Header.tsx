import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, Clock, Sparkles, MessageCircle, ShoppingBag, ArrowDown } from 'lucide-react';
import { STORE_INFO, PRODUCTS } from '../data/landingData';

interface HeaderProps {
  onOpenOrderModal: (productId?: string) => void;
  onOpenStrategyGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal, onOpenStrategyGuide }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (n: number) => n.toString().padStart(2, '0');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-xl">
      {/* Top Urgency & Trust Notification Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-3 py-2 text-xs md:text-sm font-bold border-b border-amber-400/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 text-center">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="bg-slate-950 text-amber-400 px-2 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400 animate-spin" /> عرض اليوم الخاص
            </span>
            <span className="text-slate-950 font-extrabold">
              توصيل لجميع محافظات العراق 🚚 | الدفع عند الاستلام مع حق الفحص والتجربة قبل الدفع ✅
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-slate-950/15 px-3 py-0.5 rounded-full backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-slate-950" />
            <span className="text-slate-900 text-xs font-bold">ينتهي العرض المخفض خلال:</span>
            <div className="flex items-center gap-1 font-mono font-black text-slate-950 text-xs">
              <span className="bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded">{formatNumber(timeLeft.hours)}</span>:
              <span className="bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded">{formatNumber(timeLeft.minutes)}</span>:
              <span className="bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded">{formatNumber(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-amber-400 text-lg">
                  W
                </div>
              </div>
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black text-white tracking-wide">WOW STORE</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-bold">عراق 🇮🇶</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">واو ستور — الجودة والضمان الحقيقي</span>
              </div>
            </a>
          </div>

          {/* Nav quick anchor links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
            <button 
              onClick={() => scrollToSection('product-1')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <span>1. ماكينة التحديد Ultra Pro</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 rounded">24 ألف د.ع</span>
            </button>
            <button 
              onClick={() => scrollToSection('product-2')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <span>2. مكنسة ومنفاخ Turbo Jet 3in1</span>
              <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 rounded">29 ألف د.ع</span>
            </button>
            <button 
              onClick={() => scrollToSection('guarantee-section')}
              className="hover:text-amber-400 transition-colors"
            >
              الضمان والفحص
            </button>
            <button 
              onClick={() => scrollToSection('reviews-section')}
              className="hover:text-amber-400 transition-colors"
            >
              آراء الزبائن
            </button>
            <button 
              onClick={() => scrollToSection('faq-section')}
              className="hover:text-amber-400 transition-colors"
            >
              الأسئلة الشائعة
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenStrategyGuide}
              className="hidden sm:flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-3 py-2 rounded-lg font-bold transition-colors"
              title="دليل استراتيجية التحويل والنصوص البيعية"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>دليل الـ CRO والنسخ</span>
            </button>

            <button
              onClick={() => onOpenOrderModal()}
              className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs md:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>اطلب الآن (الدفع عند الاستلام)</span>
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};
