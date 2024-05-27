export interface LoadOneProductFx {
  productId: string;
  category: string;
}

export interface ProductSizesItemProps {
  currentSize: [string, boolean];
  selectedSize: string;
  setSelectedSize: (arg0: string) => void;
  currentCartItems: [];
}

export interface ProductCounterProps {
  className: string;
  count: number;
}

export interface AddToCartBtnProps {
  text: string;
  className?: string;
}
