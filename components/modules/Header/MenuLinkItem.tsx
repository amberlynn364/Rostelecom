import { MenuLinkItemProps } from '@/types/modules';
import Link from 'next/link';

const MenuLinkItem = ({ item, handleRedirectToCatalog }: MenuLinkItemProps) => {
  const { id, href, text } = item;

  const onRedirect = () => handleRedirectToCatalog(href);
  return (
    <li key={id} className="nav-menu__accordion__item__list__item">
      <Link
        href={href}
        className="nav-menu__accordion__item__list__item__link"
        onClick={onRedirect}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuLinkItem;
