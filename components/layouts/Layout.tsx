import { ReactNode } from 'react';
import Header from '../modules/Header/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
