import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  xpImg: {
    width: '100px',
    height: 'auto',
    marginRight: theme.spacing(1.2),
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
}));

const HomeXP = (): any => {
  const classes = useStyles();
  return (
    <Box>
      <Box pb={1.2}>
        <Typography variant="h6">2017-2019</Typography>
        <Box display="flex" alignItems="center">
          <Box display="inline-block">
            <img
              className={`${classes.xpImg}`}
              src="/static/img/glaiveware-logo.png"
              title="Glaiveware"
              alt="Glaiveware logo"
            />
          </Box>
          <Box display="inline-block">
            <Typography variant="body1">
              Glaiveware - React Developer, Project Manager, Business owner & Co-Founder
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={1.2}>
        <Typography variant="h6">2016</Typography>
        <Box display="flex" alignItems="center">
          <Box display="inline-block">
            <img
              className={`${classes.xpImg}`}
              src="/static/img/sycret-logo.png"
              title="Sycret.ink"
              alt="Sycret.ink logo"
            />
          </Box>
          <Box display="inline-block">
            <Typography variant="body1">
              Sycret.ink - Mobile React Native + libsignal-protocol Developer
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={1.2}>
        <Typography variant="h6">2015</Typography>
        <Box display="flex" alignItems="center">
          <Box display="inline-block">
            <img
              className={`${classes.xpImg}`}
              src="/static/img/nextbitt-logo.png"
              title="Nextbitt"
              alt="Nextbitt logo"
            />
          </Box>
          <Box display="inline-block">
            <Typography variant="body1">NextBitt - Frontend Javascript Developer</Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={1.2}>
        <Typography variant="h6">2014</Typography>
        <Box display="flex" alignItems="center">
          <Box display="inline-block">
            <img
              className={`${classes.xpImg}`}
              src="/static/img/s4y-logo.png"
              title="Science4you"
              alt="Science4you logo"
            />
          </Box>
          <Box display="inline-block">
            <Typography variant="body1">Science4you - Backend Java + MySQL Developer</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeXP;
