import React, { FC } from 'react';
import { Field, FieldAttributes } from 'formik';

const FieldStyled: FC<FieldAttributes<any> & { className?: string }> = ({
  className,
  ...props
}) => {
  return <Field className={className} {...props} />;
};

export default FieldStyled;
