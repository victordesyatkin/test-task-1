import React, { FC } from 'react';
import styled from 'styled-components';

import SignIn from '../sign-in';

const AuthPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-center: center;
`;

const AuthPage: FC = () => {
  return (
    <AuthPageWrapper>
      <SignIn />
    </AuthPageWrapper>
  );
};

export default AuthPage;
