/* eslint-disable react/no-multi-comp */

import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '@app/hooks';

import './styles.scss';

type SelectProps = {
  id: string,
  menuItems: Array<any>,
  label?: string,
  header?: string,
  selectedItem: any,
  placeHolder: string,
  // eslint-disable-next-line no-unused-vars
  onMenuItemClick: (item: any) => void,
  isMandatory?: boolean,
  showErrorMessage?: boolean,
  errorMessage?: string,
  className?: string,
  isDisabled?: boolean
}

const Select: React.FC<SelectProps> = ({
  id,
  menuItems,
  label,
  header,
  selectedItem,
  placeHolder,
  onMenuItemClick,
  isMandatory,
  showErrorMessage,
  errorMessage,
  className,
  isDisabled
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [showMenu, ToggleMenu] = useState(false);

  useOnClickOutside(ref, () => ToggleMenu(false));

  const isSelectedItem = (menu: any) => selectedItem.value === menu.value;

  const getSelectedText = () => selectedItem.label || selectedItem.name || placeHolder;

  const getMenuItems = () => {
    return [...menuItems];
  };

  const renderMenuButton = () => (
    <>
      <div
        className="menu-btn px-[10px] text-[14px] flex justify-between ellipsis"
        role="presentation"
        data-tip={getSelectedText()}
        data-for={id}
        onClick={() => { if (!isDisabled) { ToggleMenu(!showMenu); }}}
      >
        <span className="ellipsis">{getSelectedText()}</span>
        <img src="assets/icons/arrow-bottom.svg" alt="" width="12px" className="ml-15" />
      </div>
    </>
  );

  return (
    <div className={`select-wrapper full-width pointer ${className}`}>
      {label && (
        <div className="input-label mb-[8px]">
          {label}
          {isMandatory ? <span> *</span> : null}
        </div>)}
      {renderMenuButton()}
      <div className={`f-semi ${showErrorMessage ? 'error-message' : 'hide-error-message'}`}>
        {errorMessage}
      </div>
      {showMenu && (
        <div className="menu-wrapper" ref={ref}>
          {header && <div className="menu-header">{header}</div>}
          <div className="menu-item-wrapper">
            {getMenuItems().map((menu) => (
              <div
                key={menu.label}
                className={`menu-item v-center pl-20 full-width text-[14px]
                  ${isSelectedItem(menu) ? 'selected' : ''} ${menu.disabled ? 'disabled' : ''}`}
                role="presentation"
                onClick={() => {
                  if (!menu.disabled) {
                    onMenuItemClick(menu);
                    ToggleMenu(false);
                  }
                }}
              >
                {menu.label || menu.name}
              </div>
            ))}
          </div>
        </div>)}
    </div>
  );
};

export default Select;
