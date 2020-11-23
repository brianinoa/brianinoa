import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
const adaptiveUrl = "https://weareadaptive.com/"
const upsUrl = "https://www.ups.com/"
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section>
        <h2>{ getGreeting() } Brian</h2>
      </section>
      <section>
        <p className={ 'introduction' }>I'm passionate about learning, and I enjoy trying new things.</p>
        <p>
          I'm currently a Full Stack Software Developer working in the Dating Industry <strong>
            <a href="https://www.spark.com" target="_blank" rel="external" referrerPolicy="no-referrer">@ Spark Networks GmbH</a>
          </strong>
        </p>
        <p>
          I enjoy having conversations on a plethora of topics.
          Some hobbies I'm currently enjoying are bouldering, guitar playing, baking, and the German language.
        </p>

        <p>
          Connect with me on <strong>
            <a className={ 'c-link' } href="https://www.linkedin.com/in/brian-inoa/" target="_blank" rel="external" referrerPolicy="no-referrer">LinkedIn</a>
          </strong>
        </p>
        <p>
          <span>
            Fomerly&nbsp;
            <a className={ 'bold' } href={ adaptiveUrl } target="_blank" rel="external" referrerPolicy="no-referrer">
              Adaptive
            </a>, and&nbsp;
            <a className={ 'bold' } href={ upsUrl } target="_blank" rel="external" referrerPolicy="no-referrer">
              UPS
            </a>
          </span>
        </p>
      </section>
    </Layout>
  )
}



function getGreeting() {
  let greeting = Math.floor(Math.random() * (3 - 0 + 1) + 0);
  return [
    'Halo, ich bin',
    'Hola, soy',
    'Hey, I\'m',
    'Bonjour, je suis'
  ][ greeting ];
}