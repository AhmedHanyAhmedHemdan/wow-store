import React from 'react';
import { Check, X, Shield, Sparkles, Award } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'فحص وتشغيل المنتج قبل دفع أي دينار',
      wowStore: 'نعم، حقك الكامل بفتح الطرد والتأكد أمام المندوب',
      others: 'ممنوع فتح الكرتون إلا بعد دفع كامل المبلغ للمندوب',
    },
    {
      feature: 'أصالة وجودة المكونات والشفرات/المحرك',
      wowStore: 'منتجات أصلية 100% مستوردة بمواصفات مطابقة للصور',
      others: 'تقليد رديء بجودة منخفضة وبطاريات تتلف بعد أيام',
    },
    {
      feature: 'سرعة التوصيل لكافة المحافظات العراقية',
      wowStore: 'بغداد 24-48 ساعة، باقي المحافظات 2-4 أيام فقط',
      others: 'تأخير يستمر لأسابيع مع مندوبين غير محترفين',
    },
    {
      feature: 'ضمان الاستبدال والاسترجاع الحقيقي',
      wowStore: 'ضمان 14 يوم واستبدال فوري عند باب بيتك',
      others: 'وعود وهمية وبلوك على الواتساب بعد البيع',
    },
    {
      feature: 'خدمة العملاء والمتابعة بعد البيع',
      wowStore: 'فريق عراقي مخصص متواجد 24/7 لحل أي استفسار',
      others: 'عدم الرد أو تجاهل الرسائل بعد الاستلام',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-amber-400 text-xs font-bold mb-3">
            <Award className="w-4 h-4" />
            <span>المقارنة الصادقة والأمان التام</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            لماذا يثق بنا أكثر من 14,000 زبون في العراق؟
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            تعرّف على الفرق بين تجربة الشراء المضمونة مع <strong className="text-white">واو ستور</strong> والمتاجر العشوائية الأخرى.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-4 sm:p-5 text-sm font-bold text-slate-300 w-2/5">
                  وجه المقارنة
                </th>
                <th className="p-4 sm:p-5 text-sm font-black text-amber-400 bg-amber-500/10 border-x border-amber-500/30 w-2/5 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>متجر واو ستور (Wow Store)</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-500 w-1/5 text-center">
                  المتاجر العادية / التقليد
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {comparisonItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-200">
                    {item.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-emerald-300 bg-amber-500/5 border-x border-amber-500/20 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item.wowStore}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-slate-400 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug text-slate-400 line-through opacity-80">{item.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
