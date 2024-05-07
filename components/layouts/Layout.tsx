'use client';

import { ReactNode } from 'react';
import Header from '../modules/Header/Header';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import MobileNavBar from '../modules/MobileNavBar/MobileNavBar';
import { AnimatePresence, motion } from 'framer-motion';
import SearchModal from '../modules/Header/SearchModal';
import { useUnit } from 'effector-react';
import { $searchModal } from '@/context/modals';
import { handleCloseSearchModal } from '@/lib/utils/common';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMedia800 = useMediaQuery(800);
  const searchModal = useUnit($searchModal);
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavBar />}
      <AnimatePresence>
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchModal />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
        onClick={handleCloseSearchModal}
      />
    </>
  );
};

export default Layout;
