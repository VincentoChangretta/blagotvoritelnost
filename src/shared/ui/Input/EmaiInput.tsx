import { InputHTMLAttributes, memo } from 'react';
import { Input } from './Input';
import { InputThemes } from './Input';

type InputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface EmailInputProps extends InputPropsType {
   value?: string;
   onChange: (value: string) => void;
   placeholder?: string;
   className?: string;
   inputStyles?: string;
   truePlaceholder?: string;
   placeholderStyles?: string;
   theme: InputThemes;
}

export const EmailInput = memo((props: EmailInputProps) => {
   const { truePlaceholder } = props;
   return <Input type='email' placeholder={truePlaceholder} required {...props} />;
});
