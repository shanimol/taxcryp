import React from 'react';

import './styles.scss';

interface PopupProps {
    title: string,
    children: React.ReactNode,
    className: string,
    onCancel: () => void,
    isLoading: boolean
}

const Popup: React.FC<PopupProps> = ({
  title,
  children,
  className,
  onCancel,
  isLoading
}) => {
  return (
    <div className="popup-wrapper f-12 f-reg flex h-center">
      <div className={`details-popup ${className}`}>
        {isLoading && <img src="assets/gif/loader.gif" width="40px" alt="" className="loading-indicator" />}
        <div className="text-[20px] font-medium	">{title}</div>
        <img
          src="assets/icons/close.svg"
          alt=""
          width="20px"
          className="pointer close"
          role="presentation"
          onClick={onCancel}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
