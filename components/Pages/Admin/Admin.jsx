import React from 'react';
import { LayoutAdmin } from '@components/Layout';
import { EditArticleContent, EditArticleGeneral } from '@components/Forms';
import { Layout } from '@components/Layout';
import { HashRouter, HashRoute, HashRouteDefault } from '@components/HashRouter';


const Admin = () => (
  <LayoutAdmin>
    <HashRouter>
      <HashRoute default component={Layout} extraProps={{id:1}} />
      <HashRoute path='article' component={EditArticleContent} extraProps={{id:1}} />
      <HashRoute path='general' component={EditArticleGeneral} extraProps={{id:2}} />
    </HashRouter>
  </LayoutAdmin>
)


export default Admin;
