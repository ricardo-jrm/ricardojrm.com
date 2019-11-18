import React from 'react';

import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

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
  const type = window.localStorage.getItem('DARK_MODE') === 'light' ? 'dark' : 'light';
  const newTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      type,
    },
  };
  setTheme(newTheme);
  window.localStorage.setItem('DARK_MODE', type);
};

const ThemePopover = ({ darkHook, themeHook, array }: IThemePopoverProps): any => {
  const handleToggle = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    darkHook.setDarkToggle({ ...darkHook.darkToggle, [name]: event.target.checked });
    useDarkMode(themeHook.activeTheme, themeHook.setActiveTheme);
  };

  const handleTheme = (theme: any) => {
    const newTheme = {
      ...theme[1],
      palette: {
        ...theme[1].palette,
        type: window.localStorage.getItem('DARK_MODE') === 'light' ? 'light' : 'dark',
      },
    };
    themeHook.setActiveTheme(newTheme);
    window.localStorage.setItem('THEME', theme[0]);
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
        startIcon={<PaletteIcon className="transitions" />}>
        <Typography className="transitions" color="textPrimary" variant="body1">
          Change Theme
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        className="transitions"
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
            <Typography className="transitions" color="textPrimary" variant="h6">
              Themes:
            </Typography>
            {array.map((theme: any) => {
              const themeConfig = createMuiTheme(theme[1]);
              return (
                <Box key={theme[0]}>
                  <Button
                    type="button"
                    style={{ width: '100%' }}
                    onClick={() => handleTheme(theme)}>
                    <Box display="flex" alignItems="center" style={{ width: '100%' }} py={0.75}>
                      <Box display="flex-start" textAlign="start" flexGrow={1} pr={5}>
                        <Typography className="transitions" color="textPrimary" variant="body1">
                          {theme[0]}
                        </Typography>
                      </Box>
                      <Box>
                        <Grid container style={{ minWidth: '175px' }}>
                          <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.primary.dark,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.primary.main,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.primary.light,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.secondary.dark,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.secondary.main,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.secondary.light,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid>
                          {/* <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.error.dark,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.error.main,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              backgroundColor: themeConfig.palette.error.light,
                              height: '20px',
                            }}>
                            {' '}
                          </Grid> */}
                        </Grid>
                      </Box>
                    </Box>
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Box>
            <Typography className="transitions" color="textPrimary" variant="h6">
              Mode:
            </Typography>
            <Box display="flex" alignItems="center">
              <Box>
                <Typography className="transitions" variant="body1" color="textPrimary">
                  Light
                </Typography>
              </Box>
              <Box px={0.5}>
                <Switch
                  checked={darkHook.darkToggle.checked}
                  onChange={handleToggle('checked')}
                  value="checked"
                  className="transitions"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Box>
              <Box>
                <Typography className="transitions" variant="body1" color="textPrimary">
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
