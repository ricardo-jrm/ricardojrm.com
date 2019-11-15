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
    fontSize: '1.1rem',
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

const gold = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#c4a747',
      dark: '#263238',
      light: '#d4af37',
    },
    secondary: {
      main: '#607d8b',
      dark: '#607d8b',
      light: '#d4af37',
    },
    error: {
      main: '#a22334',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: { ...typography },
});

const bwsepia = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#9e9e9e',
      dark: '#212121',
      light: '#f5f5f5',
    },
    secondary: {
      main: '#607d8b',
      dark: '#263238',
      light: '#cfd8dc',
    },
    error: {
      main: '#a22334',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: { ...typography },
});

const mecha = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#807CAE',
      light: '#b3b0cf',
      dark: '#2A293B',
    },
    secondary: {
      main: '#d54d8f',
      // light: the one generated is cool,
      dark: '#8c4573', // this one not so cool
    },
    error: {
      main: '#a22334',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: { ...typography },
});

const boom = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#701e0e',
      light: '#fefc7e',
      dark: '#331606',
    },
    secondary: {
      main: '#f63c1f',
    },
    error: {
      main: '#a22334',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: { ...typography },
});

const neo = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      dark: '#212433',
      main: '#4d4f5b',
      light: '#70727b',
    },
    secondary: {
      main: '#3fb49d',
      light: '#3fb49d',
      dark: '#65c3b0',
    },
    error: {
      main: '#6485a4',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: { ...typography },
});

const exotic = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3b875e',
      dark: '#325241',
      light: '#83e2ae',
    },
    secondary: {
      main: '#ff6652',
      light: '#ff9b8e',
    },
    error: {
      main: '#a22334',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: { ...typography },
});

const liquid = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#74d0f6',
      light: '#94c5fe',
      dark: '#1e3f7d',
    },
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#000',
    },
    error: {
      main: '#a22334',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
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

export { appTheme, bwsepia, gold, mecha, boom, neo, liquid, exotic, globals };
