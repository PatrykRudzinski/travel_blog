import React from 'react';
import Layout from '@components/Layout';
import Link from 'next/link';
import routes from '@constants/routes';

const Admin = () => (
  <Layout>
    <p>This is the Admin page</p>
    <Link href={routes.ADMIN_EDIT_POST}>
      Add new POST 
    </Link>
    (ADMIN should be SPA!!!)
  </Layout>
);

export default Admin;
