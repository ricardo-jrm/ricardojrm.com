import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
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
}));

const HomeProfile = ({ dark }: IHomeProfileProps): any => {
  const classes = useStyles();
  const pathLogo = dark ? 'logo-i' : 'logo';
  return (
    <Box alignItems="center">
      <Typography className="transitions" color="textPrimary" variant="h6">
        Senior Frontend Developer near Lisbon, Portugal with an effective stack of:
      </Typography>

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
          <Typography className="transitions" color="textPrimary" variant="body1">
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
          <Typography className="transitions" color="textPrimary" variant="body1">
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
          <Typography className="transitions" color="textPrimary" variant="body1">
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
          <Typography className="transitions" color="textPrimary" variant="body1">
            Material-UI
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export interface IHomeProfileProps {
  dark: boolean;
}

export default HomeProfile;
