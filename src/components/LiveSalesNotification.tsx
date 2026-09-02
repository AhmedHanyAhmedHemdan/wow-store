import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle2, X } from 'lucide-react';
import { PRODUCTS } from '../data/landingData';

const RECENT_ORDERS = [
  { name: 'حيدر ع.', city: 'بغداد - المنصور', product: 'ماكينة الحلاقة والتحديد Ultra Pro T9', time: 'منذ 3 دقائق' },
  { name: 'سجاد ك.', city: 'البصرة - العشار', product: 'المكنسة ومنفاخ الهواء 3 في 1 Turbo Jet', time: 'منذ 7 دقائق' },
  { name: 'محمد خ.', city: 'أربيل - الإسكان', product: 'ماكينة الحلاقة والتحديد Ultra Pro T9 (قطعتين)', time: 'منذ 11 دقيقة' },
  { name: 'علي ر.', city: 'النجف الأشرف - الكوفة', product: 'المكنسة ومنفاخ الهواء 3 في 1 Turbo Jet', time: 'منذ 15 دقيقة' },
  { name: 'حسين م.', city: 'كربلاء المقدسة - حي الحسين', product: 'ماكينة الحلاقة والتحديد Ultra Pro T9', time: 'منذ 19 دقيقة' },
  { name: 'أحمد ف.', city: 'نينوى - الموصل الجديدة', product: 'المكنسة ومنفاخ الهواء 3 في 1 (قطعتين)', time: 'منذ 24 دقيقة' },
];

export const LiveSalesNotification: React.FC = () => {
  const [currentOrderIndex, setCurrentOrderIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentOrderIndex((prev) => (prev + 1) % RECENT_ORDERS.length);
        setIsVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const order = RECENT_ORDERS[currentOrderIndex];

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-4 z-40 max-w-xs sm:max-w-sm bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md text-right flex items-center gap-3 animate-fade-in transition-all">
      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
        <ShoppingBag className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1">
          <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> طلب جديد تم تأكيده
          </span>
          <span className="text-[10px] text-slate-500">{order.time}</span>
        </div>
        <p className="text-xs font-bold text-white truncate mt-0.5">
          {order.name} ({order.city})
        </p>
        <p className="text-[11px] text-amber-400 font-medium truncate">
          {order.product}
        </p>
      </div>

      <button
        onClick={() => setIsDismissed(true)}
        className="text-slate-500 hover:text-slate-300 p-1 rounded-lg"
        title="إغلاق"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
