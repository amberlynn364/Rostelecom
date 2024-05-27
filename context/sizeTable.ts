import { createDomain } from 'effector';
import { SelectedSizes } from '@/types/common';

export const sizeTable = createDomain();

export const setSizeTableSizes = sizeTable.createEvent<SelectedSizes>();

export const $sizeTableSizes = sizeTable
  .createStore({} as SelectedSizes)
  .on(setSizeTableSizes, (_, sizes) => sizes);
