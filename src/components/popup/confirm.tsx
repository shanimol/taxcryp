/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useOnClickOutside } from '@app/hooks';

import Button from '../button/button';

import './styles.scss';

interface PopupProps {
  className?: string,
  title: string,
  desc?:  string,
  onConfirm: () => void,
  onCancel: () => void,
  yesBtn: string,
  noBtn: string,
  status?: string,
}

const Confirm: React.FC<PopupProps> = ({
  className,
  title,
  desc,
  onConfirm,
  onCancel,
  yesBtn,
  noBtn,
  status
}) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useOnClickOutside(ref, () => onCancel());

  const showContent = () => !status || status === 'saving';
  const showLoader = () => status === 'saving';


  return (
    <div className={`popup-wrapper  d-flex flex justify-center ${className}`}>
      <div className="confirm-popup" ref={ref}>
        {showContent() && (
          <>
            {showLoader() && <img src="assets/loader.gif" width="40px" alt="" className="loading-indicator" />}
            <div style={{ opacity: status === 'saving' ? 0.5 : 1 }}>
              <div className="d-between">
                <div className="text-[20px]">{title}</div>
                <img
                  src="assets/icons/close.svg"
                  alt=""
                  width="25px"
                  className="pointer close"
                  role="presentation"
                  onClick={onCancel}
                />
              </div>
              <div className="desc mt-20 f-14 f-reg">{desc}</div>
              <div className="flex mt-30 justify-end">
                <Button className="action-btn f-14" onClick={onConfirm} label={yesBtn} />
                <Button type="ghost" className="action-btn ml-[10px] f-14" onClick={onCancel} label={noBtn} />
              </div>
            </div>
          </>)}
      </div>
    </div>
  );
};

export default Confirm;
