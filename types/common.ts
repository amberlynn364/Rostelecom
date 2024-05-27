export interface Product {
  _id: string;
  type: string;
  category: string;
  collection: string;
  price: number;
  name: string;
  description: string;
  characteristics: { [index: string]: string };
  images: string[];
  vendorCode: string;
  inStock: string;
  isBestseller: boolean;
  isNew: boolean;
  sizes: Sizes;
  popularity: number;
  errorMessage?: string;
}

export interface Sizes {
  s: boolean;
  l: boolean;
  m: boolean;
  xl: boolean;
  xxl: boolean;
}

export interface SelectedSizes {
  sizes: Sizes;
  type: string;
  className?: string;
}
