import React from 'react';
import { ShieldCheck, Truck, Clock, Sparkles, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { STORE_INFO, PRODUCTS } from '../data/landingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-right">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center font-black text-amber-400 text-sm">
                  W
                </div>
              </div>
              <span className="text-lg font-black text-white">WOW STORE | واو ستور العراق</span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-md mb-4 font-medium">
              المتجر العراقي الرائد في تقديم أحدث المنتجات الحصرية والمجربة. نلتزم بأعلى معايير المصداقية عبر توفير حق الفحص والتجربة قبل الدفع وضمان الاستبدال الفوري.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>مرخص وموثوق للتجارة الإلكترونية في جمهورية العراق 🇮🇶</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">منتجاتنا الحصرية:</h4>
            <ul className="space-y-2">
              {PRODUCTS.map((prod, idx) => (
                <li key={prod.id}>
                  <a
                    href={`#${prod.id}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{idx + 1}. {prod.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#guarantee-section" className="hover:text-amber-400 transition-colors">
                  سياسة الفحص والضمان (14 يوم)
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-amber-400 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">خدمة الزبائن والمتابعة:</h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 طيلة أيام الأسبوع</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>توصيل لباب البيت في 18 محافظة</span>
              </div>
              <a
                href={`https://wa.me/${STORE_INFO.supportWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold mt-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>دعم مباشر عبر الواتساب</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <p className="text-[11px] text-slate-500">
            جميع الحقوق محفوظة © {new Date().getFullYear()} لمتجر <strong className="text-slate-300">Wow Store</strong> — العراق.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors text-xs font-bold"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
