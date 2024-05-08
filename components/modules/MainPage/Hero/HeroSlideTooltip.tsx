import styles from '@/styles/main-page/index.module.scss';
import { HeroSlideTooltipProps } from '@/types/main-page';
import Image from 'next/image';

const HeroSlideTooltip = ({ title, image }: HeroSlideTooltipProps) => (
  <div className={`${styles.hero__slider__slide__popup} slide-popup`}>
    <span className={styles.hero__slider__slide__popup__arrow} />
    <Image
      className={styles.hero__slider__slide__popup}
      src={image}
      alt={title}
    />
    <p className={styles.hero__slider__slide__popup__inner}>
      <b className={styles.hero__slider__slide__popup__title}>{title}</b>
      <span className={styles.hero__slider__slide__popup__price}>760 Р</span>
    </p>
  </div>
);

export default HeroSlideTooltip;
