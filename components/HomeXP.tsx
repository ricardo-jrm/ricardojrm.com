import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  xpImg: {
    width: '75px',
    height: 'auto',
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
  xpWrap: {
    marginRight: theme.spacing(1.2),
  },
}));

const HomeXP = ({ dark }: IHomeXPProps): any => {
  const classes = useStyles();
  const pathLogo = dark ? 'logo-i' : 'logo';
  return (
    <Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h6">
          2017-2019
        </Typography>
        <Box display="flex" alignItems="start" py={0.5}>
          <Box className={`${classes.xpWrap}`} pt={0.75} display="inline-block">
            <Link
              href="https://glaiveware.com/"
              title="Glaiveware"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <img
                className={`${classes.xpImg}`}
                src={`static/img/glaiveware-${pathLogo}.png`}
                title="Glaiveware"
                alt="Glaiveware logo"
              />
            </Link>
          </Box>
          <Box display="inline-block">
            <Typography className="transitions" color="textPrimary" variant="body1">
              Glaiveware - Full Stack Developer, Project Manager, Business owner & Co-Founder
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body2">
              Full Stack Developer, Project Manager, Business owner & Co-Founder
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h6">
          2016
        </Typography>
        <Box display="flex" alignItems="start" py={0.5}>
          <Box className={`${classes.xpWrap}`} display="inline-block" alignContent="center">
            <Link
              href="https://www.freelancer.com/"
              title="Freelancer"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <img
                className={`${classes.xpImg}`}
                src="/static/img/freelancer-logo.png"
                title="Freelancer"
                alt="Freelancer logo"
              />
            </Link>
          </Box>
          <Box display="inline-block">
            <Typography className="transitions" color="textPrimary" variant="body1">
              Freelancer - Mobile Developer
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body2">
              React Native + libsignal-protocol
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="start" py={0.5}>
          <Box className={`${classes.xpWrap}`} display="inline-block">
            <Link
              href="https://www.heart.org/"
              title="American Heart Association"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <img
                className={`${classes.xpImg}`}
                src="/static/img/aha-logo.png"
                title="American Heart Association"
                alt="American Heart Association logo"
              />
            </Link>
          </Box>
          <Box display="inline-block">
            <Typography className="transitions" color="textPrimary" variant="body1">
              American Heart Association - React Developer
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body2">
              React dashboard
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h6">
          2015: NextBitt Business Technologies
        </Typography>
        <Box display="flex" alignItems="start" py={0.5}>
          <Box className={`${classes.xpWrap}`} display="inline-block">
            <Link
              href="http://nextbitt.com/"
              title="Nextbitt Business Technologies"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <img
                className={`${classes.xpImg}`}
                src="/static/img/nextbitt-logo.png"
                title="Nextbitt Business Technologies"
                alt="Nextbitt logo"
              />
            </Link>
          </Box>
          <Box display="inline-block">
            <Typography className="transitions" color="textPrimary" variant="body1">
              Frontend Developer: Javascript + C#
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h6">
          2014: Science4you
        </Typography>
        <Box display="flex" alignItems="start" py={0.5}>
          <Box className={`${classes.xpWrap}`} display="inline-block">
            <Link
              href="https://blog.science4you.pt/"
              title="Science4you"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <img
                className={`${classes.xpImg}`}
                src="/static/img/s4y-logo.png"
                title="Science4you"
                alt="Science4you logo"
              />
            </Link>
          </Box>
          <Box display="inline-block">
            <Typography className="transitions" color="textPrimary" variant="body1">
              Backend Developer: Java + MySQL
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export interface IHomeXPProps {
  dark: boolean;
}

export default HomeXP;
