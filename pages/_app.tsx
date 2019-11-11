import React, { StrictMode } from 'react';
import App from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { appTheme } from '../src/theme';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <StrictMode>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StrictMode>
    );
  }
}

export default MyApp;
