import React from 'react';

import { Header, MenuItemProps } from '../../components';

import styles from './styles.module.scss';

const menuList: Array<MenuItemProps> = [
  {
    id: 'COVID-19 queuing',
    text: 'COVID-19 queuing',
    url: '/',
  },
  {
    id: 'Product',
    text: 'Product',
    list: [],
  },
  {
    id: 'Resources',
    text: 'Resources',
    list: [],
  },
  {
    id: 'Pricing',
    text: 'Pricing',
    url: '/',
  },
  {
    id: 'Demo',
    text: 'Demo',
    url: '/',
  },
  {
    id: 'Demo',
    text: 'Demo',
    url: '/',
  },
  {
    id: 'API',
    text: 'API',
  },
];

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__header}>
        <Header menuList={menuList} />
      </div>
      MainPage
    </div>
  );
};

export { MainPage };
