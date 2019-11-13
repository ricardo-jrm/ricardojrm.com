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
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
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
