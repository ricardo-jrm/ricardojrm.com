import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

/*

  [defaultTheme.breakpoints.down('xs')]: {
    // fontSize: '3rem',
  },
  [defaultTheme.breakpoints.up('sm')]: {
    // fontSize: '1rem'
  },
  [defaultTheme.breakpoints.up('md')]: {
    // fontSize: '1rem'
  },
  [defaultTheme.breakpoints.up('lg')]: {
    // fontSize: '1rem'
  },
  [defaultTheme.breakpoints.up('xl')]: {
    // fontSize: '1rem'
  },

*/

export default {
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
    '"Radiance-Distressed"',
  ].join(','),
  h1: {
    fontFamily: ['Radiance-Black'].join(','),
    [defaultTheme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
  h2: {
    fontFamily: ['Radiance-Black'].join(','),
  },
  h3: {
    fontFamily: ['Radiance-Black'].join(','),
  },
  h4: {
    fontFamily: ['Radiance-Black'].join(','),
    [defaultTheme.breakpoints.down('xs')]: {
      fontSize: '1.85rem',
    },
  },
  h5: {
    fontFamily: ['Radiance'].join(','),
    fontWeight: 600,
    [defaultTheme.breakpoints.only('md')]: {
      fontSize: '1.2rem',
    },
  },
  h6: {
    fontWeight: 600,
  },
  body1: {
    fontWeight: 500,
    fontSize: '1.1rem',
  },
  body2: {
    fontSize: '0.91rem',
  },
};
