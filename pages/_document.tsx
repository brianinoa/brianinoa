import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

interface StyleDocumentProps extends DocumentProps {
    styleTags: Array<React.ReactElement<{}>>;
};

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const { renderPage } = ctx;
        const sheet = new ServerStyleSheet();
        // Step 2: Retrieve styles from components in the page
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        // Step 3: Extract the styles as <style> tags
        const styles = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styles };
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