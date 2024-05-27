'use client';

import { loadOneProductFx } from '@/api/goods';
import { getBestsellerProductsFx, getNewProductsFx } from '@/api/main-page';
import { Product } from '@/types/common';
import { LoadOneProductFx } from '@/types/goods';
import { createDomain, Effect, sample } from 'effector';
import { createGate, Gate } from 'effector-react';

const goods = createDomain();

export const MainPageGate = createGate();

export const setCurrentProduct = goods.createEvent<Product>();
export const loadOneProduct = goods.createEvent<LoadOneProductFx>();

const goodsStoreInstance = (effect: Effect<void, [], Error>) =>
  goods
    .createStore([])
    .on(effect.done, (_, { result }) => result)
    .on(effect.fail, (_, { error }) => console.log(error.message));

const goodsSampleInstance = (
  effect: Effect<void, [], Error>,
  gate: Gate<unknown>
) =>
  sample({
    clock: gate.open,
    target: effect,
  });

export const $newProducts = goodsStoreInstance(getNewProductsFx);
export const $bestsellerProducts = goodsStoreInstance(getBestsellerProductsFx);

goodsSampleInstance(getNewProductsFx, MainPageGate);
goodsSampleInstance(getBestsellerProductsFx, MainPageGate);

export const $currentProduct = goods
  .createStore<Product>({} as Product)
  .on(setCurrentProduct, (_, product) => product)
  .on(loadOneProductFx.done, (_, { result }) => result?.productItem);

sample({
  clock: loadOneProduct,
  to: loadOneProductFx,
});
