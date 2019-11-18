import typography from 'src/typography';

const gold = {
  palette: {
    type: ('dark' as 'dark') || 'light' || undefined,
    primary: {
      dark: '#263238',
      main: '#c4a747',
      light: '#d4af37',
    },
    secondary: {
      dark: '#607d8b',
      main: '#607d8b',
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
      dark: '#212121', // locked
      main: '#9e9e9e',
      light: '#f5f5f5', // locked
    },
    secondary: {
      dark: '#263238',
      main: '#607d8b',
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
      dark: '#2A293B', // locked
      main: '#807CAE', // locked
      light: '#b3b0cf', // locked
    },
    secondary: {
      dark: '#8c4573', // tryout #8c4573
      main: '#d54d8f', // locked
      light: '#dd70a5', // locked
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
      dark: '#331606',
      main: '#701e0e',
      light: '#fefc7e',
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
      dark: '#212433', // locked
      main: '#4d4f5b', // #4d4f5b
      light: '#a1ded2', // #70727b
    },
    secondary: {
      dark: '#4d4f5b', // #a1ded2
      main: '#65c3b0', // lock color not position
      light: '#3fb49d', // locked
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
      dark: '#325241',
      main: '#3b875e',
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
      dark: '#1e3f7d', // locked
      main: '#74d0f6', // locked
      light: '#94c5fe', // locked
    },
    secondary: {
      dark: '#000',
      main: '#fff',
      light: '#fff', // locked
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
