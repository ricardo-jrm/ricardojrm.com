import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
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

const ThemePopover = ({ hook }: IThemePopoverProps): any => {
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
            <Typography color="textPrimary" variant="body1">
              The content of the Popover.
            </Typography>
          </Box>
          <Box>
            <Typography color="textPrimary" variant="h6">
              Mode:
            </Typography>
            <Typography color="textPrimary" variant="body1">
              The content of the Popover.
            </Typography>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export interface IThemePopoverProps {
  hook: any;
}

export default ThemePopover;
