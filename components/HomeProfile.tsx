import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
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
    subtitle: {
      color:
        theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      backgroundColor:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark,
      display: 'inline-block',
      // paddingTop: theme.spacing(0.5),
      // paddingBottom: theme.spacing(0.5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  }));
  const classes = useStyles();
  const pathLogo = dark ? 'logo-i' : 'logo';
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            <span style={{ paddingLeft: '32px' }} />
            React developer looking for a full-time remote position, where I can apply my agile web
            development experience to boost the growth and productivity of your company. Not only am
            I able to work with cutting edge frontend technologies (React.js, Next.js, Material-UI,
            Typescript), but am also open to teach, mentor and lead any team willing to learn about
            them.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          className={`${classes.profBox}`}
          alignItems="center"
          justifyContent="center">
          <Typography
            className={`${classes.subtitle} transitions`}
            color="textPrimary"
            variant="body1">
            {/* <i className={`fas fa-chevron-right ${classes.detail}`} /> */}
            React developer
          </Typography>
        </Box>
        <Box
          display="flex"
          className={`${classes.profBox}`}
          alignItems="center"
          justifyContent="center">
          <Typography
            className={`${classes.subtitle} transitions`}
            color="textPrimary"
            variant="body1">
            {/* <i className={`fas fa-chevron-right ${classes.detail}`} /> */}
            Near Lisbon, Portugal
          </Typography>
        </Box>
        <Box
          display="flex"
          className={`${classes.profBox}`}
          alignItems="center"
          justifyContent="center">
          <Typography
            className={`${classes.subtitle} transitions`}
            color="textPrimary"
            variant="body1">
            {/* <i className={`fas fa-chevron-right ${classes.detail}`} /> */}
            Full-time & full remote
          </Typography>
        </Box>
        <Box
          display="flex"
          className={`${classes.profBox}`}
          alignItems="center"
          justifyContent="center">
          <Typography
            className={`${classes.subtitle} transitions`}
            color="textPrimary"
            variant="body1">
            {/* <i className={`fas fa-chevron-right ${classes.detail}`} /> */}
            Challenging projects
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
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
      </Grid>
    </Grid>
  );
};

export interface IHomeProfileProps {
  dark: boolean;
  theme: any;
}

export default HomeProfile;
