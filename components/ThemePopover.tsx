import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PaletteIcon from '@material-ui/icons/Palette';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(() => {
  return {
    button: {
      textTransform: 'none',
    },
  };
});

const useDarkMode = (theme: any, setTheme: any) => {
  const {
    palette: { type },
  } = theme;
  const newTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      type: type === 'light' ? 'dark' : 'light',
    },
  };
  setTheme(newTheme);
};

const ThemePopover = ({ darkHook, themeHook, array }: IThemePopoverProps): any => {
  const handleToggle = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    darkHook.setDarkToggle({ ...darkHook.darkToggle, [name]: event.target.checked });
    useDarkMode(themeHook.activeTheme, themeHook.setActiveTheme);
  };

  const handleTheme = (newTheme: any) => {
    themeHook.setActiveTheme(newTheme);
  };

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
              theme: any, // onClick={themeHook.setActiveTheme(theme[1])}
            ) => (
              <Box key={theme[0]}>
                <Button
                  type="button"
                  style={{ width: '100%' }}
                  onClick={() => handleTheme(theme[1])}>
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
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="body1" color="textPrimary">
                  Light
                </Typography>
              </Box>
              <Box px={0.5}>
                <Switch
                  checked={darkHook.darkToggle.checked}
                  onChange={handleToggle('checked')}
                  value="checked"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Box>
              <Box>
                <Typography variant="body1" color="textPrimary">
                  Dark
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export interface IThemePopoverProps {
  darkHook: any;
  themeHook: any;
  array: any;
}

export default ThemePopover;
