import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  MessageCircle,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { PRODUCTS, IRAQI_PROVINCES, STORE_INFO } from '../data/landingData';
import { WowStoreLogo } from './WowStoreLogo';

interface EasyOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: string;
  initialBundleId?: string;
}

export const EasyOrderModal: React.FC<EasyOrderModalProps> = ({
  isOpen,
  onClose,
  initialProductId,
  initialBundleId,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProductId || PRODUCTS[0].id
  );
  const [selectedBundleId, setSelectedBundleId] = useState<string>(
    initialBundleId || PRODUCTS[0].bundles[0].id
  );

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProvinceId, setSelectedProvinceId] = useState('baghdad');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
      const prod = PRODUCTS.find(p => p.id === initialProductId);
      if (prod) {
        setSelectedBundleId(initialBundleId || prod.bundles[0].id);
      }
    }
  }, [initialProductId, initialBundleId]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  const currentBundle = currentProduct.bundles.find(b => b.id === selectedBundleId) || currentProduct.bundles[0];
  const currentProvince = IRAQI_PROVINCES.find(p => p.id === selectedProvinceId) || IRAQI_PROVINCES[0];

  const shippingCost = currentBundle.shipping.includes('مجاني') ? 0 : currentProvince.shippingCost;
  const totalPrice = currentBundle.price + shippingCost;

  const handleProductChange = (prodId: string) => {
    setSelectedProductId(prodId);
    const prod = PRODUCTS.find(p => p.id === prodId);
    if (prod) {
      setSelectedBundleId(prod.bundles[0].id);
    }
  };

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('يرجى إدخال اسمك الكريم');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('يرجى إدخال رقم هاتف عراقي صحيح للتواصل وتأكيد الشحن (مثال: 0770XXXXXXX)');
      return;
    }
    if (!address.trim()) {
      setErrorMsg('يرجى كتابة المنطقة أو أقرب نقطة دالة لتسهيل وصول المندوب');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const getWhatsAppOrderLink = () => {
    const text = encodeURIComponent(
      `مرحباً واو ستور 🇮🇶\nأود تأكيد طلب:\n- المنتج: ${currentProduct.name}\n- الباقة: ${currentBundle.title}\n- السعر: ${totalPrice.toLocaleString()} د.ع\n- الاسم: ${fullName}\n- المحافظة: ${currentProvince.name}\n- العنوان: ${address}\n- رقم الهاتف: ${phone}\n(الدفع عند الاستلام بعد الفحص)`
    );
    return `https://wa.me/${STORE_INFO.supportWhatsApp}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl text-right my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-8">
            <div className="flex justify-center mb-3">
              <WowStoreLogo size={56} />
            </div>
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white mb-2">تم تسجيل طلبك بنجاح! 🎉</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed max-w-md mx-auto">
              شكراً لاختيارك <strong className="text-amber-400">واو ستور</strong>. سيتصل بك فريق خدمة العملاء خلال ساعات قليلة لتأكيد العنوان وشحن طلبك لباب بيتك.
            </p>

            {/* Order Summary Box */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-right mb-6 text-xs space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>الاسم:</span>
                <span className="text-white font-bold">{fullName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>رقم الهاتف:</span>
                <span className="text-white font-bold">{phone}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>المحافظة:</span>
                <span className="text-white font-bold">{currentProvince.name}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>المنتج:</span>
                <span className="text-amber-400 font-bold">{currentProduct.name}</span>
              </div>
              <div className="flex justify-between text-slate-400 border-t border-slate-800 pt-2 text-sm font-black">
                <span className="text-white">المبلغ عند الاستلام:</span>
                <span className="text-amber-400">{totalPrice.toLocaleString()} د.ع</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تأكيد فوري ومباشر عبر الواتساب</span>
              </a>

              <a
                href={currentProduct.taagerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <span>فتح صفحة المنتج على تاجر (Taager)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white pt-2 font-medium"
              >
                العودة للمتجر
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div>
            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-500/20 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>استمارة EasyOrder للطلب السريع والدفع عند الاستلام</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  تأكيد طلبك مع واو ستور 🇮🇶
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  ادخل معلوماتك البسيطة لتأكيد الحجز، ولن تدفع أي دينار إلا بعد استلام وفحص المنتج.
                </p>
              </div>
              <div className="hidden sm:block shrink-0">
                <WowStoreLogo size={52} />
              </div>
            </div>

            <form onSubmit={validateAndSubmit} className="space-y-4">
              
              {/* Product Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  1. اختر المنتج المطلوب:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PRODUCTS.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleProductChange(p.id)}
                      className={`p-3 rounded-xl border-2 text-right transition-all flex flex-col justify-between ${
                        selectedProductId === p.id
                          ? 'border-amber-400 bg-amber-500/10'
                          : 'border-slate-800 bg-slate-950 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <span className="text-[11px] font-bold text-white line-clamp-1">{p.name}</span>
                      <span className="text-xs font-black text-amber-400 mt-1">{p.discountedPrice.toLocaleString()} د.ع</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bundle Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  2. اختر الباقة والتوفير:
                </label>
                <select
                  value={selectedBundleId}
                  onChange={(e) => setSelectedBundleId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  {currentProduct.bundles.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.title} — {b.price.toLocaleString()} د.ع
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  3. الاسم الكامل الثلاثي: <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="مثال: أحمد جاسم الشمري"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  4. رقم الهاتف العراقي: <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="07XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  dir="ltr"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 text-right"
                  required
                />
                <span className="text-[10px] text-slate-400 block mt-1">
                  سنتصل بهذا الرقم للتأكيد قبل إرسال المندوب
                </span>
              </div>

              {/* Governorate Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  5. المحافظة: <span className="text-red-400">*</span>
                </label>
                <select
                  value={selectedProvinceId}
                  onChange={(e) => setSelectedProvinceId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  {IRAQI_PROVINCES.map((prov) => (
                    <option key={prov.id} value={prov.id}>
                      {prov.name} (مدة التوصيل: {prov.deliveryTime})
                    </option>
                  ))}
                </select>
              </div>

              {/* Detailed Address */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  6. العنوان بالتفصيل وأقرب نقطة دالة: <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="المنطقة، الشارع، قرب جامع أو مدرسة..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              {/* Error Alert */}
              {errorMsg && (
                <div className="bg-red-950/40 border border-red-500/40 text-red-300 p-2.5 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Price Calculation Summary */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>سعر الباقة:</span>
                  <span className="text-white font-bold">{currentBundle.price.toLocaleString()} د.ع</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>أجور التوصيل ({currentProvince.name.split(' ')[0]}):</span>
                  <span className={shippingCost === 0 ? 'text-emerald-400 font-bold' : 'text-white'}>
                    {shippingCost === 0 ? 'مجاني 🎉' : `${shippingCost.toLocaleString()} د.ع`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black border-t border-slate-800 pt-2">
                  <span className="text-white">المجموع الإجمالي عند الاستلام:</span>
                  <span className="text-amber-400 text-base">{totalPrice.toLocaleString()} د.ع</span>
                </div>
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>تأكيد الطلب الآن (الدفع عند الاستلام)</span>
              </button>

              {/* Direct Link Alternative */}
              <div className="text-center pt-1">
                <a
                  href={currentProduct.taagerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>أو اطلب مباشرة عبر صفحة المنتج على تاجر (Taager)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
