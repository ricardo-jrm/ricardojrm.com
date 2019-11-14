import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  xpImg: {
    width: '75px',
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
        <Typography color="textPrimary" variant="h6">
          2017-2019: Glaiveware
        </Typography>
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
            <Typography color="textPrimary" variant="body1">
              Full Stack Developer, Project Manager, Business owner & Co-Founder
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={1.2}>
        <Typography color="textPrimary" variant="h6">
          2016: Sycret.ink
        </Typography>
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
            <Typography color="textPrimary" variant="body1">
              Mobile Developer: React Native + libsignal-protocol
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={1.2}>
        <Typography color="textPrimary" variant="h6">
          2015: NextBitt
        </Typography>
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
            <Typography color="textPrimary" variant="body1">
              Frontend Developer: Javascript + C#
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={1.2}>
        <Typography color="textPrimary" variant="h6">
          2014: Science4you
        </Typography>
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
            <Typography color="textPrimary" variant="body1">
              Backend Developer: Java + MySQL
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeXP;
