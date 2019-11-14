import React from 'react';
import App from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
// import { appTheme, mechaTheme } from '../src/theme';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      // eslint-disable-next-line
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
