import Head from 'next/head'
import { GetServerSideProps } from 'next'
import React from 'react';
import Layout, { siteTitle } from '../components/layout/layout'
import { GlobalStyles } from '../styles/global';

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

export default class Home extends React.Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }

  componentDidMount() {
    console.info('no more state, and theme...')
  }

  render() {
    const { greeting, styles, urls } = this.props;
    return (
      <>
        <GlobalStyles />
        <section>
          <div style={styles.topBarStyle} className={styles.topBarClassName}></div>
        </section>
        <Layout>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section style={{ "display": "flex", "justifyContent": "space-between" }}>
            <h2 style={{ "display": "inline", "alignSelf": "flex-start" }}>{greeting} Brian</h2>
          </section>
          <section>
            <p className={'introduction'}>
              I'm passionate a developer who's focussed on enjoying life, learning, and trying new things.
            </p>

            <p>
              I'm currently a Senior Full Stack Developer <strong>
                <a href={urls.sparkUrl} target="_blank" rel="external" referrerPolicy="no-referrer">@ Spark Networks GmbH</a>
              </strong>
            </p>
            <p>
              Some hobbies I'm currently enjoying are reading, bouldering, the electric guitar, baking, and learning the German language.
            </p>

            <p>
              Connect with me on <strong>
                <a className={'c-link'} href={urls.linkedInUrl} target="_blank" rel="external" referrerPolicy="no-referrer">LinkedIn</a>
              </strong>
            </p>
          </section>
        </Layout>
      </>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const backgroundColor = getTopBarColor();
  const greeting = getGreeting();
  return {
    props: {
      urls: {
        adaptiveUrl: "https://weareadaptive.com/",
        upsUrl: "https://www.ups.com/",
        linkedInUrl: "https://www.linkedin.com/in/brian-inoa/",
        sparkUrl: "https://www.spark.com",
      },
      greeting,
      styles: {
        topBarStyle: { backgroundColor },
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
    'Hey, I\'m'
  ];
  return greetings[ getIndexInRange(0, greetings.length - 1) ];
}

const getTopBarColor = () => {
  const colors = [ '#D0B8AC', '#AE9F8B', '#846B8A', '#D4D2D5', '#6E6A6F' ];
  return colors[ getIndexInRange(0, colors.length - 1) ];
}