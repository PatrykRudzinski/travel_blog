import React from 'react';
import { LayoutAdmin } from '@components/Layout';
import { Collapse } from 'antd';
import { EditArticleGeneral, EditArticleContent } from '@components/Forms';

const Panel = Collapse.Panel;

const generalInit = { 
  isPublished: false,
  title: '',
  subtitle: '',
  description: '',
  mainImage: '',
  tags: [],
  createDate: new Date(),
  lastUpdateDate: new Date(),
  firstPublishedDate: null,
};

const contentInit = {
  content: '',
  order: 0,
}

const EditArticle = () => (
  <LayoutAdmin>
    <Collapse bordered={false} defaultActiveKey={['general']}>
      <Panel header="General properties" key="general">
        <EditArticleGeneral />
      </Panel>
      <Panel header="Content" key="content">
        <EditArticleContent />
      </Panel>
    </Collapse>
  </LayoutAdmin>
);

export default EditArticle;
