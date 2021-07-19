import React, { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../assets/theme';
import { CheckboxFieldType } from '../../modules/types';
import FieldStyled from '../field-styled';
import Label from '../label';

const CheckboxFieldContent = styled.span`
  padding-left: 0.5rem;
`;

const CheckboxFieldMark = styled.span`
  align-items: center;
  border: 1px solid ${colors.primaryColorOpacity25};
  border-radius: 0.286rem;
  box-sizing: border-box;
  display: flex;
  width: 1.42rem;
  height: 1.42rem;
  justify-content: center;
  min-width: 1.42rem;
  background-color: ${colors.white};
  position: relative;

  :after {
    top: 50%;
    left: 0.429rem;
    margin-top: -0.328rem;
    width: 0.429rem;
    height: 0.714rem;
    border: solid ${colors.blueLight};
    border-width: 0 1px 1px 0;
    transform: scale(0) rotate(35deg);
    display: block;
    content: '';
    transition: transform 0.3s;
  }
`;

const CheckboxFieldStyled = styled(FieldStyled)`
  &:checked + ${CheckboxFieldMark}:after {
    transform: scale(1) rotate(35deg);
    transition: transform 0.3s;
  }
`;

const CheckboxField: FC<CheckboxFieldType> = (props) => {
  const {
    name,
    tabIndex,
    label,
    value,
    isHidden,
    isRequired,
    isDisabled,
    isChecked,
  } = props;
  return (
    <Label>
      <CheckboxFieldStyled
        name={name}
        value={value}
        type="checkbox"
        tabIndex={tabIndex}
        required={isRequired}
        disabled={isDisabled}
        checked={isChecked}
        hidden={isHidden}
      />
      <CheckboxFieldMark />
      <CheckboxFieldContent>{label}</CheckboxFieldContent>
    </Label>
  );
};

export default CheckboxField;
