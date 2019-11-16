import typography from 'src/typography';

const gold = {
  palette: {
    type: ('dark' as 'dark') || 'light' || undefined,
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
};

const bwsepia = {
  palette: {
    type: ('dark' as 'dark') || 'light' || undefined,
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
};

const mecha = {
  palette: {
    type: ('dark' as 'dark') || 'light' || undefined,
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
};

const boom = {
  palette: {
    type: ('dark' as 'dark') || 'light' || undefined,
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
};

const neo = {
  palette: {
    type: ('dark' as 'dark') || 'light' || undefined,
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
};

const exotic = {
  palette: {
    type: ('dark' as 'dark') || 'light' || undefined,
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
};

const liquid = {
  palette: {
    type: ('dark' as 'dark') || 'light' || undefined,
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
};

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

export { bwsepia, gold, mecha, boom, neo, liquid, exotic, globals };
