'use client';

import { ReactNode } from 'react';
import Layout from './Layout';
import { useUnit } from 'effector-react';
import {
  $showQuickModal,
  $showSizeTable,
  closeQuickViewModal,
} from '@/context/modals';
import {
  closeSizeTableByCheck,
  removeOverflowHiddenToBody,
} from '@/lib/utils/common';

interface PagesLayoutProps {
  children: ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  const showQuickViewModal = useUnit($showQuickModal);
  const showSizeTable = useUnit($showSizeTable);

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenToBody();
    closeQuickViewModal();
  };

  const handleCloseSizeTable = () => closeSizeTableByCheck(showSizeTable);
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <div
          className={`quick-view-modal-overlay ${
            showQuickViewModal ? 'overlay-active' : ''
          }`}
          onClick={handleCloseQuickViewModal}
        />
        <div
          className={`size-table-overlay ${
            showSizeTable ? 'overlay-active' : ''
          }`}
          onClick={handleCloseSizeTable}
        />
      </body>
    </html>
  );
};

export default PagesLayout;
