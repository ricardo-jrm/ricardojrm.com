import React, { useState } from 'react';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { bwsepia, mecha, boom, neo, liquid, globals } from 'src/theme';

import { hexToRGB } from 'utils/colors';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import ThemePopover from 'components/ThemePopover';
import HomeProfile from 'components/HomeProfile';
import HomeXP from 'components/HomeXP';
import HomeSkills from 'components/HomeSkills';

const defaultTheme = {
  name: 'fractal',
  config: bwsepia,
  type: 'dark',
};
const myThemes = [
  ['fractal', bwsepia, 'Fractal'],
  ['trip', mecha, 'Voyage'],
  ['liquid', liquid, 'Cooldown'],
  ['neo', neo, 'Circuit'],
  ['boom', boom, 'Fission'],
];

const HomeHero = ({  }: IHomeHeroProps): any => {
  const [menu, setMenu] = useState(1);

  let localDark = defaultTheme.type;
  let localTheme = defaultTheme.name;
  let tempTheme: any = defaultTheme.config;
  if (process.browser) {
    localDark = window.localStorage.getItem('DARK_MODE') || defaultTheme.type;
    localTheme = window.localStorage.getItem('THEME') || defaultTheme.name;
    for (let index = 0; index < myThemes.length; index++) {
      const theme = myThemes[index];
      if (localTheme === theme[0] && localTheme !== defaultTheme.name) {
        [, tempTheme] = theme;
      }
    }
  }
  const displayTheme: any = {
    ...tempTheme,
    palette: {
      ...tempTheme.palette,
      type: localDark,
    },
  };
  const [darkToggle, setDarkToggle] = useState({
    checked: localDark === 'dark',
  });
  const [activeTheme, setActiveTheme] = useState(displayTheme);
  const themeConfig = createMuiTheme(activeTheme);

  const useStyles = makeStyles(() => {
    const bgRGB = hexToRGB(
      themeConfig.palette.primary[(themeConfig.palette.type as 'main') || 'dark' || 'light'],
    );
    let myBG;
    switch (localTheme) {
      case 'boom':
        myBG = '/static/img/red_nrg.gif';
        break;
      case 'fractal':
        myBG = '/static/img/3d_fractal.gif';
        break;
      case 'neo':
        myBG = '/static/img/circuit.gif';
        break;
      case 'trip':
        myBG = '/static/img/space_cartoon.gif';
        break;
      default:
        myBG = '/static/img/light_nrg.gif';
        break;
    }
    return {
      root: {
        flexGrow: 1,
      },
      container: {
        minHeight: '100vh',
      },
      button: {
        margin: themeConfig.spacing(0.5),
        textTransform: 'none',
        border: 0,
      },
      gifBG: {
        backgroundImage: `url(${myBG})`,
      },
      bg: {
        backgroundColor: `rgb(${bgRGB.r}, ${bgRGB.g}, ${bgRGB.b}, ${
          themeConfig.palette.type === 'dark' ? '0.90' : '0.90'
        })`,
      },
      title: {
        // textStroke: `1px ${theme.palette.secondary.main}`,
        // '-webkit-text-stroke': `1px ${theme.palette.secondary.main}`,
        color:
          themeConfig.palette.type === 'dark'
            ? themeConfig.palette.primary.light
            : themeConfig.palette.primary.dark,
      },
      subtitle: {
        color:
          themeConfig.palette.type === 'dark'
            ? themeConfig.palette.primary.dark
            : themeConfig.palette.primary.light,
        backgroundColor:
          themeConfig.palette.type === 'dark'
            ? themeConfig.palette.secondary.light
            : themeConfig.palette.secondary.dark,
        display: 'inline-block',
        // paddingTop: themeConfig.spacing(0.5),
        // paddingBottom: themeConfig.spacing(0.5),
        paddingLeft: themeConfig.spacing(4),
        paddingRight: themeConfig.spacing(4),
      },
      link: {
        color:
          themeConfig.palette.type === 'dark'
            ? themeConfig.palette.secondary.light
            : themeConfig.palette.secondary.dark,
        '&:hover': {
          color:
            themeConfig.palette.type === 'dark'
              ? themeConfig.palette.primary.light
              : themeConfig.palette.primary.dark,
        },
      },
      details: {
        color:
          themeConfig.palette.type === 'dark'
            ? themeConfig.palette.secondary.light
            : themeConfig.palette.secondary.dark,
      },
      ovFlow: {
        overflow: 'auto',
        height: '375px',
        [themeConfig.breakpoints.up('xl')]: {
          height: '500px',
        },
      },
      ...globals,
    };
  });
  const classes = useStyles();

  // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <ThemeProvider theme={themeConfig}>
      <div className={`transitions ${classes.gifBG} bg-fixed`}>
        <div className={`transitions ${classes.root} ${classes.bg}`}>
          <Grid container className={`${classes.container}`} justify="center" alignItems="center">
            <Grid container item xs={12} sm={11} md={10} lg={9} justify="flex-start">
              <Grid xs={12} item>
                <Box display="inline-block" pt={{ xs: 5, sm: 4, md: 2, lg: 0, xl: 0 }}>
                  <Typography
                    className={`${classes.title} transitions`}
                    color="textPrimary"
                    variant="h1">
                    RicardoJRM
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} item>
                <Box pb={{ xs: 3, sm: 2, md: 2, lg: 2, xl: 2 }}>
                  <Typography
                    variant="h4"
                    className={`${classes.subtitle} transitions`}
                    color="textPrimary"
                    component="h2">
                    React Developer
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={3} lg={4} item>
                <Box p={2}>
                  <ButtonGroup fullWidth>
                    <Button onClick={() => setMenu(1)} className={classes.button}>
                      <Typography
                        className={`${classes.crsPointer} transitions`}
                        variant="h5"
                        component="h3">
                        <span
                          className={
                            menu === 1
                              ? `transitions ${classes.details}`
                              : `transitions ${classes.details} ${classes.vHidden}`
                          }>
                          {'<'}
                        </span>
                        Profile
                        <span
                          className={
                            menu === 1
                              ? `transitions ${classes.details}`
                              : `transitions ${classes.details} ${classes.vHidden}`
                          }>
                          {' />'}
                        </span>
                      </Typography>
                    </Button>
                  </ButtonGroup>
                  <Box
                    pt={1}
                    pb={4}
                    display={{ xs: menu === 1 ? 'block' : 'none', md: 'none' }}
                    className="animated fadeIn">
                    <HomeProfile dark={darkToggle.checked} theme={themeConfig} />
                  </Box>
                  <ButtonGroup fullWidth>
                    <Button onClick={() => setMenu(3)} className={classes.button}>
                      <Typography
                        className={`transitions ${classes.crsPointer}`}
                        variant="h5"
                        component="h3">
                        <span
                          className={
                            menu === 3
                              ? `transitions ${classes.details}`
                              : `transitions ${classes.details} ${classes.vHidden}`
                          }>
                          {'<'}
                        </span>
                        Experience
                        <span
                          className={
                            menu === 3
                              ? `transitions ${classes.details}`
                              : `transitions ${classes.details} ${classes.vHidden}`
                          }>
                          {' />'}
                        </span>
                      </Typography>
                    </Button>
                  </ButtonGroup>
                  <Box
                    pt={1}
                    pb={4}
                    display={{ xs: menu === 3 ? 'block' : 'none', md: 'none' }}
                    className="animated fadeIn">
                    <HomeXP dark={darkToggle.checked} theme={themeConfig} />
                  </Box>
                  <ButtonGroup fullWidth>
                    <Button onClick={() => setMenu(4)} className={classes.button}>
                      <Typography
                        className={`transitions ${classes.crsPointer}`}
                        variant="h5"
                        component="h3">
                        <span
                          className={
                            menu === 4
                              ? `transitions ${classes.details}`
                              : `transitions ${classes.details} ${classes.vHidden}`
                          }>
                          {'<'}
                        </span>
                        Skills
                        <span
                          className={
                            menu === 4
                              ? `transitions ${classes.details}`
                              : `transitions ${classes.details} ${classes.vHidden}`
                          }>
                          {' />'}
                        </span>
                      </Typography>
                    </Button>
                  </ButtonGroup>
                  <Box
                    pt={1}
                    pb={4}
                    display={{ xs: menu === 4 ? 'block' : 'none', md: 'none' }}
                    className="animated fadeIn">
                    <HomeSkills dark={darkToggle.checked} />
                  </Box>
                </Box>
                <Box textAlign="center">
                  <Box display="inline-block">
                    <Link
                      href="mailto:ricardoraposomota@gmail.com"
                      title="Contact Ricardo via email"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="textPrimary">
                      <i className={`transitions ${classes.link} fas fa-at fa-4x`} />
                    </Link>
                  </Box>
                  <Box mx={2} display="inline-block">
                    <Link
                      href="https://www.linkedin.com/in/ricardo-jrm/"
                      title="Visit Ricardo's LinkedIn page"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="textPrimary">
                      <i className={`transitions ${classes.link} fab fa-linkedin fa-4x`} />
                    </Link>
                  </Box>
                  <Box display="inline-block">
                    <Link
                      href="https://github.com/ricardo-jrm"
                      title="Visit Ricardo's Github page"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="textPrimary">
                      <i className={`transitions ${classes.link} fab fa-github fa-4x`} />
                    </Link>
                  </Box>
                </Box>
                <Box textAlign="center" mt={2} pb={{ xs: 4, md: 2 }}>
                  <ThemePopover
                    darkHook={{ darkToggle, setDarkToggle }}
                    themeHook={{ activeTheme, setActiveTheme }}
                    array={myThemes}
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={9} lg={8} item>
                <Box className={classes.ovFlow} display={{ xs: 'none', md: 'block' }} p={2}>
                  <Box display={menu === 1 ? 'block' : 'none'} className="animated fadeIn">
                    <HomeProfile dark={darkToggle.checked} theme={themeConfig} />
                  </Box>
                  <Box display={menu === 3 ? 'block' : 'none'} className="animated fadeIn">
                    <HomeXP dark={darkToggle.checked} theme={themeConfig} />
                  </Box>
                  <Box display={menu === 4 ? 'block' : 'none'} className="animated fadeIn">
                    <HomeSkills dark={darkToggle.checked} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export interface IHomeHeroProps {}

export default HomeHero;
