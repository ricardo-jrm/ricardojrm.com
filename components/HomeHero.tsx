import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

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
  wrapRoot: {
    border: '10px solid black',
  },
  wrapCont: {
    border: '5px solid red',
  },
  wrapItem: {
    border: '3px solid green',
  },
}));

const HomeHero = ({  }: IHomeHeroProps): any => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        className={`${classes.wrapRoot} ${classes.container}`}
        justify="center"
        alignItems="center">
        <Grid
          className={`${classes.wrapCont}`}
          container
          item
          xs={12}
          sm={11}
          md={10}
          lg={9}
          justify="center">
          <Grid className={`${classes.wrapItem}`} item>
            <img
              className={`${classes.imgR} ${classes.imgLogo}`}
              src="/static/img/ricardojrm-logo.png"
              title=""
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export interface IHomeHeroProps {}

export default HomeHero;
