import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage, LoginPage } from 'main';

import './assets/theme/global.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
