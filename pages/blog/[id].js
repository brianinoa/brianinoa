import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostDataById } from '../../lib/posts'


export default function Post({ postData }) {
    const { contentHtml, date, id, title } = postData;
    return (
        <Layout>
            <Head>
                <title>{ title }</title>
            </Head>
            <article>
                <h1 className={ utilStyles.headingXl }>{ title }</h1>
                <div className={ utilStyles.lightText }>
                    <Date dateString={ date } />
                </div>
                <div dangerouslySetInnerHTML={ { __html: contentHtml } } />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const postData = await getPostDataById(id);

    return {
        props: {
            postData
        }
    };
}