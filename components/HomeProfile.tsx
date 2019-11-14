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

const HomeProfile = (): any => {
  const classes = useStyles();

  return (
    <Box alignItems="center">
      <Typography color="textPrimary" variant="h6">
        Senior Frontend Developer near Lisbon, Portugal with an effective stack of:
      </Typography>

      <Box display="flex" className={`${classes.profBox}`} alignItems="center">
        <Box display="inline-block">
          <img
            className={`${classes.profIcon}`}
            src="/static/img/reactjs-logo.png"
            title="React.js"
            alt="React.js logo"
          />
        </Box>
        <Box display="inline-block">
          <Typography color="textPrimary" variant="body1">
            <Link href="/" color="inherit">
              React.js (3+ years)
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box display="flex" className={`${classes.profBox}`} alignItems="center">
        <Box display="inline-block">
          <img
            className={`${classes.profIcon}`}
            src="/static/img/nextjs-logo.png"
            title="Next.js"
            alt="Next.js logo"
          />
        </Box>
        <Box display="inline-block">
          <Typography color="textPrimary" variant="body1">
            <Link href="/" color="inherit">
              Next.js
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box display="flex" className={`${classes.profBox}`} alignItems="center">
        <Box display="inline-block">
          <img
            className={`${classes.profIcon}`}
            src="/static/img/typescript-logo.png"
            title="Typescript"
            alt="Typescript logo"
          />
        </Box>
        <Box display="inline-block">
          <Typography color="textPrimary" variant="body1">
            <Link href="/" color="inherit">
              Typescript
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box display="flex" className={`${classes.profBox}`} alignItems="center">
        <Box display="inline-block">
          <img
            className={`${classes.profIcon}`}
            src="/static/img/materialui-logo.png"
            title="Material-UI"
            alt="Material-UI logo"
          />
        </Box>
        <Box display="inline-block">
          <Typography color="textPrimary" variant="body1">
            <Link href="/" color="inherit">
              Material-UI
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeProfile;
