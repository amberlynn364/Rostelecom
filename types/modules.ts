import { ReactNode } from 'react';
import { Product } from './common';

export interface AccordionProps {
  children: ReactNode;
  title: string | JSX.Element;
  titleClass: string;
  rotateIconClass?: string;
}

export interface MenuLinkItemProps {
  item: {
    id: number;
    text: string;
    href: string;
  };
  handleRedirectToCatalog: (arg: string) => void;
}

export interface CatalogMenuButtonProps {
  name: string;
  isActive: boolean;
  handler: VoidFunction;
}

export interface ProductListItemProps {
  item: Product;
  title?: string;
}

export interface ProductLabelProps {
  isNew: boolean;
  isBestseller: boolean;
}
