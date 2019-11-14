import React, { useState } from 'react';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { mechaTheme, globals } from 'src/theme';

import { hexToRGB } from 'utils/colors';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import HomeAbout from 'components/HomeAbout';
import HomeProfile from 'components/HomeProfile';
import HomeHire from 'components/HomeHire';
import HomeXP from 'components/HomeXP';
import HomeSkills from 'components/HomeSkills';

const useStyles = makeStyles((theme) => {
  const bgRGB = hexToRGB(theme.palette.primary['main' || theme.palette.type]);
  return {
    root: {
      flexGrow: 1,
    },
    container: {
      minHeight: '100vh',
    },
    button: {
      margin: theme.spacing(0.5),
      textTransform: 'none',
      border: 0,
    },
    bg: {
      backgroundColor: `rgb(${bgRGB.r}, ${bgRGB.g}, ${bgRGB.b}, 0.94)`,
    },
    title: {
      textStroke: `2px ${theme.palette.secondary.main}`,
      '-webkit-text-stroke': `2px ${theme.palette.secondary.main}`,
      // color: theme.palette.primary.main,
    },
    details: {
      color: theme.palette.secondary.main,
    },
    ...globals,
  };
});

const HomeHero = ({  }: IHomeHeroProps): any => {
  const classes = useStyles();

  const [menu, setMenu] = useState(1);

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <ThemeProvider theme={mechaTheme}>
      <div className={`${classes.root} ${classes.bg} bg-fixed`}>
        <Grid container className={`${classes.container}`} justify="center" alignItems="center">
          <Grid container item xs={12} sm={11} md={10} lg={9} justify="flex-start">
            <Grid xs={12} item>
              <Box display="inline-block">
                <Typography className={`${classes.title}`} color="textPrimary" variant="h1">
                  RicardoJRM
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box mb={2}>
                <Typography variant="h4" color="textPrimary" component="h2">
                  React Developer
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={3} lg={4} item>
              <Box p={2}>
                <ButtonGroup fullWidth>
                  <Button onClick={() => setMenu(1)} className={classes.button}>
                    <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
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
                <ButtonGroup fullWidth>
                  <Button onClick={() => setMenu(3)} className={classes.button}>
                    <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
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
                <ButtonGroup fullWidth>
                  <Button onClick={() => setMenu(4)} className={classes.button}>
                    <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
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
                <ButtonGroup fullWidth>
                  <Button onClick={() => setMenu(2)} className={`${classes.button}`}>
                    <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
                      <span
                        className={
                          menu === 2
                            ? `transitions ${classes.details}`
                            : `transitions ${classes.details} ${classes.vHidden}`
                        }>
                        {'<'}
                      </span>
                      {menu === 2 ? 'ForHire' : 'For Hire'}
                      <span
                        className={
                          menu === 2
                            ? `transitions ${classes.details}`
                            : `transitions ${classes.details} ${classes.vHidden}`
                        }>
                        {' />'}
                      </span>
                    </Typography>
                  </Button>
                </ButtonGroup>
                <ButtonGroup fullWidth>
                  <Button onClick={() => setMenu(0)} className={classes.button}>
                    <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
                      <span
                        className={
                          menu === 0
                            ? `transitions ${classes.details}`
                            : `transitions ${classes.details} ${classes.vHidden}`
                        }>
                        {'<'}
                      </span>
                      About
                      <span
                        className={
                          menu === 0
                            ? `transitions ${classes.details}`
                            : `transitions ${classes.details} ${classes.vHidden}`
                        }>
                        {' />'}
                      </span>
                    </Typography>
                  </Button>
                </ButtonGroup>
              </Box>
              <Box textAlign="center" mt={1}>
                <Box display="inline-block">
                  <Link href="/" color="textPrimary" onClick={preventDefault}>
                    <i className="fas fa-at fa-4x" />
                  </Link>
                </Box>
                <Box mx={2} display="inline-block">
                  <Link href="/" color="textPrimary" onClick={preventDefault}>
                    <i className="fab fa-linkedin fa-4x" />
                  </Link>
                </Box>
                <Box display="inline-block">
                  <Link href="/" color="textPrimary" onClick={preventDefault}>
                    <i className="fab fa-github fa-4x" />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={9} lg={8} item>
              <Box p={2}>
                <Box display={menu === 0 ? 'block' : 'none'} className="animated fadeIn">
                  <HomeAbout />
                </Box>
                <Box display={menu === 1 ? 'block' : 'none'} className="animated fadeIn">
                  <HomeProfile />
                </Box>
                <Box display={menu === 2 ? 'block' : 'none'} className="animated fadeIn">
                  <HomeHire />
                </Box>
                <Box display={menu === 3 ? 'block' : 'none'} className="animated fadeIn">
                  <HomeXP />
                </Box>
                <Box display={menu === 4 ? 'block' : 'none'} className="animated fadeIn">
                  <HomeSkills />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export interface IHomeHeroProps {}

export default HomeHero;
