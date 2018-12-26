import React from 'react';
import { Header, Footer } from './_components';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
