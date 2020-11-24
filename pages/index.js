import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
export default function Home({ ...data }) {
  const { greeting, styles, urls } = data;
  return (
    <>
      <section>
        <div style={ styles.topBarStyle } className={ styles.topBarClassName }></div>
      </section>
      <Layout home>
        <Head>
          <title>{ siteTitle }</title>
        </Head>
        <section>
          <h2>{ greeting } Brian</h2>
        </section>
        <section>
          <p className={ 'introduction' }>I'm passionate about learning, and I enjoy trying new things.</p>
          <p>
            I'm currently a Full Stack Software Developer <strong>
              <a href={ urls.sparkUrl } target="_blank" rel="external" referrerPolicy="no-referrer">@ Spark Networks GmbH</a>
            </strong>
          </p>
          <p>
            I enjoy having conversations on a plethora of topics.
            Some hobbies I'm currently enjoying are bouldering, guitar playing, baking, and the German language.
        </p>

          <p>
            Connect with me on <strong>
              <a className={ 'c-link' } href={ urls.linkedInUrl } target="_blank" rel="external" referrerPolicy="no-referrer">LinkedIn</a>
            </strong>
          </p>
          <p>
            <span>
              Fomerly&nbsp;
            <a className={ 'bold' } href={ urls.adaptiveUrl } target="_blank" rel="external" referrerPolicy="no-referrer">
                Adaptive
            </a>, and&nbsp;
            <a className={ 'bold' } href={ urls.upsUrl } target="_blank" rel="external" referrerPolicy="no-referrer">
                UPS
            </a>
            </span>
          </p>
        </section>
      </Layout>
    </>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {
//       urls: {
//         adaptiveUrl: "https://weareadaptive.com/",
//         upsUrl: "https://www.ups.com/",
//         linkedInUrl: "https://www.linkedin.com/in/brian-inoa/",
//         sparkUrl: "https://www.spark.com",
//       },
//     }
//   }
// }

export async function getServerSideProps() {
  return {
    props: {
        urls: {
          adaptiveUrl: "https://weareadaptive.com/",
          upsUrl: "https://www.ups.com/",
          linkedInUrl: "https://www.linkedin.com/in/brian-inoa/",
          sparkUrl: "https://www.spark.com",
        },
      greeting: getGreeting(),
      styles: {
        topBarStyle: { backgroundColor: getTopBarColor() },
        topBarClassName: 'bar',
      },
    }
  }
}

function getIndexInRange(min, max) {
  const offset = 1;
  return Math.floor(Math.random() * (max - min + offset) + min);
}

function getGreeting() {
  const greetings = [
    'Hallo, ich bin',
    'Hola, soy',
    'Hey, I\'m',
    'Bonjour, je suis'
  ];
  return greetings[ getIndexInRange(0, greetings.length - 1) ];
}

function getTopBarColor() {
  const colors = [ '#D0B8AC', '#AE9F8B', '#846B8A', '#D4D2D5', '#6E6A6F' ];
  return colors[ getIndexInRange(0, colors.length - 1) ];
}