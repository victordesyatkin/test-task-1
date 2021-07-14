import React from 'react';

import Image from './images/checkbox-button.svg';
import './checkbox-button.scss';

const CheckboxButton = (props) => {
  const {
    name,
    type = 'checkbox',
    src = Image,
    alt,
    tabIndex,
    label,
    value,
    isHidden,
    isRequired,
    isDisabled,
    isChecked,
    theme,
  } = props;
  const className = 'checkbox-button';
  let classNames = `${className}`;
  const htmlFor = `${name}-${Math.random().toString(16).substr(2)}`;
  const themes = { bold: 'bold' };
  classNames += themes[theme] ? ` ${className}_theme_${themes[theme]}` : '';
  classNames += isHidden ? ` ${className}_hidden` : '';
  return (
    <label htmlFor={htmlFor} className={classNames}>
      <input
        id={htmlFor}
        name={name}
        value={value}
        type={type}
        tabIndex={tabIndex}
        required={isRequired}
        disabled={isDisabled}
        checked={isChecked}
        className={`${className}__input`}
        hidden={isHidden}
      />
      <span className={`${className}__check-mark`}>
        {src && <img src={src} alt={alt} className={`${className}__mark`} />}
      </span>
      <span className={`${className}__label`}>{label}</span>
    </label>
  );
};

export default CheckboxButton;
