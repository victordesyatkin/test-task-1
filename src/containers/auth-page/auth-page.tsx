import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { getRoutes } from '../../helpers';
import { initialStateType } from '../../modules/types';
import AuthPage from '../../components/auth-page';

const AuthPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 0;
`;

const AuthPageContainer: FC = () => {
  const isLogged = useSelector<initialStateType>(
    (state) => state?.auth.isLogged,
    (previous, next) => previous === next
  );
  const routers = useMemo(() => getRoutes(), []);
  const history = useHistory();
  if (isLogged) {
    history.push(routers.QUESTIONS);
  }
  return (
    <AuthPageWrapper>
      <AuthPage />
    </AuthPageWrapper>
  );
};

export default AuthPageContainer;
