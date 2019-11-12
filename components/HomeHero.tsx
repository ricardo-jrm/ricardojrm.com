import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { globals } from 'src/theme';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((/* theme */) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: '100vh',
  },
  wrapMenu: {
    height: '200px',
  },
  ...globals,
}));

const HomeHero = ({  }: IHomeHeroProps): any => {
  const classes = useStyles();

  const [menu, setMenu] = useState(0);

  return (
    <div className={classes.root}>
      <Grid container className={`${classes.container}`} justify="center" alignItems="center">
        <Grid container item xs={12} sm={11} md={10} lg={9} justify="flex-start">
          <Grid xs={12} item>
            <Box display="inline-block" fontWeight={700}>
              <Typography className={`${classes.fwBold}`} variant="h1">
                RicardoJRM
              </Typography>
            </Box>
            <Box ml={2} display="inline-block">
              <img
                className={`${classes.imgR} ${classes.imgLogo}`}
                src="/static/img/ricardojrm-logo.png"
                title=""
                alt=""
              />
            </Box>
          </Grid>
          <Grid xs={12} item>
            <Box>
              <Typography className={`${classes.fwBold}`} variant="h4" component="h2">
                {'<React Developer />'}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={3} onClick={() => setMenu(0)} item>
            <Box textAlign="center">
              <Typography
                className={`${classes.fwSemiBold} ${classes.crsPointer}`}
                variant="h6"
                component="h3">
                For Hire:
              </Typography>
            </Box>
          </Grid>
          <Grid xs={3} onClick={() => setMenu(1)} item>
            <Box textAlign="center">
              <Typography
                className={`${classes.fwSemiBold} ${classes.crsPointer}`}
                variant="h6"
                component="h3">
                Profile:
              </Typography>
            </Box>
          </Grid>
          <Grid xs={3} onClick={() => setMenu(2)} item>
            <Box textAlign="center">
              <Typography
                className={`${classes.fwSemiBold} ${classes.crsPointer}`}
                variant="h6"
                component="h3">
                About:
              </Typography>
            </Box>
          </Grid>
          <Grid className={`${classes.wrapMenu}`} xs={12} item>
            <Box display={menu === 0 ? 'block' : 'none'}>
              <Typography variant="body1">
                - Remote Job
                <br />
                - Freelance Work
                <br />- Consulting
              </Typography>
            </Box>
            <Box display={menu === 1 ? 'block' : 'none'}>
              <Typography variant="body1">
                - Senior Front End Developer
                <br />
                - Full Remote
                <br />
                Effective Stack:
                <br />
                {'  - React.js (3+ yrs)'}
                <br />
                {'  - Next.js'}
                <br />
                {'  - Typescript'}
                <br />
                {'  - Material-UI'}
              </Typography>
            </Box>
            <Box display={menu === 2 ? 'block' : 'none'}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam nostrum
                repudiandae unde similique! Beatae eveniet distinctio accusantium maxime eius ipsa
                qui deleniti, iste aperiam officia, eligendi autem. Deserunt, adipisci.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export interface IHomeHeroProps {}

export default HomeHero;
