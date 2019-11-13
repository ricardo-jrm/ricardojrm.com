import React from 'react';

import Typography from '@material-ui/core/Typography';

const HomeProfile = ({  }: IHomeProfileProps): any => {
  return (
    <>
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
    </>
  );
};

export interface IHomeProfileProps {}

export default HomeProfile;
