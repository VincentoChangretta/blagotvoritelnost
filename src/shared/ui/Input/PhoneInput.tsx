import { IMaskInput } from 'react-imask';
import { InputThemes } from './Input';
import { InputHTMLAttributes } from 'react';

type InputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface PhoneInputProps extends InputPropsType {
   value?: string;
   onChange: (value: string) => void;
   placeholder?: string;
   className?: string;
   inputStyles?: string;
   placeholderStyles?: string;
   theme: InputThemes;
}

export const phoneMaskLength = 18;

export const PhoneInput = ({
   value,
   onChange,
   placeholder,
   className,
   inputStyles,
   placeholderStyles = '',
   theme,
   ...otherProps
}: PhoneInputProps) => {
   const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
      e.currentTarget.setCustomValidity('Пожалуйста, введите номер телефона');
   };

   const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      (e.currentTarget as HTMLInputElement).setCustomValidity('');
   };

   return (
      <div className={`w-full ${className}`}>
         <label>
            {placeholder && <p className={`text-mainBg ${placeholderStyles}`}>{placeholder}</p>}
            <IMaskInput
               mask='+{7} (000) 000-00-00'
               value={value}
               unmask={true}
               onAccept={onChange}
               className={`p-stdPadding w-full rounded-stdRadius bg-smAlphaMainBg-inv text-inherit duration-300 ${theme} ${inputStyles}`}
               placeholder='+7 (___) ___-__-__'
               required
               onInvalid={handleInvalid}
               onInput={handleInput}
               {...otherProps}
            />
         </label>
      </div>
   );
};
