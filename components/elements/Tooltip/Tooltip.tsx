import styles from '@/styles/tooltip/index.module.scss';

interface TooltipProps {
  text: string;
}

const Tooltip = ({ text }: TooltipProps) => (
  <div className={styles.tooltip__text}>{text}</div>
);

export default Tooltip;
