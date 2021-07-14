import React from 'react';

import './radio-button.scss';

const RadioButton = (props) => {
  const {
    name,
    value,
    label,
    type = 'radio',
    tabIndex,
    isDisabled,
    isChecked,
    isHidden,
    required,
    onChange,
  } = props;
  const htmlFor = `${name}-${Math.random().toString(16).substr(2)}`;
  const className = 'radio-button';
  let classNames = `${className}`;
  classNames += isHidden ? ` ${className}_hidden` : '';
  return (
    <label className={classNames} htmlFor={htmlFor}>
      <input
        id={htmlFor}
        name={name}
        value={value}
        type={type}
        tabIndex={tabIndex}
        required={required}
        disabled={isDisabled}
        checked={isChecked}
        className={`${className}__input`}
        hidden={isHidden}
        onChange={onChange}
      />
      <span className={`${className}__check-mark`}>
        <span className={`${className}__check-dummy`} />
      </span>
      {label && <span className={`${className}__label`}>{label}</span>}
    </label>
  );
};

export default RadioButton;
