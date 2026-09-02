import React from 'react';
import { 
  PackageCheck, 
  Truck, 
  ShieldAlert, 
  Headphones, 
  PhoneCall, 
  CheckCircle2, 
  CreditCard,
  Eye,
  Sparkles
} from 'lucide-react';
import { TRUST_POINTS, IRAQI_PROVINCES } from '../data/landingData';

export const TrustGuaranteeSection: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'اختر منتجك والباقة المناسبة',
      description: 'اضغط على زر الشراء أو املأ الاستمارة باسمك ورقم هاتفك ومحافظتك.',
    },
    {
      stepNumber: '02',
      title: 'اتصال هاتفي سريع لتأكيد الطلب',
      description: 'يتصل بك فريق خدمة العملاء خلال ساعات لتأكيد العنوان والتفاصيل بدقة.',
    },
    {
      stepNumber: '03',
      title: 'شحن سريع حتى باب بيتك',
      description: 'يصلك مندوب التوصيل المحترف بسرعة إلى أي مكان في محافظتك.',
    },
    {
      stepNumber: '04',
      title: 'افحص، جرّب، ثم ادفع نقدًا',
      description: 'افتح الكرتون وافحص المنتج بنفسك؛ وعندما تطمئن تماماً ادفع للمندوب.',
    },
  ];

  return (
    <section id="guarantee-section" className="py-16 md:py-24 bg-slate-900/80 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-bold mb-3">
            <PackageCheck className="w-4 h-4" />
            <span>تسوق بدون أي مخاطرة أو قلق</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            كيف تتم عملية الطلب والاستلام مع واو ستور؟
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            4 خطوات بسيطة تضمن لك الحصول على طلبك الأصلي بكل راحة وأمان وأنت جالس في بيتك.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative hover:border-amber-500/40 transition-colors group text-right flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-amber-400/30 group-hover:text-amber-400 transition-colors font-mono">
                    {step.stepNumber}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-amber-400 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                <span>الخطوة #{idx + 1}</span>
                <span className="text-emerald-400">مضمونة 100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {TRUST_POINTS.map((point, idx) => (
            <div key={idx} className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 text-right flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
                  {idx === 0 && <Eye className="w-6 h-6" />}
                  {idx === 1 && <Truck className="w-6 h-6" />}
                  {idx === 2 && <ShieldAlert className="w-6 h-6" />}
                  {idx === 3 && <Headphones className="w-6 h-6" />}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{point.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Iraqi Governorate Shipping Coverage Map/Ticker */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold text-slate-400">نصلك في جميع محافظات العراق:</span>
            {IRAQI_PROVINCES.slice(0, 10).map((prov) => (
              <span key={prov.id} className="text-[11px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded-md font-medium">
                {prov.name.split(' ')[0]}
              </span>
            ))}
            <span className="text-[11px] text-amber-400 font-bold px-2">+ جميع الأقضية والنواحي</span>
          </div>

          <p className="text-xs text-slate-400">
            بغداد (24-48 ساعة) • باقي المحافظات (2-4 أيام) • الدفع عند الاستلام بعد الفحص
          </p>
        </div>

      </div>
    </section>
  );
};
