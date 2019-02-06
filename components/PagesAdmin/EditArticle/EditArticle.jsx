import React from 'react';
import { LayoutAdmin } from '@components/Layout';
import { Collapse } from 'antd';
import { EditArticleGeneral, EditArticleContent } from '@components/Forms';

const Panel = Collapse.Panel;

const EditArticle = () => (
  <Collapse bordered={false} defaultActiveKey={['general']}>
    <Panel header="General properties" key="general">
      <EditArticleGeneral />
    </Panel>
    <Panel header="Content" key="content">
      <EditArticleContent />
    </Panel>
  </Collapse>
);

export default EditArticle;
