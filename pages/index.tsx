import Head from 'next/head'
import { GetServerSideProps } from 'next'
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout, { siteTitle } from '../components/layout/layout'
import { lightTheme, darkTheme, Theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';

import { Toggle } from '../components/toggle/toggle';

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
  private readonly lightThemeBody: string;
  private readonly darkModeKey: string;
  constructor(props: HomeProps) {
    super(props);
    this.lightThemeBody = '#E2E2E2';
    this.darkModeKey = 'darkMode';
    this.state = { theme: {} };
  }

  componentDidMount() {
    const recentOrDefaultDarkMode = localStorage.getItem(this.darkModeKey) || JSON.stringify(darkTheme);
    const theme: Theme = JSON.parse(recentOrDefaultDarkMode);
    this.setState({ theme });
  }

  toggleTheme = () => {
    let { theme } = this.state as { theme: Theme };
    const { isLight } = this.checkIsLightThemeEnabled(theme);
    theme = (isLight ? darkTheme : lightTheme);
    this.setState({ theme });
    localStorage.setItem(this.darkModeKey, JSON.stringify({ ...theme }));
  }

  checkIsLightThemeEnabled(theme: Theme) {
    return { isLight: theme.body === this.lightThemeBody };
  }

  render() {
    const { greeting, styles, urls } = this.props;
    const { theme } = (this.state as { theme: Theme });
    const { isLight } = this.checkIsLightThemeEnabled(theme);
    return (
      <ThemeProvider theme={theme}>
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
              <Toggle theme={{ ...theme }} toggleTheme={this.toggleTheme} isLight={isLight} />
            </section>
            <section>
            </section>
            <section>
              <p className={'introduction'}>I'm passionate about enjoying life, learning, and trying new things.</p>
              <p>
                I'm currently a Senior Full Stack Developer <strong>
                  <a href={urls.sparkUrl} target="_blank" rel="external" referrerPolicy="no-referrer">@ Spark Networks GmbH</a>
                </strong>
              </p>
              <p>
                I enjoy having conversations on a plethora of topics.
                Some hobbies I'm currently enjoying are bouldering, guitar playing, baking, and learning the German language.
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
      </ThemeProvider>
    )
  }
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