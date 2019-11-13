import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const HomeSkills = (): any => {
  return (
    <Box>
      <Box>
        <Typography variant="h6">Full-time</Typography>
        <Typography variant="body1">
          I&lsquo;ve recently started looking for a full-time remote position as a front-end
          developer that matches my profile.
        </Typography>
      </Box>
      <Box pt={1.2}>
        <Typography variant="h6">Freelance / Consulting</Typography>
        <Typography variant="body1">
          In the mean time I&lsquo;m open to consult / freelance for people in need of help with
          their business.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeSkills;
