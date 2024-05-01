import { ReactNode } from 'react';

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
