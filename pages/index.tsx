import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'

interface HomeProps {
  greeting: string;
  styles: {
    topBarStyle: any;
    topBarClassName: string;
  }
  urls: {
    [ key: string ]: string
  }
};

export default function Home({ ...data }: HomeProps) {
  const { greeting, styles, urls } = data;
  return (
    <>
      <section>
        <div style={styles.topBarStyle} className={styles.topBarClassName}></div>
      </section>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <h2>{greeting} Brian</h2>
        </section>
        <section>
          <p className={'introduction'}>I'm passionate about learning, and I enjoy trying new things.</p>
          <p>
            I'm currently a Full Stack Software Developer <strong>
              <a href={urls.sparkUrl} target="_blank" rel="external" referrerPolicy="no-referrer">@ Spark Networks GmbH</a>
            </strong>
          </p>
          <p>
            I enjoy having conversations on a plethora of topics.
            Some hobbies I'm currently enjoying are bouldering, guitar playing, baking, and the German language.
        </p>

          <p>
            Connect with me on <strong>
              <a className={'c-link'} href={urls.linkedInUrl} target="_blank" rel="external" referrerPolicy="no-referrer">LinkedIn</a>
            </strong>
          </p>
          <p>
            <span>
              Fomerly&nbsp;
            <a className={'bold'} href={urls.adaptiveUrl} target="_blank" rel="external" referrerPolicy="no-referrer">
                Adaptive
            </a>, and&nbsp;
            <a className={'bold'} href={urls.upsUrl} target="_blank" rel="external" referrerPolicy="no-referrer">
                UPS
            </a>
            </span>
          </p>
        </section>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
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

const getIndexInRange = (min: number, max: number) => {
  const offset = 1;
  return Math.floor(Math.random() * (max - min + offset) + min);
}

const getGreeting = () => {
  const greetings = [
    'Hallo, ich bin',
    'Hola, soy',
    'Hey, I\'m',
    'Bonjour, je suis'
  ];
  return greetings[ getIndexInRange(0, greetings.length - 1) ];
}

const getTopBarColor = () => {
  const colors = [ '#D0B8AC', '#AE9F8B', '#846B8A', '#D4D2D5', '#6E6A6F' ];
  return colors[ getIndexInRange(0, colors.length - 1) ];
}