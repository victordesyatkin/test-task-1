import styled from 'styled-components';
import { rgba } from 'polished';

import FormStyled from '../../../components/form-styled';

const colors = {
  grey: '#808488', // #eaeff4
  lightGrey: '#dddddd',
  white: '#fff',
  black: '#000',
  lightRed: '#ffa5a5',
  blue: '#17a2b8',
  blueLight: '#50a1ff',
  green: '#28a745',
  yellow: '#ffc107',
  primaryColor: rgba(31, 32, 65, 1),
  primaryColorOpacity75: rgba(31, 32, 65, 0.75),
  primaryColorOpacity50: rgba(31, 32, 65, 0.5),
  primaryColorOpacity25: rgba(31, 32, 65, 0.25),
  primaryColorOpacity10: rgba(31, 32, 65, 0.1),
};

const sizes = {
  xxs: '320px',
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1440px',
};

const Scrollbars = styled.div`
  &::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${rgba(colors.black, 0.3)};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-clip: padding-box;
  }
`;

const Form = styled(FormStyled)`
  width: 100%;
  min-width: 0;
`;

export { colors, sizes, Scrollbars, Form };
