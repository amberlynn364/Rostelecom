'use client';

import { $catalogMenuIsOpen, closeCatalogMenu } from '@/context/modals';
import { useLang } from '@/hooks/useLang';
import { useMenuAnimation } from '@/hooks/useMenuAnimation';
import { CatalogMenuLists } from '@/types/menu';
import { useStore } from 'effector-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Header from './Header';
import { removeOverflowHiddenToBody } from '@/lib/utils/common';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import CatalogMenuButton from './CatalogMenuButton';
import CatalogMenuList from './CatalogMenuList';
import Accordion from '../Accordion/Accordion';
import Link from 'next/link';

const CatalogMenu = () => {
  const catalogMenuIsOpen = useStore($catalogMenuIsOpen);
  const [activeList, setActiveList] = useState<CatalogMenuLists | null>(null);
  const { lang, translations } = useLang();
  const { itemVariants, sideVariants, popupZIndex } = useMenuAnimation(
    2,
    catalogMenuIsOpen
  );
  const isMedia450 = useMediaQuery(450);

  const handleShowList = (listName: CatalogMenuLists | null) => {
    setActiveList(listName);
  };

  const handleCloseMenu = () => {
    removeOverflowHiddenToBody();
    closeCatalogMenu();
    handleShowList(null);
  };

  const items = [
    {
      name: translations[lang].main_menu.cloth,
      id: 1,
      items: [
        translations[lang].comparison['t-shirts'],
        translations[lang].comparison['long-sleeves'],
        translations[lang].comparison.hoodie,
        translations[lang].comparison.outerwear,
      ],
      handler: () => handleShowList(CatalogMenuLists.ClothList),
    },
    {
      name: translations[lang].main_menu.accessories,
      id: 2,
      items: [
        translations[lang].comparison.bags,
        translations[lang].comparison.headdress,
        translations[lang].comparison.umbrella,
      ],
      handler: () => handleShowList(CatalogMenuLists.AccessoriesList),
    },
    {
      name: translations[lang].main_menu.souvenirs,
      id: 3,
      items: [
        translations[lang].comparison['business-souvenirs'],
        translations[lang].comparison['promotional-souvenirs'],
      ],
      handler: () => handleShowList(CatalogMenuLists.SouvenirsList),
    },
    {
      name: translations[lang].main_menu.office,
      id: 4,
      items: [
        translations[lang].comparison.notebook,
        translations[lang].comparison.pen,
      ],
      handler: () => handleShowList(CatalogMenuLists.OfficeList),
    },
  ];

  return (
    <div className="catalog-menu" style={{ zIndex: popupZIndex }}>
      <AnimatePresence>
        {catalogMenuIsOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 'calc(100% - 48px)',
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="catalog-menu__aside"
          >
            <div className="catalog-menu__header">
              <Header />
            </div>
            <motion.div
              className="catalog-menu__inner"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <img
                className="catalog-menu__bg"
                src="/img/menu-bg-small.png"
                alt="menu background"
              />
              <motion.button
                className="btn-reset catalog-menu__close"
                variants={itemVariants}
                onClick={handleCloseMenu}
              />
              <motion.h2
                className="catalog-menu__title"
                variants={itemVariants}
              >
                {translations[lang].main_menu.catalog}
              </motion.h2>
              <ul className="list-reset catalog-menu__list">
                {items.map(({ id, name, items, handler }) => {
                  const buttonProps = (isActive: boolean) => ({
                    handler: handler as VoidFunction,
                    name,
                    isActive,
                  });

                  const isCurrentList = (
                    showList: boolean,
                    currentID: number
                  ) => showList && id === currentID;
                  return (
                    <motion.li
                      key={id}
                      variants={itemVariants}
                      className="catalog-menu__list__item"
                    >
                      {!isMedia450 && (
                        <>
                          {id === 1 && (
                            <CatalogMenuButton
                              {...buttonProps(
                                activeList === CatalogMenuLists.ClothList
                              )}
                            />
                          )}
                          {id === 2 && (
                            <CatalogMenuButton
                              {...buttonProps(
                                activeList === CatalogMenuLists.AccessoriesList
                              )}
                            />
                          )}
                          {id === 3 && (
                            <CatalogMenuButton
                              {...buttonProps(
                                activeList === CatalogMenuLists.SouvenirsList
                              )}
                            />
                          )}
                          {id === 4 && (
                            <CatalogMenuButton
                              {...buttonProps(
                                activeList === CatalogMenuLists.OfficeList
                              )}
                            />
                          )}
                        </>
                      )}
                      {!isMedia450 && (
                        <AnimatePresence>
                          {isCurrentList(
                            activeList === CatalogMenuLists.ClothList,
                            1
                          ) && <CatalogMenuList items={items} />}
                          {isCurrentList(
                            activeList === CatalogMenuLists.AccessoriesList,
                            2
                          ) && <CatalogMenuList items={items} />}
                          {isCurrentList(
                            activeList === CatalogMenuLists.SouvenirsList,
                            3
                          ) && <CatalogMenuList items={items} />}
                          {isCurrentList(
                            activeList === CatalogMenuLists.OfficeList,
                            4
                          ) && <CatalogMenuList items={items} />}
                        </AnimatePresence>
                      )}
                      {isMedia450 && (
                        <Accordion
                          title={name}
                          titleClass="btn-reset nav-menu__accordion__item__title"
                        >
                          <ul className="list-reset catalog__accordion__list">
                            {items.map((title, i) => (
                              <li
                                key={i}
                                className="catalog__accordion__list__item"
                              >
                                <Link
                                  href="/catalog"
                                  className="nav-menu__accordion__item__list__item__link"
                                >
                                  {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Accordion>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatalogMenu;
