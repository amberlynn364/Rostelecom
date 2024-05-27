import { ProductCounterProps } from '@/types/goods';

const ProductCounter = ({ className, count }: ProductCounterProps) => (
  <div className={className}>
    <button className="btn-reset" />
    <span>{count}</span>
    <button className="btn-reset" />
  </div>
);

export default ProductCounter;
