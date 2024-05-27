import { AddToCartBtnProps } from '@/types/goods';
import React from 'react';

const AddToCartBtn = ({ text, className }: AddToCartBtnProps) => (
  <button className={`btn-reset ${className}`}>{text}</button>
);

export default AddToCartBtn;
