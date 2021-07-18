import React, { FC } from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

import { colors, Label } from '../../assets/theme';
import { CheckboxFieldType } from '../../modules/types';

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
`;

const CheckboxFieldMarkContent = styled.span`
  content: '\2713';
  color: ${colors.primaryColorOpacity50};
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
      <Field
        name={name}
        value={value}
        type="checkbox"
        tabIndex={tabIndex}
        required={isRequired}
        disabled={isDisabled}
        checked={isChecked}
        hidden={isHidden}
      />
      <CheckboxFieldMark>
        <CheckboxFieldMarkContent />
      </CheckboxFieldMark>
      <CheckboxFieldContent>{label}</CheckboxFieldContent>
    </Label>
  );
};

export default CheckboxField;
