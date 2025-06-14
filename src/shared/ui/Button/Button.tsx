import { useTranslation } from 'react-i18next';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export enum ButtonThemes {
   STANDART = 'bg-mainGreen text-mainBg hover:bg-mainGreen-light',
   INVERTED = 'bg-mainBg text-mainGreen hover:bg-mainGreen-light hover:text-mainBg',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
   theme: ButtonThemes;
   primary?: boolean;
   link?: boolean;
   a?: boolean;
   to?: string;
}

export const Button = (props: ButtonProps) => {
   const { className, children, theme, primary, link, to, a, ...other } = props;
   const { t } = useTranslation();

   console.log(link);
   console.log(a);

   if (primary) {
      return (
         <div className={`relative z-50 max-w-[300px] w-full ${className}`}>
            <button
               className={`primaryBtn flex justify-center items-center w-full  rounded-stdRadius font-bold transition-all duration-300 text-[22px] shadow-xl cursor-pointer ${theme} ${
                  !link || (!a && 'p-stdPadding')
               } max-500:text-lg`}
               {...other}
            >
               {link ? (
                  <Link to={to}>{children}</Link>
               ) : a ? (
                  <a href={to} className='p-stdPadding'>
                     {children}
                  </a>
               ) : (
                  children
               )}
            </button>
         </div>
      );
   }

   return (
      <button
         className={`flex justify-center items-center max-w-[300px] w-full p-stdPadding rounded-stdRadius  font-bold transition-all duration-300 text-[22px] shadow-xl cursor-pointer ${theme} ${className} max-500:text-lg`}
         {...other}
      >
         {children}
      </button>
   );
};
