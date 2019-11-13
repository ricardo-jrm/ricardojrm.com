import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import { globals } from 'src/theme';

import HomeAbout from 'components/HomeAbout';
import HomeProfile from 'components/HomeProfile';
import HomeHire from 'components/HomeHire';
import HomeXP from 'components/HomeXP';
import HomeSkills from 'components/HomeSkills';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: '100vh',
    opacity: 1
  },
  button: {
    margin: theme.spacing(0.5),
    textTransform: 'none',
    border: 0,
  },
  bgAlpha: {
    backgroundColor: '#fafafa',
    opacity: 0.94,
  },
  ...globals,
}));

const HomeHero = ({  }: IHomeHeroProps): any => {
  const classes = useStyles();

  const [menu, setMenu] = useState(1);

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <div className={`${classes.root} bg-fixed ${classes.bgAlpha}`}>
      <Grid container className={`${classes.container}`} justify="center" alignItems="center">
        <Grid container item xs={12} sm={11} md={10} lg={9} justify="flex-start">
          <Grid xs={12} item>
            <Box display="inline-block" fontWeight={700}>
              <Typography className={`${classes.title} transitions`} variant="h1">
                RicardoJRM
              </Typography>
            </Box>
            <Box ml={2} display="inline-block">
              <img
                className={`${classes.imgR} ${classes.imgLogo} transitions`}
                src="/static/img/ricardojrm-logo.png"
                title=""
                alt=""
              />
            </Box>
          </Grid>
          <Grid xs={12} item>
            <Box mb={2}>
              <Typography variant="h4" component="h2">
                React Developer
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={3} lg={4} item>
            <Box p={2}>
              <ButtonGroup fullWidth>
                <Button size="large" onClick={() => setMenu(1)} className={classes.button}>
                  <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
                    <span className={menu === 1 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {'<'}
                    </span>
                    Profile
                    <span className={menu === 1 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {' />'}
                    </span>
                  </Typography>
                </Button>
              </ButtonGroup>
              <ButtonGroup fullWidth>
                <Button size="large" onClick={() => setMenu(3)} className={classes.button}>
                  <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
                    <span className={menu === 3 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {'<'}
                    </span>
                    Experience
                    <span className={menu === 3 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {' />'}
                    </span>
                  </Typography>
                </Button>
              </ButtonGroup>
              <ButtonGroup fullWidth>
                <Button size="large" onClick={() => setMenu(4)} className={classes.button}>
                  <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
                    <span className={menu === 4 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {'<'}
                    </span>
                    Skills
                    <span className={menu === 4 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {' />'}
                    </span>
                  </Typography>
                </Button>
              </ButtonGroup>
              <ButtonGroup fullWidth>
                <Button size="large" onClick={() => setMenu(2)} className={`${classes.button}`}>
                  <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
                    <span className={menu === 2 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {'<'}
                    </span>
                    {menu === 2 ? 'ForHire' : 'For Hire'}
                    <span className={menu === 2 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {' />'}
                    </span>
                  </Typography>
                </Button>
              </ButtonGroup>
              <ButtonGroup fullWidth>
                <Button size="large" onClick={() => setMenu(0)} className={classes.button}>
                  <Typography className={`${classes.crsPointer}`} variant="h5" component="h3">
                    <span className={menu === 0 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {'<'}
                    </span>
                    About
                    <span className={menu === 0 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {' />'}
                    </span>
                  </Typography>
                </Button>
              </ButtonGroup>
            </Box>
            <Box textAlign="center" mt={1}>
              <Box display="inline-block">
                <Link href="/" color="inherit" onClick={preventDefault}>
                  <i className="fas fa-at fa-4x" />
                </Link>
              </Box>
              <Box mx={2} display="inline-block">
                <Link href="/" color="inherit" onClick={preventDefault}>
                  <i className="fab fa-linkedin fa-4x" />
                </Link>
              </Box>
              <Box display="inline-block">
                <Link href="/" color="inherit" onClick={preventDefault}>
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
  );
};

export interface IHomeHeroProps {}

export default HomeHero;
