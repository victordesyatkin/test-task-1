import React from 'react';

import { MenuItem } from 'main';
import type { MenuItemProps } from 'main';
import styles from './styles.module.scss';

interface MenuListProps {
  list: Array<MenuItemProps>;
}

const MenuList: React.FC<MenuListProps> = ({ list }) => {
  return (
    <nav className={styles.MenuList}>
      <ul className={styles.MenuList__list}>
        {list.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export type { MenuListProps };
export { MenuList };
