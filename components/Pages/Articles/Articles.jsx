import React from 'react';
import { Layout } from '@components/Layout';
import Link from 'next/link';

const ArticleLink = props => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>This is my articles</h1>
    <ul>
      <ArticleLink title="Next.js" id="nextjs" />
      <ArticleLink title="Next.js is awesome" id="nextjs-is-awesome" />
    </ul>
  </Layout>
);
