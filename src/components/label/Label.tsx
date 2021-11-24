import React, { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../main/assets/theme';

const LabelWrapper = styled.label`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.214rem;
  color: ${colors.primaryColorOpacity50};
  cursor: pointer;
  user-select: none;
`;

const Label: FC<{ className?: string }> = (props) => {
  const { children, className } = props;
  return <LabelWrapper className={className}>{children}</LabelWrapper>;
};

export default Label;
