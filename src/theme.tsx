import { createMuiTheme /* , responsiveFontSizes */ } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const typography = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Radiance',
    'Radiance-Black',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontFamily: ['Radiance-Black'].join(','),
    // fontSize: '10vw',
  },
  h2: {
    fontFamily: ['Radiance-Black'].join(','),
  },
  h3: {
    fontFamily: ['Radiance-Black'].join(','),
  },
  h4: {
    fontFamily: ['Radiance-Black'].join(','),
    // fontSize: '3vw',
    // Fix awkwrd spacing
    // letterSpacing: '-0.01562em',
    // lineHeight: '3vw',
  },
  h5: {
    fontFamily: ['Radiance'].join(','),
    fontWeight: 600,
  },
  h6: {
    fontWeight: 600,
  },
  body1: {
    fontWeight: 500,
    // fontSize: '1.1rem',
  },
};

const appTheme = /* resposiveFontSizes( */ createMuiTheme({
    palette: {
      // type: 'light',
      primary: indigo,
      secondary: pink,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
      // background: {
      //   default: '#fafafa',
      // },
      // text: {
      //   primary: '#000',
      //   secondary: '#000',
      // },
    },
    typography: { ...typography },
  }) /* ) */;

const mechaTheme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#2a293b',
    },
    secondary: {
      main: '#d54d8f',
    },
    error: {
      main: '#a22334',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    // background: {
    //   default: '#2a293b',
    // },
    // text: {
    //   primary: '#fff',
    //   secondary: '#d54d8f',
    // },
  },
  typography: { ...typography },
});

const globals = {
  vHidden: {
    opacity: 0,
  },
  imgR: {
    maxWidth: '100%',
    height: 'auto',
  },
  selectNone: {
    userSelect: 'none' as
      | 'contain'
      | 'all'
      | '-moz-initial'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'unset'
      | 'auto'
      | 'none'
      | 'text'
      | '-moz-none'
      | 'element'
      | undefined,
  },
  crsPointer: {
    cursor: 'pointer',
  },
};

export { appTheme, mechaTheme, globals };
