import { CatalogMenuButtonProps } from '@/types/modules';

const CatalogMenuButton = ({
  name,
  isActive,
  handler,
}: CatalogMenuButtonProps) => (
  <button
    className="btn-reset catalog-menu__list__item__btn"
    onClick={handler}
    style={{ color: isActive ? '#e8e93a' : '#777c85' }}
  >
    {name}
  </button>
);

export default CatalogMenuButton;
