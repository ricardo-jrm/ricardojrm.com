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
      // cursor: 'pointer',
    },
    xpWrap: {
      marginRight: theme.spacing(1.2),
    },
    textIcon: {
      maxHeight: theme.typography.body2.fontSize,
      width: 'auto',
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
          <span className={`transitions ${classes.label}`}>Current</span>
        </Typography>
        <Box display="flex" alignItems="center" pt={2}>
          <Box className={`${classes.xpWrap}`} pt={0.75} display="inline-block">
            <img
              className={`${classes.xpImg}`}
              src={`static/img/ricardojrm-${pathLogo}.png`}
              title="RicardoJRM"
              alt="RicardoJRM logo"
            />
          </Box>
          <Box display="inline-block">
            <Typography className="transitions" color="textPrimary" variant="h6">
              Looking for challenging projects
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body1">
              React Developer
            </Typography>
          </Box>
        </Box>
        <Box pt={1} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Currently looking for a full-time remote position where I can solely focus on React
            development, work on challenging projects and apply my agile web development experience
            to contribute to the the growth and productivity of your company.
          </Typography>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h5">
          <span className={`transitions ${classes.label}`}>2018-2019</span>
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
        <Box pt={1} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            A great learning experience that made me grow as a developer, taught me how to manage
            projects and run a business that created bespoke web apps above market standards.
          </Typography>
          <Typography className="transitions" color="textPrimary" variant="body2">
            - HTML5 + CSS3 (Bootstrap 4, SASS)
            <br />
            - JavaScript (React.js, Redux, Redux-Saga, Node.js, Express.js, Helmet.js, Webpack 4,
            Babel)
            <br />
            - Database (Firebase, MySQL)
            <br />
            - Ubuntu (nginx)
            <br />
            - AWS (EC2, SES)
            <br />
            - SEO & SEM
            <br />
            - Branding & Design
            <br />
            - Marketing & Advertising
            <br />- Copywriting & Content Management
          </Typography>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h5">
          <span className={`transitions ${classes.label}`}>2017</span>
        </Typography>
        <Box display="flex" alignItems="center" pt={2}>
          <Box className={`${classes.xpWrap}`} display="inline-block" alignContent="center">
            <img
              className={`${classes.xpImg}`}
              src="/static/img/sycretink-logo.png"
              title="Sycret.ink"
              alt="Sycret.ink logo"
            />
          </Box>
          <Box display="inline-block">
            <Typography className="transitions" color="textPrimary" variant="h6">
              Sycret.ink
            </Typography>
            <Typography className="transitions" color="textPrimary" variant="body1">
              React Native Developer
            </Typography>
          </Box>
        </Box>
        <Box pt={1} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Mobile chat app with end to end encryption in a serverless environment with extra
            features, to be developed under contract with a team of 3 people (AWS Engineer / Lead,
            Backend specialist, Mobile Developer) and I learned a lot about end to end encryption
            protocols and mobile app deployment / version control from it.
          </Typography>
          <Typography className="transitions" color="textPrimary" variant="body2">
            - React Native
            <br />- libsignal-protocol
          </Typography>
        </Box>
        <Box pt={1} pb={1.25} display="none">
          <Typography className="transitions" color="textPrimary" variant="body2">
            During this time I was aiming to sharpen my React skills and explore mobile development,
            so I created multiple apps as a freelancer using React Native. The most notable being a
            mobile app called Sycret.ink{' '}
            <img
              src="/static/img/sycretink-logo.png"
              className={classes.textIcon}
              title="Sycret.ink"
              alt="Sycret.ink Logo"
            />{' '}
            which was basically a Signal clone (mobile chat app with end to end encryption in a
            serverless environment) with extra features to be developed internally for a private
            company, it took a team of 3 people (AWS Engineer / Lead, Backend specialist, Mobile
            Developer) and I learned a lot about end to end encryption protocols and mobile app
            deployment / version control from it.
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
                src="/static/img/aha.png"
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
              Full Stack Javascript Developer
            </Typography>
          </Box>
        </Box>
        <Box pt={1} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Created an admin dashboard to control American Heart Association&apos;s Kinect
            Integration that interfaced the users with the data collected, connected doctors and
            their patients, printed out reports and allowed superusers to manage the whole system.
            This project was acquired through a university scholarship and I was free to work with
            any technology, so I took this opportunity to apply what I was learning at the time and
            built my first web app as a Full Stack Javascript Developer using React.js and Node.js.
          </Typography>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h5">
          <span className={`transitions ${classes.label}`}>2016</span>
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
              Frontend Developer
            </Typography>
          </Box>
        </Box>
        <Box pt={1} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Created multiple analytics dashboards, reporting, auditing and management tools for
            NextBitt&apos;s Asset & Facility Management Software as a Frontend Developer using
            Angular.js and C# in a .NET MVC environment that was very intensive when it came to Date
            / Time logic and Data Visualization.
          </Typography>
          <Typography className="transitions" color="textPrimary" variant="body2">
            - HTML5 + CSS3 (Bootstrap 3)
            <br />
            - Javascript (JQuery, Angular.js)
            <br />
            - .NET (C#, MVC)
            <br />- Date / Time logic (
            <Link
              href="https://momentjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Moment.js
            </Link>
            ,{' '}
            <Link
              href="https://bootstrap-datepicker.readthedocs.io/en/stable/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Date Picker
            </Link>
            ,{' '}
            <Link
              href="http://www.daterangepicker.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Date Range Picker
            </Link>
            )
            <br />- Data Visualization (
            <Link
              href="https://developers.google.com/chart/interactive/docs/gallery"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Google Charts
            </Link>
            ,{' '}
            <Link
              href="http://dygraphs.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              dygraphs
            </Link>
            ,{' '}
            <Link
              href="http://www.flotcharts.org/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              flotcharts
            </Link>
            ,{' '}
            <Link
              href="https://www.chartjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Chart.js
            </Link>
            ,{' '}
            <Link
              href="https://gionkunz.github.io/chartist-js/index.html"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Chartist.js
            </Link>
            ,{' '}
            <Link
              href="https://d3js.org/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              d3.js
            </Link>
            ,{' '}
            <Link
              href="https://c3js.org/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              C3.js
            </Link>
            ,{' '}
            <Link
              href="https://github.hubspot.com/pace/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Pace.js
            </Link>
            ,{' '}
            <Link
              href="https://benpickles.github.io/peity/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Peity
            </Link>
            ,{' '}
            <Link
              href="https://omnipotent.net/jquery.sparkline/#s-about"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Sparklines
            </Link>
            ,{' '}
            <Link
              href="https://github.com/rendro/easy-pie-chart"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Easy Pie Charts
            </Link>
            ,{' '}
            <Link
              href="https://www.datatables.net/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Datatables
            </Link>
            ,{' '}
            <Link
              href="https://itsjavi.com/bootstrap-colorpicker/"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Color Picker
            </Link>
            ,{' '}
            <Link
              href="http://ionden.com/a/plugins/ion.rangeSlider/index.html"
              target="_blank"
              rel="noopener noreferrer"
              color="textPrimary">
              Ion.RangeSlider
            </Link>
            )
          </Typography>
          <Box display="none">
            <Box py={0.75}>
              <Typography className="transitions" color="textPrimary" variant="body2">
                This was the place where I grew the most as a web developer, as I was first hired
                with little JQuery and Bootstrap experience and a few months later was leading the
                team using Angular.js (...)
              </Typography>
            </Box>
            <Typography className="transitions" color="textPrimary" variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eos placeat quod fuga
              blanditiis doloribus consequuntur architecto! Optio accusantium impedit praesentium,
              sapiente modi dignissimos consequuntur tempora ab consectetur quaerat amet?
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box py={2}>
        <Typography className="transitions" color="textPrimary" variant="h5">
          <span className={`transitions ${classes.label}`}>2015</span>
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
              Java Developer
            </Typography>
          </Box>
        </Box>
        <Box pt={1} pb={1.25}>
          <Typography className="transitions" color="textPrimary" variant="body2">
            Created a backend management system for Science4you&apos;s online store using Java and
            MySQL. What started out as a simple display and printing tool, to aid the people in the
            backend department deal with the high volume of sales the company was experiencing with
            its growth, soon evolved into a whole application. This app was able to manage and
            control the online store&apos;s orders, print detailed reports and send automated emails
            to the customer, all of which were previously handled by hand.
          </Typography>
          <Box display="none">
            <Box py={0.75}>
              <Typography className="transitions" color="textPrimary" variant="body2">
                I was still a greenthorn with no professional experience and was very fortunate to
                find such an awesome environment where I got to meet great people that I learned
                from and helped me ease into the team workflow, especially my boss Hugo Morais who
                dedicated an entire day to teach me Git himself, continued to teach me about web
                technologies (such as all the inner workings of Apache, PHP, and MySQL) and even
                advanced concepts like regular expressions. This was the experience that influenced
                me to pursue development as a career and built my work environment values, that I
                carry in hopes of making my fellow team members feel the same way I did when I first
                started.
              </Typography>
            </Box>
            <Typography className="transitions" color="textPrimary" variant="body2">
              Eventually moved on seeking more web focused projects, specifically in Javascript
              which I was falling for harder every day as I learned it, and proportionally hating
              Java more and more which was my main language and the codebase I was working on at the
              time.
            </Typography>
          </Box>
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
