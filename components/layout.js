import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Brian Inoa'
export const siteTitle = 'Brian Inoa'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                {headRender()}
            </Head>
            <header className={styles.header}>
                {homeRender(home)}
            </header>
            <main>{children}</main>
            {backRender(home)}
        </div>
    )
}

function headRender() {
    return (
        <>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.now.sh/**Brian**%20Inoa.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=100&heights=100`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    )
}

function homeRender(home) {
    if (home) {
        return (<>
            <img
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
            />
        </>);
    }

    return (
        <>
            <Link href="/">
                <a>
                    <img
                        src="/images/profile.jpg"
                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
                <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
            </h2>
        </>
    );
}

function backRender(home) {
    if (!home) {
        return (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Home</a>
                </Link>
            </div>
        )
    }
}