import React from 'react';

import './styles.scss';

const Button: React.FC<{
  onClick: () => void,
  label: string,
  className?: string,
  type?: string,
}> = ({
  onClick,
  label,
  className,
  type
}) => (
  <button
    type="submit"
    onClick={() => onClick()}
    className={`btn ${className} ${type === 'ghost' ? 'ghost-btn' : ''}`}
  >
    {label}
  </button>
);

export default Button;
