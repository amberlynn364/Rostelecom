'use client';

import { ReactNode } from 'react';
import Layout from './Layout';
import { useUnit } from 'effector-react';
import { $showQuickModal, closeQuickViewModal } from '@/context/modals';
import { removeOverflowHiddenToBody } from '@/lib/utils/common';

interface PagesLayoutProps {
  children: ReactNode;
}

const PagesLayout = ({ children }: PagesLayoutProps) => {
  const showQuickViewModal = useUnit($showQuickModal);

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenToBody();
    closeQuickViewModal();
  };
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
      </body>
    </html>
  );
};

export default PagesLayout;
