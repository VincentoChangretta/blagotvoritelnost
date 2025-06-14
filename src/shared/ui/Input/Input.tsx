'use client';

import { InputHTMLAttributes, ReactNode, memo } from 'react';

export enum InputThemes {
   WITH_GLASS = 'bg-mainBg text-mainBg-inv',
}

export enum InputVariants {
   DEFAULT = 'default',
   WITH_BUTTON = 'with-button',
   WITH_ICON = 'with-icon',
}

type InputPropsBase = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends InputPropsBase {
   className?: string;
   inputStyles?: string;
   buttonStyles?: string;
   buttonOnClick?: () => void;
   activated?: boolean;
   value?: string;
   truePlaceholder?: string;
   placeholderStyles?: string;
   onChange?: (value: string) => void;
   theme: InputThemes;
   variant?: InputVariants;
   icon?: ReactNode;
}

export const Input = memo((props: InputProps) => {
   const {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      truePlaceholder,
      placeholderStyles,
      inputStyles,
      theme,
      variant = InputVariants.DEFAULT,
      icon,
      buttonStyles = 'text-xl',
      buttonOnClick,
      activated,
      ...otherProps
   } = props;

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (variant === InputVariants.WITH_BUTTON && e.target.value.length > 15) {
         const newValue = e.target.value.slice(0, 15);
         onChange?.(newValue);
      } else {
         onChange?.(e.target.value);
      }
   };

   const onInvalidHandler = (e: React.InvalidEvent<HTMLInputElement>) => {
      e.currentTarget.setCustomValidity('Пожалуйста, заполните это поле');
   };

   const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
      (e.currentTarget as HTMLInputElement).setCustomValidity('');
   };

   const renderInput = () => {
      const baseInput = (
         <div className={`rounded-stdRadius ${theme}`}>
            <input
               className={`p-stdPadding rounded-stdRadius w-full truncate ${inputStyles} ${
                  variant === InputVariants.WITH_BUTTON ? 'withButton pr-14' : ''
               }`}
               readOnly={activated}
               type={type}
               value={value}
               onChange={onChangeHandler}
               onInvalid={onInvalidHandler}
               onInput={onInputHandler}
               placeholder={truePlaceholder}
               {...otherProps}
            />
         </div>
      );

      if (variant === InputVariants.DEFAULT) {
         return baseInput;
      }

      return (
         <div className={`relative w-full ${activated && 'opacity-30 pointer-events-none'}`}>
            {baseInput}
            {variant === InputVariants.WITH_BUTTON && (
               <button
                  type='button'
                  onClick={e => {
                     buttonOnClick?.(), e.currentTarget.blur();
                  }}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 backdrop-blur-3xl cursor-pointer p-3 rounded-stdRadius duration-200 hover:bg-mainYellow ${buttonStyles} ${
                     activated && 'pointer-events-none'
                  }`}
               >
                  Активировать
               </button>
            )}
            {variant === InputVariants.WITH_ICON && icon && (
               <div className='absolute left-2 top-1/2 -translate-y-1/2 text-xl'>{icon}</div>
            )}
         </div>
      );
   };

   return (
      <div className={`w-full ${className}`}>
         <label>
            {placeholder && <p className={`text-mainBg ${placeholderStyles}`}>{placeholder}</p>}
            {renderInput()}
         </label>
      </div>
   );
});
