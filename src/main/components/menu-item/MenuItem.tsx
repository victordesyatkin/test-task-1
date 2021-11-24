import React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MUIMenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import cn from 'classnames';
import { NavLinkProps, NavLink, Link, LinkProps } from 'react-router-dom';

import styles from './styles.module.scss';

interface MenuItemProps {
  id: string;
  text: string;
  href?: string;
  subMenuList?: Array<LinkProps>;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, id }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const subMenuListLength = list;
  return (
    <li className={styles.MenuItem}>
      <Button
        ref={anchorRef}
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        variant="text"
      >
        <span className={styles.MenuItem__item}>{text}</span>
        <span
          className={cn(styles.MenuItem__arrow, {
            [styles.MenuItem__arrow_open]: open,
          })}
        >
          <KeyboardArrowDownIcon fontSize="small" />
        </span>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MUIMenuItem component={} />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* <span
        onClick={handleClick}
        role="button"
        aria-describedby={menuItemId}
        onKeyDown={noop}
        tabIndex={0}
        className={styles.MenuItem__itemWrapper}
      >
        <span className={styles.MenuItem__item}>{text}</span>
        <span
          className={cn(styles.MenuItem__arrow, {
            [styles.MenuItem__arrow_open]: open,
          })}
          aria-haspopup="true"
          aria-owns={open ? menuItemId : undefined}
        >
          <KeyboardArrowDownIcon fontSize="small" />
        </span>
      </span>
      <ClickAwayListener onClickAway={handlePopoverClose}>
        <Popover
          id={menuItemId}
          open={open}
          anchorEl={anchorEl}
          sx={{
            pointerEvents: 'none',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <MenuList>
            <MUIMenuItem onClick={handlePopoverClose}>Profile</MUIMenuItem>
            <MUIMenuItem onClick={handlePopoverClose}>My account</MUIMenuItem>
            <MUIMenuItem onClick={handlePopoverClose}>Logout</MUIMenuItem>
          </MenuList>
        </Popover>
      </ClickAwayListener> */}
    </li>
  );
};

export type { MenuItemProps };
export { MenuItem };
