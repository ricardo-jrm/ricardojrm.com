import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  skillIcon: {
    width: '30px',
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
  skillBox: {
    height: '45px',
  },
}));

const HomeSkills = ({ dark }: IHomeSkillsProps): any => {
  const classes = useStyles();
  const pathLogo = dark ? 'logo-i' : 'logo';

  const skills = [
    ['HTML5', '/static/img/html5-logo.png'],
    ['CSS3', '/static/img/css3-logo.png'],
    ['Javascript', '/static/img/javascript-logo.png'],
    ['Typescript', '/static/img/typescript-logo.png'],
    ['React.js', '/static/img/reactjs-logo.png'],
    ['Material-UI', '/static/img/materialui-logo.png'],
    ['Next.js', `/static/img/nextjs-${pathLogo}.png`],
    ['Node.js', '/static/img/nodejs-logo.png'],
    ['Redux', '/static/img/redux-logo.png'],
    ['Redux Saga', '/static/img/reduxsaga-logo.png'],
    ['Bootstrap', '/static/img/bootstrap-logo.png'],
    ['JQuery', '/static/img/jquery-logo.png'],
    ['Angular', '/static/img/angular-logo.png'],
    ['.NET MVC', '/static/img/aspmvc-logo.png'],
    ['C#', '/static/img/csharp-logo.png'],
    ['ECMAscript', '/static/img/ecmascript-logo.png'],
    ['Express.js', '/static/img/express-logo.png'],
    ['Git', `/static/img/git-${pathLogo}.png`],
    ['Android Studio', '/static/img/androidstudio-logo.png'],
    ['React Native', '/static/img/reactnative-logo.png'],
    ['SCRUM', '/static/img/scrum-logo.png'],
    ['Adobe Creative Cloud', '/static/img/adobecc-logo.png'],
    ['Aseprite', '/static/img/aseprite-logo.png'],
    ['paint.NET', '/static/img/paintnet-logo.png'],
    ['Godot Engine', '/static/img/godot-logo.png'],
    ['Firebase', '/static/img/firebase-logo.png'],
    ['MySQL', '/static/img/mysql-logo.png'],
    ['MongoDB', '/static/img/mongodb-logo.png'],
  ];

  return (
    <Box>
      <Grid container>
        {skills.map((skill) => {
          return (
            <Grid item xs={6} sm={4} md={4} lg={4} xl={3} key={skill[0]}>
              <Box display="flex" className={`${classes.skillBox}`} alignItems="center">
                <Box display="inline-block">
                  <img
                    className={`${classes.skillIcon}`}
                    src={skill[1]}
                    title={skill[0]}
                    alt={`${skill[0]} logo`}
                  />
                </Box>
                <Box display="inline-block">
                  <Typography className="transitions" color="textPrimary" variant="body1">
                    {skill[0]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export interface IHomeSkillsProps {
  dark: boolean;
}

export default HomeSkills;
