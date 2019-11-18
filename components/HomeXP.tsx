import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const HomeXP = ({ dark, theme }: IHomeXPProps): any => {
  const useStyles = makeStyles(() => ({
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
    label: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      color:
        theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      backgroundColor:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark,
    },
  }));
  const classes = useStyles();
  const pathLogo = dark ? 'logo-i' : 'logo';
  return (
    <Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h5">
          <span className={`transitions ${classes.label}`}>2017-2019</span>
        </Typography>
        <Box display="flex" alignItems="center" pt={2}>
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
            <Typography className="transitions" color="textPrimary" variant="h6">
              Glaiveware
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body1">
              Full Stack Developer, Project Manager, Business owner & Co-Founder
            </Typography>
          </Box>
        </Box>
        <Box pt={0.75} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eos placeat quod fuga
            blanditiis doloribus consequuntur architecto! Optio accusantium impedit praesentium,
            sapiente modi dignissimos consequuntur tempora ab consectetur quaerat amet?
          </Typography>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h5">
          <span className={`transitions ${classes.label}`}>2016</span>
        </Typography>
        <Box display="flex" alignItems="center" pt={2}>
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
            <Typography className="transitions" color="textPrimary" variant="h6">
              Freelancer
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body1">
              Mobile Developer: React Native + libsignal-protocol
            </Typography>
          </Box>
        </Box>
        <Box pt={0.75} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eos placeat quod fuga
            blanditiis doloribus consequuntur architecto! Optio accusantium impedit praesentium,
            sapiente modi dignissimos consequuntur tempora ab consectetur quaerat amet?
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" pt={2}>
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
            <Typography className="transitions" color="textPrimary" variant="h6">
              American Heart Association
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body1">
              React Developer - React dashboard
            </Typography>
          </Box>
        </Box>
        <Box pt={0.75} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eos placeat quod fuga
            blanditiis doloribus consequuntur architecto! Optio accusantium impedit praesentium,
            sapiente modi dignissimos consequuntur tempora ab consectetur quaerat amet?
          </Typography>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h5">
          <span className={`transitions ${classes.label}`}>2015</span>
        </Typography>
        <Box display="flex" alignItems="center" pt={2}>
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
            <Typography className="transitions" color="textPrimary" variant="h6">
              NextBitt Business Technologies
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body1">
              Frontend Developer: Javascript + C# (MVC)
            </Typography>
          </Box>
        </Box>
        <Box pt={0.75} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eos placeat quod fuga
            blanditiis doloribus consequuntur architecto! Optio accusantium impedit praesentium,
            sapiente modi dignissimos consequuntur tempora ab consectetur quaerat amet?
          </Typography>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h5">
          <span className={`transitions ${classes.label}`}>2014</span>
        </Typography>
        <Box display="flex" alignItems="center" pt={2}>
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
            <Typography className="transitions" color="textPrimary" variant="h6">
              Science4you
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body1">
              Backend Developer: Java + MySQL
            </Typography>
          </Box>
        </Box>
        <Box pt={0.75} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eos placeat quod fuga
            blanditiis doloribus consequuntur architecto! Optio accusantium impedit praesentium,
            sapiente modi dignissimos consequuntur tempora ab consectetur quaerat amet?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export interface IHomeXPProps {
  dark: boolean;
  theme: any;
}

export default HomeXP;
