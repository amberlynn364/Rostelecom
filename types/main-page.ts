import { StaticImageData } from 'next/image';

export interface HeroSlideProps {
  id?: number;
  image: StaticImageData;
  title: string;
}

export type HeroSlideTooltipProps = HeroSlideProps;
