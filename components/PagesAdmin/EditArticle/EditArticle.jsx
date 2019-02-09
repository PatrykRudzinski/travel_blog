import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button, Row, Col, message } from 'antd';
import { LayoutAdmin } from '@components/Layout';
import { EditArticleGeneral, EditArticleContent } from '@components/Forms';

const Panel = Collapse.Panel;

class EditArticle extends Component {

  state = { loading: false };

  saveData = () => {
    const { publish } = this.props;
    this.setState({loading: true});
    message.success(publish ? 'Published!' : 'Saved!', 1);
  };

  render() {

    const { publish, changed } = this.props;
    const { loading } = this.state;

    return (
      <>
        <Collapse bordered={false}>
          <Panel header="General properties" key="general" >
            <EditArticleGeneral />
          </Panel>
          <Panel header="Content" key="content">
            <EditArticleContent />
          </Panel>
        </Collapse>
        <Row type="flex" justify="end" style={{padding: '1rem 0'}}>
          <Col>
            <Button
              icon="save"
              size="large"
              type="primary"
              htmlType="button"
              onClick={this.saveData}
              disabled={!changed}
              loading={loading}
            >
              {publish ? 'Save & publish' : 'Save'}
            </Button>
          </Col>
        </Row>
      </>
    )
  }
}

EditArticle.defaultProps = {
  publish: true,
  changed: true,
};

EditArticle.propTypes = {
  publish: PropTypes.bool.isRequired,
  changed: PropTypes.bool.isRequired,
};

export default EditArticle;
