'use client';
import BestsellerGoods from '@/components/modules/MainPage/BestsellerGoods';
import BrandLife from '@/components/modules/MainPage/BrandLife';
import Categories from '@/components/modules/MainPage/Categories/Categories';
import Hero from '@/components/modules/MainPage/Hero/Hero';
import NewGoods from '@/components/modules/MainPage/NewGood';
import { MainPageGate } from '@/context/goods';
import { useGate } from 'effector-react';
import React from 'react';

const MainPage = () => {
  useGate(MainPageGate);
  return (
    <main>
      <Hero />
      <Categories />
      <NewGoods />
      <BestsellerGoods />
      <BrandLife />
    </main>
  );
};

export default MainPage;
