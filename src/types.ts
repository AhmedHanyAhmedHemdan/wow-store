export interface ProductBundle {
  id: string;
  quantity: number;
  title: string;
  badge?: string;
  price: number; // in Iraqi Dinars (IQD / د.ع)
  oldPrice: number;
  shipping: string;
  isPopular?: boolean;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  taagerId: string;
  taagerUrl: string;
  name: string;
  englishName: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  soldCount: number;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  stockLeft: number;
  heroHeadline: string;
  heroSubheadline: string;
  problemStatement: string;
  solutionStatement: string;
  descriptionParagraph: string;
  images: string[];
  features: ProductFeature[];
  specs: ProductSpec[];
  bundles: ProductBundle[];
  includedItems: string[];
  ctaPrimaryText: string;
  ctaSecondaryText: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  city: string;
  province: string;
  productName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'shipping' | 'payment' | 'warranty' | 'product';
}
