import React, { FC } from 'react';
import { Form, Field } from 'formik';

const FieldStyled: FC<
  React.FormHTMLAttributes<HTMLFormElement> & { className?: string }
> = ({ className, ...props }) => {
  return <Form className={className} {...props} />;
};

export default FieldStyled;
