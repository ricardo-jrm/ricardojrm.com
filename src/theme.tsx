import { createMuiTheme /* , responsiveFontSizes */ } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const appTheme = /* resposiveFontSizes( */ createMuiTheme({
    palette: {
      primary: indigo,
      secondary: pink,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
      background: {
        default: '#fafafa',
      },
      text: {
        primary: '#000',
      },
    },
    typography: {
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
        fontSize: '10vw',
        lineHeight: '8vw',
      },
      h2: {
        fontFamily: ['Radiance-Black'].join(','),
      },
      h3: {
        fontFamily: ['Radiance-Black'].join(','),
      },
      h4: {
        fontFamily: ['Radiance-Black'].join(','),
        fontSize: '4vw',
        // lineHeight: '3vw',
      },
      h5: {
        fontFamily: ['Radiance'].join(','),
      },
      h6: {
        fontFamily: ['Radiance'].join(','),
        fontWeight: 600,
      },
      body1: {
        fontWeight: 500,
      },
    },
  }) /* ) */;

const globals = {
  vHidden: {
    opacity: 0,
  },
  imgR: {
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
    maxWidth: '100%',
    height: 'auto',
  },
  crsPointer: {
    cursor: 'pointer',
  },
  fwBold: {
    fontWeight: 700,
  },
  fwSemiBold: {
    fontWeight: 600,
  },

  // testing

  imgLogo: {
    maxHeight: appTheme.typography.h1.fontSize,
    '&:hover': {
      opacity: 0,
    },
  },
  title: {
    '&:hover': {
      color: 'red',
      backgroundColor: 'blue',
    },
  },
};

export { appTheme, globals };
