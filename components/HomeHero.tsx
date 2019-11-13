import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import { globals } from 'src/theme';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: '100vh',
  },
  button: {
    margin: theme.spacing(0.5),
    textTransform: 'none',
    border: 0,
  },
  ...globals,
}));

const HomeHero = ({  }: IHomeHeroProps): any => {
  const classes = useStyles();

  const [menu, setMenu] = useState(0);

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <div className={`${classes.root} bg-fixed bg-wa`}>
      <Grid container className={`${classes.container}`} justify="center" alignItems="center">
        <Grid container item xs={12} sm={11} md={10} lg={9} justify="flex-start">
          <Grid xs={12} item>
            <Box display="inline-block" fontWeight={700}>
              <Typography className={`${classes.title} transitions`} variant="h1">
                RicardoJRM
              </Typography>
            </Box>
            <Box ml={2} display="inline-block">
              <img
                className={`${classes.imgR} ${classes.imgLogo} transitions`}
                src="/static/img/ricardojrm-logo.png"
                title=""
                alt=""
              />
            </Box>
          </Grid>
          <Grid xs={12} item>
            <Box ml={0.8}>
              <Typography variant="h4" component="h2">
                {'React Developer'}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={3} lg={4} item>
            <Box my={1}>
              <ButtonGroup fullWidth>
                <Button size="large" onClick={() => setMenu(0)} className={`${classes.button}`}>
                  <Typography className={`${classes.crsPointer}`} variant="h6" component="h3">
                    <span className={menu === 0 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {'<'}
                    </span>
                    {menu === 0 ? 'ForHire' : 'For Hire'}
                    <span className={menu === 0 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {' />'}
                    </span>
                  </Typography>
                </Button>
              </ButtonGroup>
              <ButtonGroup fullWidth>
                <Button size="large" onClick={() => setMenu(1)} className={classes.button}>
                  <Typography className={`${classes.crsPointer}`} variant="h6" component="h3">
                    <span className={menu === 1 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {'<'}
                    </span>
                    Profile
                    <span className={menu === 1 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {' />'}
                    </span>
                  </Typography>
                </Button>
              </ButtonGroup>
              <ButtonGroup fullWidth>
                <Button size="large" onClick={() => setMenu(2)} className={classes.button}>
                  <Typography className={`${classes.crsPointer}`} variant="h6" component="h3">
                    <span className={menu === 2 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {'<'}
                    </span>
                    About
                    <span className={menu === 2 ? `transitions` : `transitions ${classes.vHidden}`}>
                      {' />'}
                    </span>
                  </Typography>
                </Button>
              </ButtonGroup>
            </Box>
            <Box textAlign="center">
              <Box mx={1} display="inline-block">
                <Link href="/" color="inherit" onClick={preventDefault}>
                  <i className="fas fa-at fa-4x" />
                </Link>
              </Box>
              <Box mx={1} display="inline-block">
                <Link href="/" color="inherit" onClick={preventDefault}>
                  <i className="fab fa-linkedin fa-4x" />
                </Link>
              </Box>
              <Box mx={1} display="inline-block">
                <Link href="/" color="inherit" onClick={preventDefault}>
                  <i className="fab fa-github fa-4x" />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={9} lg={8} item>
            <Box p={2}>
              <Box display={menu === 0 ? 'block' : 'none'}>
                <Typography variant="body1">
                  - Remote Job
                  <br />
                  - Freelance Work
                  <br />- Consulting
                </Typography>
              </Box>
              <Box display={menu === 1 ? 'block' : 'none'}>
                <Typography variant="body1">
                  - Senior Front End Developer
                  <br />
                  - Full Remote
                  <br />
                  Effective Stack:
                  <br />
                  {'  - React.js (3+ yrs)'}
                  <br />
                  {'  - Next.js'}
                  <br />
                  {'  - Typescript'}
                  <br />
                  {'  - Material-UI'}
                </Typography>
              </Box>
              <Box display={menu === 2 ? 'block' : 'none'}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam nostrum
                  repudiandae unde similique! Beatae eveniet distinctio accusantium maxime eius ipsa
                  qui deleniti, iste aperiam officia, eligendi autem. Deserunt, adipisci.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export interface IHomeHeroProps {}

export default HomeHero;
