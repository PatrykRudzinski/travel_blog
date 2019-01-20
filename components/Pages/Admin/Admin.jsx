import React from 'react';
import { LayoutAdmin } from '@components/Layout';
import { Layout } from '@components/Layout';
import { HashRouter, HashRoute } from '@components/HashRouter';
import EditArticle from "../../PagesAdmin/EditArticle";
import Home from "../../PagesAdmin/Home";
import Articles from "../../PagesAdmin/Articles";

const Admin = () => (
  <LayoutAdmin>
    <HashRouter>
      <HashRoute default path='home' component={Home}/>
      <HashRoute path='articles-list' component={Articles}/>
      <HashRoute path='articles-edit' component={EditArticle}/>
      <HashRoute path='articles-new' component={EditArticle}/>
    </HashRouter>
  </LayoutAdmin>
);

export default Admin;
