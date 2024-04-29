import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => (
  <Link className="logo" href="/">
    <Image
      className="logo__img"
      src="/img/logo.svg"
      alt="Rostelecom logo"
      width={197}
      height={50}
    />
  </Link>
);

export default Logo;
