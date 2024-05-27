import { CustomArrowProps } from 'react-slick';

export interface ProductSubtitleProps {
  subtitleClassName?: string;
  subtitleRectClassName?: string;
}

export interface ProductItemActionBtnProps {
  text: string;
  iconClass: string;
  spinner?: boolean;
  callback?: VoidFunction;
  withTooltip?: boolean;
  marginBottom?: number;
}

export interface ProductAvailableProps {
  vendorCode: string;
  inStock: number;
}

export interface QuickViewModalSliderArrowProps extends CustomArrowProps {
  directionClassName: string;
}
