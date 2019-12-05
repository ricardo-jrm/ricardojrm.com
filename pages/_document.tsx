import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';

import { ServerStyleSheets } from '@material-ui/core/styles';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  public setGoogleAnalytics() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-154009723-1');
      `,
    };
  }

  public render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta httpEquiv="Content-Language" content="en" />
          <meta name="language" content="en" />
          <meta name="generator" content="RicardoJRM (www.ricardojrm.com)" />
          <meta name="author" content="RicardoJRM (www.ricardojrm.com)" />
          <meta name="reference" content="RicardoJRM" />

          <meta name="date" content="2019-12-05" />

          <meta name="robots" content="index,follow" />
          <link rel="manifest" href="/manifest.json" />

          <link rel="canonical" href="https://www.ricardojrm.com" />

          <link rel="dns-prefetch" href="https://use.fontawesome.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
          <link rel="dns-prefetch" href="https://www.google.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          {/* 
          <link rel="dns-prefetch" href="https://www.gstatic.com" />
          */}

          {/* PWA primary color */}
          <meta name="theme-color" content="#c0c0c0" />

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
          />

          <link
            href="https://use.fontawesome.com/releases/v5.0.9/css/all.css"
            integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1"
            crossOrigin="anonymous"
            rel="stylesheet"
          />

          <link href="/static/styles/fonts.css" rel="stylesheet" />
          <link href="/static/styles/main.css" rel="stylesheet" />

          <script
            async
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=UA-154009723-1"
          />
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

export default MyDocument;
