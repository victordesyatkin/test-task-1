function validateEmail(value: unknown): string | undefined {
  let error: string | undefined;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(String(value))) {
    error = 'Invalid email address';
  }
  return error;
}

// eslint-disable-next-line import/prefer-default-export
export { validateEmail };
