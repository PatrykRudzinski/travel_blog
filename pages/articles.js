import Layout from '../components/Layout/Layout';
import Link from 'next/link';


const PostLink = (props) => (
    <li>
        <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>This is my articles</h1>
        <ul>
            <PostLink title="Next.js" id="nextjs"/>
            <PostLink title="Next.js is awesome" id="nextjs-is-awesome"/>
        </ul>
    </Layout>
)