import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Layout from '@components/Layout';
import { Button } from 'antd';
import "antd/dist/antd.css";
import styled from 'styled-components';

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

class EditArticle extends React.Component {
  state = {
    article: null,
    fetched: true,
    disabled: false
  }

  articleId = () => this.props.match.params.article

  // componentDidMount = async () => {
  //   const data = await fetch
  //   this.setState({ data, fetched: true })
  // }

  render(){
    return (
      <Layout>
        <Button type="primary">Hello</Button>
        <Formik
          initialValues={generalInit}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .max(50, 'Title can\'t be longer than 50 chars')
              .required('Title is required'),
          })}
          render={({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
              <form onSubmit={handleSubmit}>

                <label htmlFor="title">
                  Title:
                </label>
                <input
                  id="title"
                  placeholder="Title of new article"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={errors.title && touched.title ? 1 : 0}
                />
                {
                  errors.title && touched.title &&
                  <div>{errors.title}</div>
                }

                <br />

                <label htmlFor="subtitle">
                  Subtitle:
                </label>
                <input
                  id="subtitle"
                  placeholder="Subtitle of new article"
                  type="text"
                  value={values.subtitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.subtitle && touched.subtitle}
                />
                {
                  errors.subtitle && touched.subtitle &&
                  <div>{errors.subtitle}</div>
                }

                <br />

                <label htmlFor="description">
                  Description:
                </label>
                <textarea
                  id="description"
                  placeholder="Description of new article"
                  type="text"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.description && touched.description}
                />
                {
                  errors.description && touched.description &&
                  <div>{errors.description}</div>
                }

                <br />

                <label htmlFor="mainImage">
                  Main image:
                </label>
                <textarea
                  id="mainImage"
                  placeholder="Main image for new article"
                  type="text"
                  value={values.mainImage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.mainImage && touched.mainImage}
                />
                {
                  errors.mainImage && touched.mainImage &&
                  <div>{errors.mainImage}</div>
                }

                <br />

                <label htmlFor="title">
                  Publish
                </label>
                <input 
                  type='checkbox'
                  name='isPublished'
                  value={values.isPublished}
                  checked={values.isPublished}
                  onChange={handleChange}
                />

                <br />

                <button type='submit' disabled={this.state.disabled || isSubmitting}>
                  Update
                </button>
              </form>
            )}
        />
        <Formik
          initialValues={contentInit}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={Yup.object().shape({
            content: Yup.string()
              .required('Content is required'),
          })}
          render={({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
              <form onSubmit={handleSubmit}>

                <label htmlFor="content">
                  Content:
                </label>
                <textarea
                  id="content"
                  placeholder="Article content"
                  type="text"
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.content && touched.content}
                />
                {
                  errors.content && touched.content &&
                  <div>{errors.content}</div>
                }

                <button type='submit' disabled={this.state.disabled || isSubmitting}>
                  Add Content
                </button>
              </form>
            )}
        />
      </Layout>
    )
  }
}

export default EditArticle;
