import Head from 'next/head'
import Layout from '../../../components/layout'
import { getAllPostIds } from '../../../lib/posts'

export default function Posts({ posts }) {
    return <Layout>
        <Head>
            <title>Posts</title>
        </Head>
    </Layout>
}

export async function getStaticProps() {
    return {
        props: {
            posts: getAllPostIds().map((post) => post.id)
        }
    }
}