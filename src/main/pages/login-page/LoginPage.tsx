import React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import TextField from '@mui/material/TextField';

import styles from './styles.modules.scss';

interface MyFormValues {
  firstName: string;
}

const LoginPage: React.FC = () => {
  const initialValues: MyFormValues = { firstName: 'q' };
  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field name="Username" label="Email/Username" as={TextField} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export { LoginPage };
