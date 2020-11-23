import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

const name = 'Brian Inoa'
export const siteTitle = 'Brian Inoa'

export default function Layout({ children, home }) {
    return (
        <div className={ styles.container }>
            <Head>
                { headRender() }
            </Head>
            <main>{ children }</main>
            {backRender(home) }
        </div>
    )
}

function headRender() {
    return (
        <>
            <link rel="icon" href="/favicon.ico" />
            <meta
                property="og:image"
                content={ `https://og-image.now.sh/**Brian**%20Inoa.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=100&heights=100` }
            />
            <meta name="og:title" content={ siteTitle } />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="inoabrian" />
            <meta name="twitter:site" content="" />
            <meta name="description" content="Brian Inoa portfolio and links" />
            <meta name="og:description" content="Brian Inoa portfolio and links" />
        </>
    )
}

function backRender(home) {
    if (!home) {
        return (
            <div className={ styles.backToHome }>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        )
    }
}