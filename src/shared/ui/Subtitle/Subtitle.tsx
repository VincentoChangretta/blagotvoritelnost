import { ReactNode } from 'react';

interface SubtitleProps {
   children: ReactNode;
   baseStyles?: string;
   className?: string;
}

export const Subtitle = (props: SubtitleProps) => {
   const { children, className, baseStyles = 'font-bold mb-5' } = props;
   return (
      <p className={`text-2xl text-pretty ${baseStyles} ${className} max-1100:text-xl max-500:text-base`}>{children}</p>
   );
};
