import React, { useState } from 'react';
import { 
  Star, 
  Check, 
  ShieldCheck, 
  Truck, 
  ExternalLink, 
  ShoppingBag, 
  Flame, 
  Package, 
  Zap, 
  Scissors, 
  BatteryCharging, 
  Wind, 
  Layers, 
  Cpu, 
  Feather,
  AlertCircle,
  Eye,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import { Product, ProductBundle } from '../types';

interface ProductSectionProps {
  product: Product;
  productNumber: number;
  onOpenOrderModal: (productId: string, bundleId?: string) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ 
  product, 
  productNumber,
  onOpenOrderModal 
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedBundleId, setSelectedBundleId] = useState(
    product.bundles.find(b => b.isPopular)?.id || product.bundles[0].id
  );
  const [activeTab, setActiveTab] = useState<'benefits' | 'specs' | 'box'>('benefits');

  const selectedBundle = product.bundles.find(b => b.id === selectedBundleId) || product.bundles[0];

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-amber-400" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Wind': return <Wind className="w-5 h-5 text-sky-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Feather': return <Feather className="w-5 h-5 text-sky-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const handleDirectTaagerClick = () => {
    window.open(product.taagerUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id={product.id}
      className={`py-16 md:py-24 border-b border-slate-800 ${
        productNumber % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Numbering */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-400 text-xs font-black mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>المنتج الحصري رقم #{productNumber} في واو ستور</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              {product.name}
            </h2>
            <p className="text-sm font-medium text-slate-400 mt-1">
              {product.englishName}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold text-xs">{product.rating}</span>
              <span className="text-slate-400 text-xs">({product.reviewsCount} تقييم عراقي)</span>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>تم بيع {product.soldCount}+ قطعة</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Gallery & Buying Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Left/Top: Interactive Image Gallery & Proof (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Badge & Urgency Pills */}
              <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-md text-white font-black text-xs px-3 py-1 rounded-full shadow-lg">
                وفر {product.discountPercentage}% اليوم
              </div>

              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 font-bold text-xs px-2.5 py-1 rounded-lg border border-slate-800 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                <span>متبقي {product.stockLeft} قطع فقط</span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setSelectedImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setSelectedImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Live viewers indicator */}
              <div className="absolute bottom-3 inset-x-3 bg-slate-950/85 backdrop-blur-md rounded-xl p-2 border border-slate-800 text-center text-xs text-slate-300 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>يشاهد هذا العرض حالياً <strong>34 زبون</strong> من محافظات العراق</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2.5">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx 
                      ? 'border-amber-400 shadow-md shadow-amber-500/20 scale-105' 
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`صورة ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Direct Inspection Reassurance Badge */}
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-3.5 text-right flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-emerald-300">ضمان الفحص والتجربة عند الاستلام</h4>
                <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                  افتح الطرد بنفسك أمام المندوب وتأكد من عمل المنتج وجودته قبل دفع أي دينار.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Sales Pitch, Problem/Solution, Bundles & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Hook & Pain Points Box (High CRO) */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-6 shadow-xl">
              
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-black text-amber-300 leading-snug mb-2">
                  {product.heroHeadline}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {product.heroSubheadline}
                </p>
              </div>

              {/* Problem vs Solution Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800/80">
                <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-3 text-right">
                  <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold mb-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>المشكلة الشائعة:</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {product.problemStatement}
                  </p>
                </div>

                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-3 text-right">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>الحل مع واو ستور:</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {product.solutionStatement}
                  </p>
                </div>
              </div>

            </div>

            {/* Interactive Package / Bundle Selector (Increases AOV) */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase text-slate-400 tracking-wider">
                  اختر الباقة المناسبة لك (عروض التوفير):
                </span>
                <span className="text-xs text-amber-400 font-bold">
                  ⚡ خصومات تصل إلى 45%
                </span>
              </div>

              <div className="space-y-2.5">
                {product.bundles.map((bundle) => {
                  const isSelected = selectedBundleId === bundle.id;
                  return (
                    <div
                      key={bundle.id}
                      onClick={() => setSelectedBundleId(bundle.id)}
                      className={`relative cursor-pointer rounded-xl p-3.5 sm:p-4 border-2 transition-all duration-200 text-right flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 shadow-md shadow-amber-500/10'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {/* Popular Badge */}
                      {bundle.badge && (
                        <span className="absolute -top-2.5 left-4 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                          {bundle.badge}
                        </span>
                      )}

                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected
                              ? 'border-amber-400 bg-amber-400 text-slate-950'
                              : 'border-slate-600'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>

                        <div>
                          <div className="text-sm font-black text-white">{bundle.title}</div>
                          <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                            <Truck className="w-3 h-3 text-slate-400" />
                            <span>{bundle.shipping}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-left shrink-0">
                        <div className="text-base sm:text-lg font-black text-amber-400">
                          {bundle.price.toLocaleString()} د.ع
                        </div>
                        <div className="text-xs text-slate-500 line-through">
                          {bundle.oldPrice.toLocaleString()} د.ع
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Conversion CTA Action Area */}
            <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl">
              
              {/* Selected summary price */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-400">المبلغ الإجمالي للباقة المختارة:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">
                    {selectedBundle.price.toLocaleString()} د.ع
                  </span>
                  <span className="text-xs text-emerald-400 font-bold">
                    (الدفع نقدًا عند الاستلام)
                  </span>
                </div>
              </div>

              {/* Primary & Secondary CTA Buttons */}
              <div className="space-y-3">
                {/* Primary Button: Direct Taager Checkout Link */}
                <a
                  href={product.taagerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base sm:text-lg py-4 px-6 rounded-xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                  <span>{product.ctaPrimaryText}</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>

                {/* Secondary Button: Interactive EasyOrder Form */}
                <button
                  onClick={() => onOpenOrderModal(product.id, selectedBundleId)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>أو املأ استمارة الطلب السريع (EasyOrder) في ثوانٍ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust micro-copy under buttons */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-center text-[11px] text-slate-400 font-medium">
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ضمان 14 يوم</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>شحن لكل العراق</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>معاينة قبل الدفع</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Detailed Tabs: Core Benefits / Specs / In the Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
          
          {/* Tab buttons */}
          <div className="flex border-b border-slate-800 gap-4 mb-6">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'benefits'
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              الميزات والفوائد الأساسية
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'specs'
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              المواصفات التقنية الدقيقة
            </button>
            <button
              onClick={() => setActiveTab('box')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'box'
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              محتويات الصندوق الأصلي ({product.includedItems.length} قطع)
            </button>
          </div>

          {/* Tab 1: Benefits */}
          {activeTab === 'benefits' && (
            <div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                {product.descriptionParagraph}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-right">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-3 border border-slate-800">
                      {getFeatureIcon(feat.icon)}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Specs */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 flex justify-between items-center">
                  <span className="text-xs text-slate-400">{spec.label}:</span>
                  <span className="text-xs font-bold text-amber-300">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Package Contents */}
          {activeTab === 'box' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.includedItems.map((item, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-right">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
