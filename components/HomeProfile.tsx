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
        <Box pb={5}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Hello, I&apos;m Ricardo, a mid level Javascript developer looking for the right place to
            transition to senior. A place with a familiar environment where I can see myself long
            term, build a career, keep learning new things, teach what I already know, and be part
            of a team that shares the same mindset.
            <br />
            <br />
            I dropped out of school to take a shot at running a business with a good old friend of
            mine while we were still young, and after two years we decided to sell it. Mainly
            because we felt that we had already learned the most we could, and was time to move on
            from that adventure to focus solely on development.
            <br />
            <br />
            I&apos;m super specialized in Javascript and am primarily looking for positions where I
            can make use of those skills, specifically Frontend Engineer (React) or Full Stack
            (Node/Next). If I&apos;m able to work using Typescript and Material-UI I&apos;ll be even
            happier since those are the frameworks I&apos;ve been learning for the last year. My
            ideal projects are UI Development (Storybook, Dashboarding, Data Visualization) and
            Feature Development (For tools and software).
            <br />
            <br />
            I know and have been using systems like Git and SCRUM, and other source control / agile
            development systems for many years.
            <br />
            <br />
            My weakest point by far is testing. To be honest it&apos;s just something I&apos;ve
            never previously used and only recently started working with (Mocha, Jest, Enzyme), but
            never had any actual professional experience and am eager to learn more about it. Also
            uncommon CSS captures, if you want to trap me in the interview that&apos;s a good way to
            do it!
            <br />
            <br />
            I&apos;m mainly looking for in-house or nearshore projects. I&apos;d love to work with
            international teams once again, but I&apos;m not a big fan of having to travel regularly
            / relocate. What I&apos;m NOT looking for is the typical outsourcing / contracting deal,
            it&apos;s just something I&apos;ve grown out of, hope you can understand.
            <br />
            <br />
            Other than that I just need to say that I feel ready to take on a challenging project
            and apply not only my agile development skills, but everything I&apos;ve learned to
            contribute to the growth and productivity of your company.
            <br />
            <br />
            Have a nice day!
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
            Javascript Developer
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
            UI & Feature Development
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
        <Box
          display="flex"
          className={`${classes.profBox}`}
          alignItems="center"
          justifyContent="center"
          mb={5}>
          <Typography
            className={`${classes.subtitle} transitions`}
            color="textPrimary"
            variant="body1">
            {/* <i className={`fas fa-chevron-right ${classes.detail}`} /> */}
            Near Lisbon, Portugal
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
              React.js
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

        <Box display="flex" className={`${classes.profBox}`} alignItems="center" mb={5}>
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
