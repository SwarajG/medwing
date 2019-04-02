import React from 'react';
import s from './styles';

function Button(props) {
  const { onClick, filled = false, className } = props;
  return (
    <button
      onClick={onClick}
      className={`${s.buttonClass(filled)} ${className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;