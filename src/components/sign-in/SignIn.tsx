import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';

import { colors, sizes, Form } from '../../assets/theme';
import { initialStateType, AuthType } from '../../modules/types';
import Label from '../label';
import CheckboxField from '../checkbox-field/CheckboxField';
import InputField from '../input-field/InputField';

const SignInWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignInForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
const SignInHeader = styled.h1`
  width: 100%;
  color: ${colors.grey};
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
`;

const SignInBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${sizes.xxs};
`;

const SignIn: FC = () => {
  const { email, isRemember } = useSelector<initialStateType, AuthType>(
    (state) => state.auth
  );
  const initialValues = { email, isRemember };
  const onSubmit = (values, actions) => {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };
  return (
    <SignInWrapper>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          // handleSubmit,
          // isSubmitting,
        }) => (
          <Form>
            <SignInForm>
              <SignInHeader>Sign in to Quiz Developer</SignInHeader>
              <SignInBody>
                <Label>
                  <InputField
                    aria-label="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                </Label>
                <CheckboxField name="isRemember" label="Remember me" />
                <button type="submit">Submit</button>
              </SignInBody>
            </SignInForm>
          </Form>
        )}
      </Formik>
    </SignInWrapper>
  );
};

export default SignIn;
