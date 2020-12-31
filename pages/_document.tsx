import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

// LINK style-components
import { ThemeProvider, ServerStyleSheet } from 'styled-components'
import theme from '@common/styles/theme.styles'
import GlobalStyle from '@common/styles/global.styles'

const sprite = require('svg-sprite-loader/runtime/sprite.build')

export default class CustomDocument extends Document<{
  spriteContent: string
}> {
  public static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const spriteContent = sprite.stringify()
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        spriteContent,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Html>
          <Head>{/* your head if needed */}</Head>
          <body>
            <div
              dangerouslySetInnerHTML={{ __html: this.props.spriteContent }}
            />
            <Main />
            <NextScript />
          </body>
        </Html>
      </ThemeProvider>
    )
  }
}
