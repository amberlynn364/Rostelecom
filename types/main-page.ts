import { StaticImageData } from 'next/image';
import { Product } from './common';

export interface HeroSlideProps {
  id?: number;
  image: StaticImageData;
  title: string;
}

export type HeroSlideTooltipProps = HeroSlideProps;

export interface MainPageSectionProps {
  title: string;
  goods: Product[];
  spinner: boolean;
}
