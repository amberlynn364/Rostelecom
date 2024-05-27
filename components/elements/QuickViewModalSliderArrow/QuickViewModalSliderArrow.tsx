import styles from '@/styles/quick-view-modal/index.module.scss';
import { QuickViewModalSliderArrowProps } from '@/types/elements';

const QuickViewModalSliderArrow = (props: QuickViewModalSliderArrowProps) => (
  <button
    className={`btn-reset ${styles.modal__left__slider__slide__arrow} ${props.directionClassName}`}
    onClick={props.onClick}
  />
);

export default QuickViewModalSliderArrow;
