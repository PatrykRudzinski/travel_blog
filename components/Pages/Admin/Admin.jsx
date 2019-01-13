import React from 'react';
import Layout from '@components/Layout';
import Link from 'next/link';
import routes from '@constants/routes';

const Admin = () => (
  <Layout>
    <p>This is the Admin page</p>
    <Link href={routes.ADMIN_NEW_POST}>
      Add new
    </Link>
  </Layout>
);

export default Admin;
