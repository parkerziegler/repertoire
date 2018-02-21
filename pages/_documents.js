import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Repertoire</title>
          <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <style jsx global>{`
          body { 
            margin: 0;
            background: blue;
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}