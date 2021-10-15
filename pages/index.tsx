import Head from 'next/head'
import React from 'react';
import Layout, { siteTitle } from '../components/layout/layout'
import { GlobalStyles } from '../styles/global';

export default class Home extends React.Component<{}> {
  constructor() {
    super({});
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <section>
          <div className="bar"></div>
        </section>
        <Layout>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section style={{ "display": "flex", "justifyContent": "space-between" }}>
            <h2 style={{ "display": "inline", "alignSelf": "flex-start" }}>Hey, I'm Brian</h2>
          </section>
          <section>
            <p className={'introduction'}>
              I'm a passionate developer who's focussed on backend systems, design, and learning.
            </p>

            <p>
              I'm currently a Senior Full Stack Developer <strong>
                @ Spark Networks GmbH
              </strong>
            </p>
            <p>
              Some hobbies I'm currently enjoying are reading, bouldering, the electric guitar, and baking.
            </p>

            <p>
              Connect with me on <strong>
                <a className={'c-link'} href="https://www.linkedin.com/in/brian-inoa/" target="_blank" rel="external" referrerPolicy="no-referrer">LinkedIn</a>
              </strong>
            </p>
          </section>
        </Layout>
      </>
    )
  }
}