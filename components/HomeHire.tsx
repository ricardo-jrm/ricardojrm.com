import React from 'react';

import Typography from '@material-ui/core/Typography';

const HomeHire = ({  }: IHomeHireProps): any => {
  return (
    <>
      <Typography variant="body1">
        - Remote Job
        <br />
        - Freelance Work
        <br />- Consulting
      </Typography>
    </>
  );
};

export interface IHomeHireProps {}

export default HomeHire;
