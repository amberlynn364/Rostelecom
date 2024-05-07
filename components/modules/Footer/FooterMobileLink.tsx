import Link from 'next/link';

interface FooterMobileLinkProps {
  text: string;
}

const FooterMobileLink = ({ text }: FooterMobileLinkProps) => (
  <div className="footer__mobile">
    <Link href="#">{text}</Link>
  </div>
);

export default FooterMobileLink;
