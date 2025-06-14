import { TextareaHTMLAttributes } from 'react';

type TextAreaPropsType = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

interface TextAreaProps extends TextAreaPropsType {
   className?: string;
   inputStyles?: string;
   value?: string;
   truePlaceholder?: string;
   placeholderStyles?: string;
   onChange?: (value: string) => void;
}

export const TextArea = (props: TextAreaProps) => {
   const { className, value, onChange, placeholder, truePlaceholder, placeholderStyles, inputStyles, ...otherProps } =
      props;

   const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
   };

   return (
      <div className={classNames('', {}, [className])}>
         <label>
            <p className={placeholderStyles}>{placeholder}</p>
            <textarea
               className={classNames('p-5 bg-gray-200 rounded-stdRadius w-full resize-none', {}, [inputStyles])}
               value={value}
               onChange={onChangeHandler}
               placeholder={truePlaceholder}
               {...otherProps}
            />
         </label>
      </div>
   );
};
