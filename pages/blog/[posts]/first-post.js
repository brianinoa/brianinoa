import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../../components/layout/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <p>
            <Link href="/">
                Home
            </Link>
        </p>
    </Layout>
}