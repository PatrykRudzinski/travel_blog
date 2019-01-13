import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Layout from '@components/Layout';
import styled from 'styled-components';

const Input = styled(Field)`
  background: red;
`

const EditArticle = () => (
  <Layout>
    <Formik
      onSubmit={(values, actions) => {
        console.log(values);
        console.log(actions);
      }}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Input type="email" name="email" />
          <ErrorMessage name="email">
            <h1>aadsmasdka</h1>
          </ErrorMessage>
          <Field type="text" className="error" name="social.facebook" />
          <ErrorMessage name="social.facebook">
            {errorMessage => <div className="error">{errorMessage}</div>}
          </ErrorMessage>
          <Field type="text" name="social.twitter" />
          <ErrorMessage name="social.twitter" className="error" component="div" />
          {status && status.msg && <div>{status.msg}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
            </button>
        </Form>
      )}
    />
  </Layout>
);

export default EditArticle;
