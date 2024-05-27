'use client';
import { useLang } from '@/hooks/useLang';
import styles from '@/styles/product-list-item/index.module.scss';
import { ProductInfoLabelProps } from '@/types/modules';

const ProductColor = ({ color }: ProductInfoLabelProps) => {
  const { lang, translations } = useLang();

  return (
    <span className={`${styles.product__color}`}>
      <span>{translations[lang].catalog.color}:</span>{' '}
      {(translations[lang].catalog as { [index: string]: string })[color]}
    </span>
  );
};

export default ProductColor;
