import React from 'react';
import {
 Form, Input, Tooltip, Icon, Upload, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';

const { TextArea } = Input;
const Option = Select.Option;

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

class EditArticleGeneral extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      // tags: [],
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              <Tooltip title="Main title of your article">
                Title
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input unique title!', whitespace: true }],
          })(
            <Input placeholder="Atlantis in two days"/>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              <Tooltip title="Subtitle to your article">
                Subtitle
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('subtitle', {
            rules: [{ required: true, message: 'Please input a subtitle!', whitespace: true }],
          })(
            <TextArea
              autosize
              placeholder="How to discover real underwater world in a weekend trip"
            />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              <Tooltip title="Summary your article">
                Summary
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('summary', {
            rules: [{ required: true, message: 'Please input even a short summary', whitespace: true }],
          })(
            <TextArea
              autosize
              placeholder="Find the traveler Holy Grail! In this article you'll find complete info about traveling to the largest underwater island..."
            />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={(
            <Tooltip title="Upload theme image for your article">
              Main image
            </Tooltip>
          )}
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
            rules: [{ required: true, message: 'You have to upload main photo' }]
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button type="button">
                <Icon type="upload" />
                Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Tags"
        >
          {getFieldDecorator('tags', {
            rules: [{ required: true, message: 'You have to upload main photo' }]
          })(
            <Select
              mode="tags"
              size="default"
              placeholder="Select or type new tags"
            >
              <Option key="fun">fun</Option>
              <Option key="lazy">lazy</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('publish', {
            valuePropName: 'checked',
          })(
            <Checkbox>Publish on save</Checkbox>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'articleGeneral' })(EditArticleGeneral);

// ReactDOM.render(<WrappedArticleGeneral />, mountNode);