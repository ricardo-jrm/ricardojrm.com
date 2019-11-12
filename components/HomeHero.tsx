import React from 'react';

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
  ...globals,
}));

const HomeHero = ({  }: IHomeHeroProps): any => {
  const classes = useStyles();
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
                React Developer
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
