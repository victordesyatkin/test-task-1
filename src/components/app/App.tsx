import React, { FC, Suspense, lazy, useMemo } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { getRoutes } from '../../helpers';
import { AuthType } from '../../modules/types';

const AuthPage = lazy(() => import('../../containers/auth-page'));

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App: FC<{ auth: AuthType }> = (props) => {
  const { auth } = props;
  const { isLogged } = auth;
  const routers = useMemo(() => getRoutes(), []);
  const history = useHistory();
  if (!isLogged) {
    const { location } = history;
    const { pathname } = location;
    if (pathname !== routers.AUTH) {
      history.push(routers.AUTH);
    }
  }
  return (
    <AppWrapper>
      <Suspense fallback={<span>Loading</span>}>
        <Switch>
          <Route path={routers.AUTH}>
            <AuthPage />
          </Route>
          <Redirect to={routers.AUTH} />
        </Switch>
      </Suspense>
    </AppWrapper>
  );
};

export default App;
