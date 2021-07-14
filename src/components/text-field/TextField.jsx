import React from 'react';

import './text-field.scss';

const TextField = (props) => {
  const { type = 'text', value, name, label } = props;
  const className = 'text-field';
  let classNames = `${className}`;
  classNames += type === 'number' ? ` ${className}_type-number` : '';
  const htmlFor = Math.random().toString(16).slice(2);
  return (
    <label className={classNames} htmlFor={htmlFor}>
      {label && <p className={`${className}__label`}>{label}</p>}
      <input
        className={`${className}__input`}
        value={value}
        type={type}
        name={name}
        id={htmlFor}
      />
    </label>
  );
};

export default TextField;
