import React, { useState } from 'react';

import './styles.scss';

type InputProps = {
  value: string,
  id: string,
  placeholder?: string,
  maxLength?: number,
  label?: string,
  className?: string,
  type?: string,
  disabled?: boolean,
  isMandatory?: boolean,
  errorMessage?: string,
  showErrorMessage?: boolean,
  showSuggetions?: boolean,
  suggetions?: Array<any>,
  prefix?: string,

  // need to add type e: React.KeyboardEvent<HTMLInputElement> , (e: React.ChangeEvent<HTMLInputElement> removed for the timebeing

  onChange: () => void,
  onKeyPress?: () => void,
  onKeyDown?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  onSuggentionClick?: () => void,
}

const Input: React.FC <InputProps> = ({
  onChange,
  id,
  value,
  placeholder,
  maxLength,
  label,
  className,
  type,
  disabled,
  isMandatory,
  errorMessage,
  showErrorMessage,
  onKeyPress,
  onKeyDown,
  onFocus,
  onBlur,
  showSuggetions,
  onSuggentionClick = () => null,
  suggetions,
  prefix
}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className={`position ${className}`}>
        {label && (
          <div className="input-label f-semi mb-[8px] text-gray">
            {label}
            {isMandatory ? <span> *</span> : null}
          </div>)}
        <div className="v-center custom-input">
          {prefix && (<div className="p-10 prefix f-reg">{prefix}</div>)}
          <input
            id={id}
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
            className={`input-space px-[10px] text-[14px] full-content ${showSuggetions ? 'search-input' : ''} 
            ${(type === 'password') ? 'password-input' : ''}
            ${(type === 'outline') ? 'outline-input' : ''}
            ${(type === 'date' && value.length === 0) ? 'date-input' : ''}`}
            disabled={disabled}
            type={showPassword ? 'text' : type}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete="false"
          />
          {(type === 'password')
            && <img
              className="password-visibility pointer"
              onClick={() => setShowPassword(!showPassword)}
              role="presentation"
              src={`assets/icons/${showPassword ? 'hide' : 'show'}-password-default.svg`}
              alt=""
              width="19px"
            />}
        </div>
        {showSuggetions && <img className="search-icon" src="assets/icons/search.svg" alt="" width="18px" />}
        <div className={`${showErrorMessage ? 'error-message' : 'hide-error-message'}`}>
          {errorMessage}
        </div>
        {showSuggetions && !!suggetions?.length && value && (
          <div className="input-suggetions-wrapper p-10">
            {suggetions.map((item) => (
              <div
                key={item.id}
                className="py-10 pointer"
                role="presentation"
                onClick={() => onSuggentionClick()}
              >
                {item.label}
              </div>
            ))}
          </div>)}
      </div>
    </>
  );
};

export default Input;
