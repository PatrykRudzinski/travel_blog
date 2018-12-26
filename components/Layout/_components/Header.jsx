import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderAnchor = styled.a`
    margin: 20px;
    font-size: 1.5rem;
    color: tomato;
    text-decoration: none;
`;

const Header = () => (
  <div>
    <Link href="/">
      <HeaderAnchor>Home</HeaderAnchor>
    </Link>
    <Link href="/articles">
      <HeaderAnchor>Articles</HeaderAnchor>
    </Link>
    <Link href="/about">
      <HeaderAnchor>About</HeaderAnchor>
    </Link>
    <Link href="/contact">
      <HeaderAnchor>Contact</HeaderAnchor>
    </Link>
  </div>
);

export default Header;
