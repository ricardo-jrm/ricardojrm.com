import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const HomeProfile = ({ dark, theme }: IHomeProfileProps): any => {
  const useStyles = makeStyles(() => ({
    profIcon: {
      width: '35px',
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
    profBox: {
      height: '45px',
    },
    detail: {
      marginRight: theme.spacing(1.2),
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark,
    },
  }));
  const classes = useStyles();
  const pathLogo = dark ? 'logo-i' : 'logo';
  return (
    <Box alignItems="center">
      <Box py={0.75}>
        <Typography className="transitions" color="textPrimary" variant="body1">
          <i className={`fas fa-chevron-right ${classes.detail}`} />
          Senior frontend developer
        </Typography>
      </Box>
      <Box py={0.75}>
        <Typography className="transitions" color="textPrimary" variant="body1">
          <i className={`fas fa-chevron-right ${classes.detail}`} />
          Near Lisbon, Portugal
        </Typography>
      </Box>
      <Box py={0.75}>
        <Typography className="transitions" color="textPrimary" variant="body1">
          <i className={`fas fa-chevron-right ${classes.detail}`} />
          Full-time & full remote
        </Typography>
      </Box>
      <Box py={0.75} pb={2}>
        <Typography className="transitions" color="textPrimary" variant="body1">
          <i className={`fas fa-chevron-right ${classes.detail}`} />
          Looking for challenging projects
        </Typography>
      </Box>

      <Box display="flex" className={`${classes.profBox}`} alignItems="center">
        <Box display="inline-block">
          <Link
            href="https://reactjs.org/"
            title="React.js"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit">
            <img
              className={`${classes.profIcon}`}
              src="/static/img/reactjs-logo.png"
              title="React.js"
              alt="React.js logo"
            />
          </Link>
        </Box>
        <Box display="inline-block">
          <Typography className="transitions" color="textPrimary" variant="body2">
            React.js (3+ years)
          </Typography>
        </Box>
      </Box>

      <Box display="flex" className={`${classes.profBox}`} alignItems="center">
        <Box display="inline-block">
          <Link
            href="https://nextjs.org/"
            title="Next.js"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit">
            <img
              className={`${classes.profIcon}`}
              src={`/static/img/nextjs-${pathLogo}.png`}
              title="Next.js"
              alt="Next.js logo"
            />
          </Link>
        </Box>
        <Box display="inline-block">
          <Typography className="transitions" color="textPrimary" variant="body2">
            Next.js
          </Typography>
        </Box>
      </Box>

      <Box display="flex" className={`${classes.profBox}`} alignItems="center">
        <Box display="inline-block">
          <Link
            href="https://www.typescriptlang.org/"
            title="Typescript"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit">
            <img
              className={`${classes.profIcon}`}
              src="/static/img/typescript-logo.png"
              title="Typescript"
              alt="Typescript logo"
            />
          </Link>
        </Box>
        <Box display="inline-block">
          <Typography className="transitions" color="textPrimary" variant="body2">
            Typescript
          </Typography>
        </Box>
      </Box>

      <Box display="flex" className={`${classes.profBox}`} alignItems="center">
        <Box display="inline-block">
          <Link
            href="https://material-ui.com/"
            title="Material-UI"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit">
            <img
              className={`${classes.profIcon}`}
              src="/static/img/materialui-logo.png"
              title="Material-UI"
              alt="Material-UI logo"
            />
          </Link>
        </Box>
        <Box display="inline-block">
          <Typography className="transitions" color="textPrimary" variant="body2">
            Material-UI
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export interface IHomeProfileProps {
  dark: boolean;
  theme: any;
}

export default HomeProfile;
