import React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

import { MenuList } from '../menu-list';
import { MenuItemProps } from '../menu-item';

import styles from './styles.modules.scss';

interface HeaderProps {
  menuList: Array<MenuItemProps>;
}

const Header: React.FC<HeaderProps> = ({ menuList }) => {
  return (
    <header className={styles.Header}>
      <Container
        maxWidth="xl"
        className={styles.Header__container}
        sx={{ display: 'flex' }}
      >
        <Link href="/" aria-label="Go to homepage" sx={{ mr: '1.25rem' }}>
          <AddModeratorIcon fontSize="large" />
        </Link>
        <div className={styles.Header__nav}>
          <MenuList list={menuList} />
        </div>
      </Container>
    </header>
  );
};

export { Header };
