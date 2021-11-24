/* eslint-disable react/button-has-type */
import React, { FC, useMemo } from 'react';

import Play from './images/play.svg';
import Stop from './images/stop.svg';
import './button.scss';

type ButtonProps = Partial<{
  type: 'submit' | 'reset' | 'button';
  name: string;
  value: string | number | readonly string[];
  variant: string;
  isDisabled: boolean;
  alt: string;
  onClick: () => void;
}>;

const Button: FC<ButtonProps> = (props) => {
  const {
    type = 'button',
    name,
    value,
    variant = 'play',
    isDisabled = false,
    alt = 'play',
    onClick,
  } = props;
  const variants = useMemo(
    () =>
      new Map([
        ['play', Play],
        ['stop', Stop],
      ]),
    []
  );
  const types = useMemo(
    () =>
      new Map([
        ['button', 'button'],
        ['submit', 'submit'],
        ['reset', 'reset'],
      ]),
    []
  );
  const correctType = types.get(type) || 'button';
  const src = variants.get(variant) || '';
  const componentClassName = 'button';
  let componentClassNames = `${componentClassName}`;
  componentClassNames += src ? ` ${componentClassName}_variant-${variant}` : '';
  return (
    <button
      className={componentClassNames}
      type={correctType}
      name={name}
      value={value}
      disabled={isDisabled}
      onClick={onClick}
    >
      {src && (
        <img className={`${componentClassName}__content`} src={src} alt={alt} />
      )}
    </button>
  );
};

export default Button;
