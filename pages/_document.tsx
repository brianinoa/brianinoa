import { GetStaticProps } from 'next'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    async getStaticProps() {
        
    }

    render() {
        return (
            <Html>
                <Head>
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}