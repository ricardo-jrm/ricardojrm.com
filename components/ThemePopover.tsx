import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PaletteIcon from '@material-ui/icons/Palette';

const useStyles = makeStyles(() => {
  return {
    button: {
      textTransform: 'none',
    },
  };
});

const ThemePopover = ({ hook, array }: IThemePopoverProps): any => {
  console.log(hook);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        size="large"
        className={classes.button}
        onClick={handleClick}
        startIcon={<PaletteIcon />}>
        <Typography color="textPrimary" variant="body1">
          Change Theme
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Box px={4} py={2}>
          <Box pb={0.75}>
            <Typography color="textPrimary" variant="h6">
              Themes:
            </Typography>
            {array.map((
              theme: any, //  onClick={hook(theme[1])}
            ) => (
              <Box>
                <Button style={{ width: '100%' }}>
                  <Box display="flex" alignItems="center" style={{ width: '100%' }} py={0.75}>
                    <Box display="flex-start" textAlign="start" flexGrow={1} pr={5}>
                      <Typography color="textPrimary" variant="body1">
                        {theme[0]}
                      </Typography>
                    </Box>
                    <Box>
                      <Grid container style={{ minWidth: '175px' }}>
                        <Grid
                          item
                          xs={4}
                          style={{
                            backgroundColor: theme[1].palette.primary.dark,
                            height: '20px',
                          }}>
                          {' '}
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{
                            backgroundColor: theme[1].palette.primary.main,
                            height: '20px',
                          }}>
                          {' '}
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{
                            backgroundColor: theme[1].palette.primary.light,
                            height: '20px',
                          }}>
                          {' '}
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{
                            backgroundColor: theme[1].palette.secondary.dark,
                            height: '20px',
                          }}>
                          {' '}
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{
                            backgroundColor: theme[1].palette.secondary.main,
                            height: '20px',
                          }}>
                          {' '}
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{
                            backgroundColor: theme[1].palette.secondary.light,
                            height: '20px',
                          }}>
                          {' '}
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{ backgroundColor: theme[1].palette.error.dark, height: '20px' }}>
                          {' '}
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{ backgroundColor: theme[1].palette.error.main, height: '20px' }}>
                          {' '}
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          style={{ backgroundColor: theme[1].palette.error.light, height: '20px' }}>
                          {' '}
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Button>
              </Box>
            ))}
          </Box>
          <Box>
            <Typography color="textPrimary" variant="h6">
              Mode:
            </Typography>
            <Typography color="textPrimary" variant="body1">
              {'Dark <-> Light'}
            </Typography>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export interface IThemePopoverProps {
  hook: any;
  array: any;
}

export default ThemePopover;
