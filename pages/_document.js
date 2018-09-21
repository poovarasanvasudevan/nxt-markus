import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>Hello</title>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                    <meta name="language" content="english" />

                    <meta httpEquiv="content-type" content="text/html" />
                    <meta name="author" content="Poovarasan Vasudevan" />
                    <meta name="designer" content="Poovarasan Vasudevan" />
                    <meta name="publisher" content="Poovarasan Vasudevan" />
                    <meta name="no-email-collection" content="http://www.unspam.com/noemailcollection/" />


                    <meta name="description" content="Learn more Poovarasan Vasudevan, his projects, interests and experience." />
                    <meta name="keywords" content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist" />
                    <meta name="robots" content="index,follow" />
                    <meta name="revisit-after" content="7 days" />
                    <meta name="distribution" content="web" />
                    <meta name="robots" content="noodp" />


                    <meta name="distribution" content="web" />
                    <meta name="web_author" content="Poovarasan Vasudevan" />
                    <meta name="rating" content="general" />
                    <meta name="rating" content="safe for kids" />
                    <meta name="subject" content="Personal" />
                    <meta name="title" content="Poovarasan Vasudevan - Official Website." />
                    <meta name="copyright" content="Copyright 2016" />
                    <meta name="reply-to" content="poosan9@gmail.com" />
                    <meta name="abstract" content="Poovarasan Vasudevan is an IT strategist, with over 3 years of experience, including software engineering, project management, product development, business operations, and strategy." />
                    <meta name="city" content="San Francisco" />
                    <meta name="country" content="USA" />
                    <meta name="distribution" content="global" />
                    <meta name="classification" content="Poovarasan Vasudevan is an IT strategist, with over 3 years of experience, including software engineering, project management, product development, business operations, and strategy." />


                    <meta name="format-detection" content="telephone=yes" />
                    <meta name="HandheldFriendly" content="true" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


                    <meta httpEquiv="Content-Style-Type" content="text/css" />
                    <meta httpEquiv="Content-Script-Type" content="text/javascript" />

                    <meta name="theme-color" content="#db5945" />
                    <link rel="manifest" href="/static/manifest.json" />
                </Head>
            <body className="custom_class">
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}