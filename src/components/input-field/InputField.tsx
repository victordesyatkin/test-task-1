import React, { FC } from 'react';
import styled from 'styled-components';
import { FieldAttributes } from 'formik';

import { colors } from '../../assets/theme';
import FieldStyled from '../field-styled';

const InputWrapper = styled.div`
  width: 100%;
  min-width: 0;
`;

const InputInner = styled(FieldStyled)`
  width: 100%;
  padding: 0.7rem;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.isError ? colors.lightRed : colors.primaryColorOpacity25};
  border-radius: 0.185rem;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${colors.primaryColorOpacity25};

  ::placeholder {
    color: ${colors.primaryColorOpacity25};
  }

  :focus,
  :hover {
    border-color: ${colors.primaryColorOpacity50};
    color: ${colors.primaryColorOpacity50};
  }
`;

const InputError = styled.div`
  color: ${colors.lightRed};
`;

const InputField: FC<FieldAttributes<any> & { className?: string }> = (
  props
) => {
  const { name, errors, touched, type, onChange, onBlur, value, placeholder } =
    props;
  const isError = errors[name] && touched[name];

  return (
    <InputWrapper>
      <InputInner {...props} />
      {isError && <InputError>{errors[name]}</InputError>}
    </InputWrapper>
  );
};

export default InputField;
