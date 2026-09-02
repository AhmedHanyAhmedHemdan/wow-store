import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Sparkles } from 'lucide-react';
import { FAQS } from '../data/landingData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-slate-900/90 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 px-3.5 py-1.5 rounded-full text-sky-400 text-xs font-bold mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>إجابات واضحة وشفافة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            الأسئلة الشائعة التي يطرحها زبائننا
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            كل ما تحتاج لمعرفته حول الشحن، الدفع عند الاستلام، والضمان قبل تأكيد طلبك.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950 border-amber-500/40 shadow-lg'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 text-xs flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>

                  <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 shrink-0 border border-slate-800">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 bg-slate-950/40">
                    <p className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 bg-slate-950 border border-slate-800 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-sm font-bold text-white">هل لديك استفسار آخر لم تجد إجابته هنا؟</h4>
            <p className="text-xs text-slate-400 mt-0.5">فريق خدمة العملاء جاهز للإجابة عليك فوراً عبر الواتساب</p>
          </div>
          <a
            href="https://wa.me/9647700000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%88%D8%A7%D9%88%20%D8%B3%D8%AA%D9%88%D8%B1%D8%8C%20%D8%B9%D9%86%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0 flex items-center gap-2 shadow-lg shadow-emerald-600/20"
          >
            <span>محادثة واتساب مباشرة</span>
          </a>
        </div>

      </div>
    </section>
  );
};
