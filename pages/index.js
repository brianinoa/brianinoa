import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={ utilStyles.headingMd }>
        <p>{ getRandomGreeting() }, I'm Brian</p>
      </section>
    </Layout>
  )
}



function getRandomGreeting() {
  let greeting = Math.floor(Math.random() * (3 - 0 + 1) + 0);
  return [ 'Halo', 'Hola', 'Hey', 'Bonjour' ][ greeting ];
}