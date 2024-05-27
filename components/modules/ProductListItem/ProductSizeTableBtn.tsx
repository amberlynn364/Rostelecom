'use client';
import { useUnit } from 'effector-react';
import { showSizeTable, $showQuickModal } from '@/context/modals';
import { addOverflowHiddenToBody } from '@/lib/utils/common';
import { useLang } from '@/hooks/useLang';
import { setSizeTableSizes } from '@/context/sizeTable';
import { SelectedSizes } from '@/types/common';

const ProductSizeTableBtn = ({ sizes, type, className }: SelectedSizes) => {
  const { lang, translations } = useLang();
  const showQuickViewModal = useUnit($showQuickModal);

  const handleShowSizeTable = () => {
    if (!showQuickViewModal) {
      addOverflowHiddenToBody();
    }

    setSizeTableSizes({ sizes, type });
    showSizeTable();
  };

  return (
    <button className={`btn-reset ${className}`} onClick={handleShowSizeTable}>
      {translations[lang].product.size_table}
    </button>
  );
};

export default ProductSizeTableBtn;
